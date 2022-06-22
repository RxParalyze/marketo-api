'use strict';


/**
 * Create Program Member Fields
 * Create program member fields in the target instance.  Required Permissions: Read-Write Schema Custom Field
 *
 * createLeadFieldRequest CreateLeadFieldRequest createLeadFieldRequest
 * returns ResponseOfCreateLeadField
 **/
exports.createProgramMemberFieldUsingPOST = function(createLeadFieldRequest) {
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
 * Delete Program Members
 * Delete a list of members from the destination instance.  Required Permissions: Read-Write Lead
 *
 * programId Long The id of target program.
 * deleteProgramMemberRequest DeleteProgramMemberRequest deleteProgramMemberRequest
 * returns ResponseOfProgramMemberDelete
 **/
exports.deleteProgramMemberUsingPOST = function(programId,deleteProgramMemberRequest) {
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
 * Describe Program Member
 * Returns metadata about program member objects in the target instance, including a list of all fields available for interaction via the APIs.  Required Permissions: Read-Only Lead, Read-Write Lead
 *
 * returns ResponseOfProgramMemberAttributes2
 **/
exports.describeProgramMemberUsingGET2 = function() {
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
 * Get Program Member Field by Name
 * Retrieves metadata for single program member field.  Required Permissions: Read-Write Schema Standard Field, Read-Write Schema Custom Field
 *
 * fieldApiName String The API name of program member field
 * returns ResponseOfLeadField
 **/
exports.getProgramMemberFieldByNameUsingGET = function(fieldApiName) {
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
 * Get Program Member Fields
 * Retrieves metadata for all program member fields in the target instance.  Required Permissions: Read-Write Schema Standard Field, Read-Write Schema Custom Field
 *
 * batchSize Integer The batch size to return. The max and default value is 300. (optional)
 * nextPageToken String A token will be returned by this endpoint if the result set is greater than the batch size and can be passed in a subsequent call through this parameter. See Paging Tokens for more info. (optional)
 * returns ResponseOfLeadField
 **/
exports.getProgramMemberFieldsUsingGET = function(batchSize,nextPageToken) {
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
 * Get Program Members
 * Returns a list of up to 300 program members on a list of values in a particular field.  If you specify a filterType that is a custom field, the custom field’s dataType must be either “string” or “integer”.  If you specify a filterType other than “leadId”, a maximum of 100,000 program member records can be processed by the request.  Required Permissions: Read-Only Lead, Read-Write Lead
 *
 * programId Long The id of target program.
 * filterType String The program member field to filter on.  Any custom field (string or integer types only), \"updatedAt\", or any searchable field.  Searchable fields can be obtained via the <a href=\"/rest-api/endpoint-reference/lead-database-endpoint-reference/#/Leads/describeProgramMemberUsingGET2\">Describe Program Member</a> endpoint.
 * filterValues List A comma-separated list of values to filter on in the specified fields.
 * startAt String When using filterType=updatedAt, the start of date range filter (ISO 8601-format) (optional)
 * endAt String When using filterType=updatedAt, the end of date range filter (ISO 8601-format) (optional)
 * fields List A comma-separated list of lead fields to return for each record. (optional)
 * batchSize Integer The batch size to return.  The max and default value is 300. (optional)
 * nextPageToken String A token will be returned by this endpoint if the result set is greater than the batch size and can be passed in a subsequent call through this parameter.  See Paging Tokens for more info. (optional)
 * returns ResponseOfProgramMember
 **/
exports.getProgramMembersUsingGET = function(programId,filterType,filterValues,startAt,endAt,fields,batchSize,nextPageToken) {
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
 * Sync Program Member Data
 * Changes the program member data of a list of leads in a target program. Only existing members of the program may have their data changed with this API. Required Permissions: Read-Write Lead
 *
 * programId Long The id of target program.
 * syncProgramMemberDataRequest SyncProgramMemberDataRequest syncProgramMemberDataRequest
 * returns ResponseOfProgramMemberData
 **/
exports.syncProgramMemberDataUsingPOST = function(programId,syncProgramMemberDataRequest) {
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
 * Sync Program Member Status
 * Changes the program member status of a list of leads in a target program.  If member is not part of the program, member is added to the program.  Required Permissions: Read-Write Lead
 *
 * programId Long The id of target program.
 * syncProgramMemberStatusRequest SyncProgramMemberStatusRequest syncProgramMemberStatusRequest
 * returns ResponseOfProgramMemberStatus
 **/
exports.syncProgramMemberStatusUsingPOST = function(programId,syncProgramMemberStatusRequest) {
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
 * Update Program Member Field
 * Update metadata for a program member field in the target instance.  See update rules <a href=\"https://developers.marketo.com/rest-api/lead-database/leads/#update_field\">here</a>.  Required Permissions: Read-Write Schema Standard Field, Read-Write Schema Custom Field
 *
 * fieldApiName String The API name of program member field
 * updateLeadFieldRequest UpdateLeadFieldRequest updateLeadFieldRequest
 * returns ResponseOfUpdateLeadField
 **/
exports.updateProgramMemberFieldUsingPOST = function(fieldApiName,updateLeadFieldRequest) {
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

