"use strict";
exports.__esModule = true;
var azure = require("@pulumi/azure");
// Create an Azure Resource Group
var resourceGroup = new azure.core.ResourceGroup('resourceGroup');
console.log('hello');
// Create an Azure resource (Storage Account)s
var account = new azure.storage.Account('storage', {
    // The location for the storage account will be derived automatically from the resource group.
    resourceGroupName: resourceGroup.name,
    accountTier: 'Standard',
    accountReplicationType: 'LRS'
});
// Export the connection string for the storage account
exports.connectionString = account.primaryConnectionString;
