'use strict';


/**
 * Add Named Account List Members
 * Adds named account records to a named account list.  Required Permissions: Read-Write Named Account
 *
 * id String Id of target named account list
 * addNamedAccountListMemberRequest AddNamedAccountListMemberRequest addNamedAccountListMemberRequest
 * returns ResponseOfNamedAccount
 **/
exports.addNamedAccountListMembersUsingPOST = function(id,addNamedAccountListMemberRequest) {
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
 * Delete Named Account Lists
 * Delete named account lists by dedupe fields, or by id field.  Required Permissions: Read-Write Named Account List
 *
 * deleteNamedAccountListRequest DeleteNamedAccountListRequest deleteNamedAccountListRequest
 * returns ResponseOfNamedAccountList
 **/
exports.deleteNamedAccountListsUsingPOST = function(deleteNamedAccountListRequest) {
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
 * Get Named Account List Members
 * Retrieves the named accounts which are members of the given list.  Required Permissions: Read-Only Named Account, Read-Write Named Account
 *
 * id String Id of the named account list
 * fields List Comma-separated list of fields to include in the response (optional)
 * batchSize Integer The batch size to return.  The max and default value is 300. (optional)
 * nextPageToken String A token will be returned by this endpoint if the result set is greater than the batch size and can be passed in a subsequent call through this parameter.  See Paging Tokens for more info. (optional)
 * returns ResponseOfNamedAccount
 **/
exports.getNamedAccountListMembersUsingGET = function(id,fields,batchSize,nextPageToken) {
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
 * Get Named Account Lists
 * Retrieves a list of named account list records based on the filter type and values given.  Required Permissions: Read-Only Named Account List, Read-Write Named Account List
 *
 * filterType String The named account list field to filter on (\"dedupeFields\" or \"idFields\").
 * filterValues List Comma-separated list of values to match against
 * batchSize Integer The batch size to return.  The max and default value is 300. (optional)
 * nextPageToken String A token will be returned by this endpoint if the result set is greater than the batch size and can be passed in a subsequent call through this parameter.  See Paging Tokens for more info. (optional)
 * returns ResponseOfNamedAccountList
 **/
exports.getNamedAccountListsUsingGET = function(filterType,filterValues,batchSize,nextPageToken) {
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
 * Remove Named Account List Members
 * Removes named account members from a named account list.  Required Permissions: Read-Write Named Account
 *
 * id String Id of target named account list
 * removeNamedAccountListMemberRequest RemoveNamedAccountListMemberRequest removeNamedAccountListMemberRequest
 * returns ResponseOfNamedAccount
 **/
exports.removeNamedAccountListMembersUsingPOST = function(id,removeNamedAccountListMemberRequest) {
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
 * Sync Named Account Lists
 * Creates and/or updates named account list records.  Required Permissions: Read-Write Named Account List
 *
 * syncNamedAccountListRequest SyncNamedAccountListRequest syncNamedAccountListRequest
 * returns ResponseOfNamedAccountList
 **/
exports.syncNamedAccountListsUsingPOST = function(syncNamedAccountListRequest) {
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

