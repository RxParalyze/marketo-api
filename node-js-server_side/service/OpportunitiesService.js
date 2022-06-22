'use strict';


/**
 * Delete Opportunities
 * Deletes a list of opportunity records from the target instance.  Input records should only have one member, based on the value of 'dedupeBy'.  Required Permissions: Read-Write Named Opportunity
 *
 * deleteCustomObjectRequest DeleteCustomObjectRequest deleteCustomObjectRequest (optional)
 * returns ResponseOfCustomObject
 **/
exports.deleteOpportunitiesUsingPOST = function(deleteCustomObjectRequest) {
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
 * Delete Opportunity Roles
 * Deletes a list of opportunities from the target instance.  Required Permissions: Read-Write Named Opportunity
 *
 * deleteCustomObjectRequest DeleteCustomObjectRequest deleteCustomObjectRequest (optional)
 * returns ResponseOfCustomObject
 **/
exports.deleteOpportunityRolesUsingPOST = function(deleteCustomObjectRequest) {
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
 * Describe Opportunity Role
 * Returns object and field metadata for Opportunity Roles in the target instance.  Required Permissions: Read-Only Opportunity, Read-Write Named Opportunity
 *
 * returns ResponseOfObjectMetaData
 **/
exports.describeOpportunityRoleUsingGET = function() {
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
 * Describe Opportunity
 * Returns object and field metadata for Opportunity type records in the target instance.  Required Permissions: Read-Only Opportunity, Read-Write Named Opportunity
 *
 * returns ResponseOfObjectMetaData
 **/
exports.describeUsingGET_4 = function() {
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
 * Get Opportunities
 * Returns a list of opportunities based on a filter and set of values.  Required Permissions: Read-Only Opportunity, Read-Write Named Opportunity
 *
 * filterType String Opportunities field to filter on
 * filterValues List Comma-separated list of values to match against
 * customObjectLookupRequest LookupCustomObjectRequest customObjectLookupRequest (optional)
 * fields List Comma-separated list of fields to include in the response (optional)
 * batchSize Integer Maximum number of records to return in the response.  Max and default is 300 (optional)
 * nextPageToken String Paging token returned from a previous response (optional)
 * returns ResponseOfCustomObject
 **/
exports.getOpportunitiesUsingGET = function(filterType,filterValues,customObjectLookupRequest,fields,batchSize,nextPageToken) {
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
 * Get Opportunity Field by Name
 * Retrieves metadata for single opportunity field.  Required Permissions: Read-Write Schema Standard Field, Read-Write Schema Custom Field
 *
 * fieldApiName String The API name of opportunity field
 * returns ResponseOfLeadField
 **/
exports.getOpportunityFieldByNameUsingGET = function(fieldApiName) {
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
 * Get Opportunity Fields
 * Retrieves metadata for all opportunity fields in the target instance.  Required Permissions: Read-Write Schema Standard Field, Read-Write Schema Custom Field
 *
 * batchSize Integer The batch size to return. The max and default value is 300. (optional)
 * nextPageToken String A token will be returned by this endpoint if the result set is greater than the batch size and can be passed in a subsequent call through this parameter. See Paging Tokens for more info. (optional)
 * returns ResponseOfLeadField
 **/
exports.getOpportunityFieldsUsingGET = function(batchSize,nextPageToken) {
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
 * Get Opportunity Roles
 * Returns a list of opportunity roles based on a filter and set of values.  Required Permissions: Read-Only Opportunity, Read-Write Named Opportunity
 *
 * filterType String The role field to filter on.  Searchable fields can be retrieved with the Describe Opportunity call.
 * filterValues List Comma-separated list of field values to return records for
 * customObjectLookupRequest LookupCustomObjectRequest Optional JSON request for retrieving opportunity roles with compound keys (optional)
 * fields List Comma-separated list of fields to include in the response (optional)
 * batchSize Integer Maximum number of records to return in the response.  Max and default is 300 (optional)
 * nextPageToken String Paging token returned from a previous response (optional)
 * returns ResponseOfCustomObject
 **/
exports.getOpportunityRolesUsingGET = function(filterType,filterValues,customObjectLookupRequest,fields,batchSize,nextPageToken) {
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
 * Sync Opportunities
 * Allows inserting, updating, or upserting of opportunity records into the target instance.  Required Permissions: Read-Write Named Opportunity
 *
 * syncCustomObjectRequest SyncCustomObjectRequest syncCustomObjectRequest
 * returns ResponseOfCustomObject
 **/
exports.syncOpportunitiesUsingPOST = function(syncCustomObjectRequest) {
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
 * Sync Opportunity Roles
 * Allows inserts, updates and upserts of Opportunity Role records in the target instance.  Required Permissions: Read-Write Named Opportunity
 *
 * syncCustomObjectRequest SyncCustomObjectRequest syncCustomObjectRequest
 * returns ResponseOfCustomObject
 **/
exports.syncOpportunityRolesUsingPOST = function(syncCustomObjectRequest) {
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

