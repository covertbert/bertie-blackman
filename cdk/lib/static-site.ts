import { Stack, App, StackProps, RemovalPolicy, CfnOutput, Duration } from '@aws-cdk/core'
import { Bucket, BlockPublicAccess, BucketEncryption } from '@aws-cdk/aws-s3'
import {
  BucketDeployment,
  Source,
  StorageClass,
  ServerSideEncryption,
} from '@aws-cdk/aws-s3-deployment'
import { OriginAccessIdentity, Distribution, ViewerProtocolPolicy } from '@aws-cdk/aws-cloudfront'
import { PolicyStatement, CanonicalUserPrincipal } from '@aws-cdk/aws-iam'
import { ARecord, AaaaRecord, RecordTarget } from '@aws-cdk/aws-route53'
import { CloudFrontTarget } from '@aws-cdk/aws-route53-targets'
import { PublicHostedZone } from '@aws-cdk/aws-route53'
import { Certificate } from '@aws-cdk/aws-certificatemanager'
import { S3Origin } from '@aws-cdk/aws-cloudfront-origins'

export class StaticWebsiteStack extends Stack {
  constructor(scope: App, id: string, props: StackProps) {
    super(scope, id, props)

    const websiteName = 'bertie-blackman'

    const bucketName = `${websiteName}-artifacts`

    const domainName = 'bertie.dev'
    const fullApexDomain = ['www', domainName].join('.')

    const certificateARN =
      'arn:aws:acm:us-east-1:515213366596:certificate/904b7400-ca9a-4f45-8f77-91deccfd79c1'

    const hostedZone = PublicHostedZone.fromHostedZoneAttributes(this, 'HostedZone', {
      hostedZoneId: 'Z071345722DA6HTUYZ248',
      zoneName: 'bertie.dev',
    })

    const websiteBucket = new Bucket(this, 'SiteBucket', {
      bucketName: bucketName,
      removalPolicy: RemovalPolicy.DESTROY,
      autoDeleteObjects: true,
      encryption: BucketEncryption.S3_MANAGED,
    })

    const cloudfrontOAI = new OriginAccessIdentity(this, 'OAI', {
      comment: `CloudFront OAI for ${websiteName}`,
    })

    const cloudfrontS3Access = new PolicyStatement({
      actions: ['s3:GetBucket*', 's3:GetObject*', 's3:List*'],
      resources: [websiteBucket.bucketArn, `${websiteBucket.bucketArn}/*`],
      principals: [
        new CanonicalUserPrincipal(cloudfrontOAI.cloudFrontOriginAccessIdentityS3CanonicalUserId),
      ],
    })

    websiteBucket.addToResourcePolicy(cloudfrontS3Access)

    const cloudfrontDistribution = new Distribution(this, 'CloudfrontDistribution', {
      domainNames: [domainName, fullApexDomain],
      defaultRootObject: 'index.html',
      certificate: Certificate.fromCertificateArn(this, 'CertificateARN', certificateARN),
      defaultBehavior: {
        viewerProtocolPolicy: ViewerProtocolPolicy.REDIRECT_TO_HTTPS,
        origin: new S3Origin(websiteBucket, {
          originAccessIdentity: cloudfrontOAI,
          originPath: '/',
        }),
      },
    })

    new BucketDeployment(this, 'deployStaticWebsite', {
      sources: [Source.asset('../public')],
      destinationBucket: websiteBucket,
      distribution: cloudfrontDistribution,
      storageClass: StorageClass.INTELLIGENT_TIERING,
      serverSideEncryption: ServerSideEncryption.AES_256,
    })

    const www = new ARecord(this, 'WWWBertieDevARecord', {
      target: RecordTarget.fromAlias(new CloudFrontTarget(cloudfrontDistribution)),
      zone: hostedZone,
      recordName: fullApexDomain,
      ttl: Duration.seconds(60),
    })

    new ARecord(this, 'NakedBertieDevARecord', {
      target: RecordTarget.fromAlias(new CloudFrontTarget(cloudfrontDistribution)),
      zone: hostedZone,
      recordName: domainName,
      ttl: Duration.seconds(60),
    })

    new AaaaRecord(this, 'NakedBertieDevAAARecord', {
      target: RecordTarget.fromAlias(new CloudFrontTarget(cloudfrontDistribution)),
      zone: hostedZone,
      recordName: domainName,
      ttl: Duration.seconds(60),
    })

    new CfnOutput(this, 'cloudfront-url', {
      exportName: 'CloudfrontURL',
      value: cloudfrontDistribution.distributionDomainName,
    })

    new CfnOutput(this, 'www-url', {
      exportName: 'wwwURL',
      value: www.domainName,
    })
  }
}
