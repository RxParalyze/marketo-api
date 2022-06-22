'use strict';


/**
 * Delete Companies
 * Deletes the included list of company records from the destination instance.  Required Permissions: Read-Write Company
 *
 * deleteCompanyRequest DeleteCompanyRequest deleteCompanyRequest
 * returns ResponseOfCompany
 **/
exports.deleteCompaniesUsingPOST = function(deleteCompanyRequest) {
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
 * Describe Companies
 * Returns metadata about companies and the fields available for interaction via the API.  Required Permissions: Read-Only Company, Read-Write Company
 *
 * returns ResponseOfObjectMetaData
 **/
exports.describeUsingGET = function() {
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
 * Get Companies
 * Retrieves company records from the destination instance based on the submitted filter.  Required Permissions: Read-Only Company, Read-Write Company
 *
 * filterType String The company field to filter on.  Searchable fields can be retrieved with the Describe Company call.
 * filterValues List Comma-separated list of values to match against
 * fields List Comma-separated list of fields to include in the response (optional)
 * batchSize Integer The batch size to return.  The max and default value is 300. (optional)
 * nextPageToken String A token will be returned by this endpoint if the result set is greater than the batch size and can be passed in a subsequent call through this parameter.  See Paging Tokens for more info. (optional)
 * returns ResponseOfCompany
 **/
exports.getCompaniesUsingGET = function(filterType,filterValues,fields,batchSize,nextPageToken) {
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
 * Get Company Field by Name
 * Retrieves metadata for single company field.  Required Permissions: Read-Write Schema Standard Field, Read-Write Schema Custom Field
 *
 * fieldApiName String The API name of company field
 * returns ResponseOfLeadField
 **/
exports.getCompanyFieldByNameUsingGET = function(fieldApiName) {
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
 * Get Company Fields
 * Retrieves metadata for all company fields in the target instance.  Required Permissions: Read-Write Schema Standard Field, Read-Write Schema Custom Field
 *
 * batchSize Integer The batch size to return. The max and default value is 300. (optional)
 * nextPageToken String A token will be returned by this endpoint if the result set is greater than the batch size and can be passed in a subsequent call through this parameter. See Paging Tokens for more info. (optional)
 * returns ResponseOfLeadField
 **/
exports.getCompanyFieldsUsingGET = function(batchSize,nextPageToken) {
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
 * Sync Companies
 * Allows inserting, updating, or upserting of company records into Marketo. Required Permissions: Read-Write Company
 *
 * syncCompanyRequest SyncCompanyRequest syncCompanyRequest
 * returns ResponseOfCompany
 **/
exports.syncCompaniesUsingPOST = function(syncCompanyRequest) {
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

