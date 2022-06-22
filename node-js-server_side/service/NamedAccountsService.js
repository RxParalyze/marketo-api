'use strict';


/**
 * Delete NamedAccounts
 * Deletes a list of namedaccount records from the target instance.  Input records should have only one member, based on the value of 'dedupeBy'.  Required Permissions: Read-Write Named Account
 *
 * deleteAccountRequest DeleteNamedAccountRequest deleteAccountRequest
 * returns ResponseOfNamedAccount
 **/
exports.deleteNamedAccountsUsingPOST = function(deleteAccountRequest) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {"empty": false};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Describe NamedAccounts
 * Returns metadata about namedaccounts and the fields available for interaction via the API.  Required Permissions: Read-Only Named Account, Read-Write Named Account
 *
 * returns ResponseOfObjectMetaData
 **/
exports.describeUsingGET_3 = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {"empty": false};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Get Named Account Field by Name
 * Retrieves metadata for single named account field.  Required Permissions: Read-Write Schema Standard Field, Read-Write Schema Custom Field
 *
 * fieldApiName String The API name of named account field
 * returns ResponseOfLeadField
 **/
exports.getNamedAccountFieldByNameUsingGET = function(fieldApiName) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {"empty": false};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Get Named Account Fields
 * Retrieves metadata for all named account fields in the target instance.  Required Permissions: Read-Write Schema Standard Field, Read-Write Schema Custom Field
 *
 * batchSize Integer The batch size to return. The max and default value is 300. (optional)
 * nextPageToken String A token will be returned by this endpoint if the result set is greater than the batch size and can be passed in a subsequent call through this parameter. See Paging Tokens for more info. (optional)
 * returns ResponseOfLeadField
 **/
exports.getNamedAccountFieldsUsingGET = function(batchSize,nextPageToken) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {"empty": false};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Get NamedAccounts
 * Retrieves namedaccount records from the destination instance based on the submitted filter.  Required Permissions: Read-Only Named Account, Read-Write Named Account
 *
 * filterType String NamedAccounts field to filter on.  Can be any searchable fields
 * filterValues List A comma-separated list of values to match against
 * fields List Comma-separated list of fields to include in the response (optional)
 * batchSize Integer The batch size to return.  The max and default value is 300. (optional)
 * nextPageToken String A token will be returned by this endpoint if the result set is greater than the batch size and can be passed in a subsequent call through this parameter.  See Paging Tokens for more info. (optional)
 * returns ResponseOfNamedAccount
 **/
exports.getNamedAccountsUsingGET = function(filterType,filterValues,fields,batchSize,nextPageToken) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {"empty": false};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Sync NamedAccounts
 * Allows inserts, updates, or upserts of namedaccounts to the target instance.  Required Permissions: Read-Write Named Account
 *
 * syncAccountRequest SyncNamedAccountRequest syncAccountRequest
 * returns ResponseOfNamedAccount
 **/
exports.syncNamedAccountsUsingPOST = function(syncAccountRequest) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {"empty": false};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

