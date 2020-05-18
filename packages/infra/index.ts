import * as pulumi from '@pulumi/pulumi'
import * as azure from '@pulumi/azure'

// Create an Azure Resource Group
const resourceGroup = new azure.core.ResourceGroup('staging-rg', {
  location: azure.Locations.WestEurope,
})

// Create an Azure resource (Storage Account)s
const storageAccount = new azure.storage.Account('staging', {
  // The location for the storage account will be derived automatically from the resource group.
  resourceGroupName: resourceGroup.name,
  accountTier: 'Standard',
  accountKind: 'StorageV2',
  accountReplicationType: 'LRS',
  staticWebsite: {
    indexDocument: 'index.html',
  },
})

export const staticEndpoint = storageAccount.primaryWebEndpoint

// We can add a CDN in front of the website
const cdn = new azure.cdn.Profile('staging-cdn', {
  resourceGroupName: resourceGroup.name,
  sku: 'Standard_Microsoft',
})

const endpoint = new azure.cdn.Endpoint('staging-cdn-ep', {
  resourceGroupName: resourceGroup.name,
  profileName: cdn.name,
  originHostHeader: storageAccount.primaryWebHost,
  origins: [
    {
      name: 'blobstorage',
      hostName: storageAccount.primaryWebHost,
    },
  ],
})

export const cdnEndpoint = pulumi.interpolate`https://${endpoint.hostName}/`
