import { Stack, App, StackProps, RemovalPolicy, CfnOutput, Duration } from '@aws-cdk/core'
import { Bucket, BlockPublicAccess, BucketEncryption } from '@aws-cdk/aws-s3'
import { BucketDeployment, Source } from '@aws-cdk/aws-s3-deployment'
import {
  OriginAccessIdentity,
  CloudFrontWebDistributionProps,
  CloudFrontWebDistribution,
} from '@aws-cdk/aws-cloudfront'
import { PolicyStatement, CanonicalUserPrincipal } from '@aws-cdk/aws-iam'
import { ARecord, AaaaRecord, RecordTarget } from '@aws-cdk/aws-route53'
import { CloudFrontTarget } from '@aws-cdk/aws-route53-targets'
import { PublicHostedZone } from '@aws-cdk/aws-route53'

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

    const websiteBucket = new Bucket(this, bucketName, {
      bucketName: bucketName,
      websiteIndexDocument: 'index.html',
      websiteErrorDocument: 'index.html',
      removalPolicy: RemovalPolicy.DESTROY,
      blockPublicAccess: BlockPublicAccess.BLOCK_ALL,
      encryption: BucketEncryption.S3_MANAGED,
      autoDeleteObjects: true,
    })

    new BucketDeployment(this, 'deployStaticWebsite', {
      sources: [Source.asset('../public')],
      destinationBucket: websiteBucket,
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

    const cloudfrontDistProps: CloudFrontWebDistributionProps = {
      aliasConfiguration: {
        acmCertRef: certificateARN,
        names: [domainName, fullApexDomain],
      },
      originConfigs: [
        {
          s3OriginSource: {
            s3BucketSource: websiteBucket,
            originAccessIdentity: cloudfrontOAI,
          },
          behaviors: [{ isDefaultBehavior: true }],
        },
      ],
    }

    const cloudfrontDist = new CloudFrontWebDistribution(
      this,
      `${websiteName}-cfd`,
      cloudfrontDistProps,
    )

    const www = new ARecord(this, 'WWWBertieDevARecord', {
      target: RecordTarget.fromAlias(new CloudFrontTarget(cloudfrontDist)),
      zone: hostedZone,
      recordName: fullApexDomain,
      ttl: Duration.seconds(60),
    })

    new ARecord(this, 'NakedBertieDevARecord', {
      target: RecordTarget.fromAlias(new CloudFrontTarget(cloudfrontDist)),
      zone: hostedZone,
      recordName: domainName,
      ttl: Duration.seconds(60),
    })

    new AaaaRecord(this, 'NakedBertieDevAAARecord', {
      target: RecordTarget.fromAlias(new CloudFrontTarget(cloudfrontDist)),
      zone: hostedZone,
      recordName: domainName,
      ttl: Duration.seconds(60),
    })

    new CfnOutput(this, 'cloudfront-url', {
      exportName: 'CloudfrontURL',
      value: cloudfrontDist.distributionDomainName,
    })

    new CfnOutput(this, 'www-url', {
      exportName: 'wwwURL',
      value: www.domainName,
    })
  }
}
