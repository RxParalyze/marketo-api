'use strict';


/**
 * Add to List
 * Adds a given set of person records to a target static list.  There is a limit of 300 lead ids per request.  Required Permissions: Read-Write Lead
 *
 * listId Integer Id of target list
 * listOperationRequest ListOperationRequest Optional JSON request body for submitting leads (optional)
 * id List Comma-separated list of lead ids to add to the list (optional)
 * returns ResponseOfListOperationOutputData
 **/
exports.addLeadsToListUsingPOST = function(listId,listOperationRequest,id) {
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
 * Member of List
 * Checks if leads are members of a given static list.  Required Permissions: Read-Write Lead
 *
 * listId Integer Id of the static list to check against
 * listOperationRequest ListOperationRequest Optional JSON request body (optional)
 * id List Comma-separated list of lead ids to check (optional)
 * returns ResponseOfListOperationOutputData
 **/
exports.areLeadsMemberOfListUsingGET = function(listId,listOperationRequest,id) {
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
 * Get Leads By List Id
 * Retrieves person records which are members of the given static list.  Required Permissions: Read-Only Lead, Read-Write Lead
 *
 * listId Integer Id of the static list to retrieve records from
 * fields List Comma-separated list of lead fields to return for each record.  If unset will return email, updatedAt, createdAt, lastName, firstName and id (optional)
 * batchSize Integer The batch size to return.  The max and default value is 300. (optional)
 * nextPageToken String A token will be returned by this endpoint if the result set is greater than the batch size and can be passed in a subsequent call through this parameter.  See Paging Tokens for more info. (optional)
 * returns ResponseOfLeadByListId
 **/
exports.getLeadsByListIdUsingGET = function(listId,fields,batchSize,nextPageToken) {
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
 * Get Leads By List Id
 * Retrieves person records which are members of the given static list.  Required Permissions: Read-Only Lead, Read-Write Lead
 *
 * listId Integer Id of the static list to retrieve records from
 * fields List Comma-separated list of lead fields to return for each record.  If unset will return email, updatedAt, createdAt, lastName, firstName and id (optional)
 * batchSize Integer The batch size to return.  The max and default value is 300. (optional)
 * nextPageToken String A token will be returned by this endpoint if the result set is greater than the batch size and can be passed in a subsequent call through this parameter.  See Paging Tokens for more info. (optional)
 * returns ResponseOfLead
 **/
exports.getLeadsByListIdUsingGET_1 = function(listId,fields,batchSize,nextPageToken) {
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
 * Get List by Id
 * Returns a list record by its id.  Required Permissions: Read-Only Lead, Read-Write Lead
 *
 * listId Integer Id of the static list to retrieve records from
 * returns ResponseOfStaticList
 **/
exports.getListByIdUsingGET = function(listId) {
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
 * Get Lists
 * Returns a set of static list records based on given filter parameters. Required Permissions: Read-Only Lead, Read-Write Lead
 *
 * id List Comma-separated list of static list ids to return (optional)
 * name List Comma-separated list of static list names to return (optional)
 * programName List Comma-separated list of program names.  If set will return all static lists that are children of the given programs (optional)
 * workspaceName List Comma-separated list of workspace names.  If set will return all static lists that are children of the given workspaces (optional)
 * batchSize Integer The batch size to return.  The max and default value is 300. (optional)
 * nextPageToken String A token will be returned by this endpoint if the result set is greater than the batch size and can be passed in a subsequent call through this parameter.  See Paging Tokens for more info. (optional)
 * returns ResponseOfStaticList
 **/
exports.getListsUsingGET = function(id,name,programName,workspaceName,batchSize,nextPageToken) {
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
 * Remove from List
 * Removes a given set of person records from a target static list.  Required Permissions: Read-Write Lead
 *
 * listId Integer Id of static list to remove leads from
 * listOperationRequest ListOperationRequest listOperationRequest
 * id List id
 * returns ResponseOfListOperationOutputData
 **/
exports.removeLeadsFromListUsingDELETE = function(listId,listOperationRequest,id) {
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

