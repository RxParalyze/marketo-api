'use strict';


/**
 * Delete SalesPersons
 * Deletes a list of salesperson records from the target instance.  Input records should have only one member, based on the value of 'dedupeBy'.  Required Permissions: Read-Write Sales Person
 *
 * deleteSalesPersonRequest DeleteSalesPersonRequest deleteSalesPersonRequest
 * returns ResponseOfSalesPerson
 **/
exports.deleteSalesPersonUsingPOST = function(deleteSalesPersonRequest) {
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
 * Describe SalesPersons
 * Returns metadata about salespersons and the fields available for interaction via the API.  Required Permissions: Read-Only Sales Person, Read-Write Sales Person
 *
 * returns ResponseOfObjectMetaData
 **/
exports.describeUsingGET_5 = function() {
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
 * Get SalesPersons
 * Retrieves salesperson records from the destination instance based on the submitted filter.  Required Permissions: Read-Only Sales Person, Read-Write Sales Person
 *
 * filterType String The sales person field to filter on. Searchable fields can be retrieved with the Describe Sales Person call.
 * filterValues List Comma seperated list of search values.
 * fields List Comma-separated list of fields to include in the response (optional)
 * batchSize Integer The batch size to return.  The max and default value is 300. (optional)
 * nextPageToken String A token will be returned by this endpoint if the result set is greater than the batch size and can be passed in a subsequent call through this parameter.  See Paging Tokens for more info. (optional)
 * returns ResponseOfSalesPerson
 **/
exports.getSalesPersonUsingGET = function(filterType,filterValues,fields,batchSize,nextPageToken) {
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
 * Sync SalesPersons
 * Allows inserts, updates, or upserts of salespersons to the target instance.  Required Permissions: Read-Write Sales Person
 *
 * syncSalesPersonRequest SyncSalesPersonRequest syncSalesPersonRequest
 * returns ResponseOfSalesPerson
 **/
exports.syncSalesPersonsUsingPOST = function(syncSalesPersonRequest) {
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

