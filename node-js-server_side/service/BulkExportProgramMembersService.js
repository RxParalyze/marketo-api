'use strict';


/**
 * Cancel Export Program Member Job
 * Cancel export job.  Required Permissions: Read-Only Lead
 *
 * exportId String Id of export batch job.
 * returns ResponseOfExportResponse
 **/
exports.cancelExportProgramMembersUsingPOST = function(exportId) {
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
 * Create Export Program Member Job
 * Create export job for search criteria defined via \"filter\" parameter.  Request returns the \"exportId\" which is passed as a parameter in subsequent calls to Bulk Export Program Members endpoints.  Use Enqueue Export Program Member Job endpoint to queue the export job for processing.  Use Get Export Program Member Job Status endpoint to retrieve status of export job.  Required Permissions: Read-Only Lead
 *
 * exportProgramMemberRequest ExportProgramMemberRequest exportProgramMemberRequest<br><br>ColumnHeaderNames: A JSON object containing key-value pairs of field and column header names.<br><br>Example:<br><code>\"columnHeaderNames\":{<br>  \"firstName\":\"First Name\",<br>  \"lastName\":\"Last Name\",<br>  \"email\":\"Email Address\"<br>}</code><br> (optional)
 * returns ResponseOfExportResponse
 **/
exports.createExportProgramMembersUsingPOST = function(exportProgramMemberRequest) {
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
 * Enqueue Export Program Member Job
 * Enqueue export job. This will place export job in queue, and will start the job when computing resources become available.  The export job must be in \"Created\" state.  Use Get Export Program Member Job Status endpoint to retrieve status of export job.  Required Permissions: Read-Only Lead
 *
 * exportId String Id of export batch job.
 * returns ResponseOfExportResponse
 **/
exports.enqueueExportProgramMembersUsingPOST = function(exportId) {
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
 * Get Export Program Member File
 * Returns the file content of an export job.  The export job must be in \"Completed\" state.  Use Get Export Program Member Job Status endpoint to retrieve status of export job.  Required Permissions: Read-Only Lead<br><br>The file format is specified by calling the Create Export Program Member Job endpoint. The following is an example of the default file format (\"CSV\").<br><br><code>firstName,lastName,email</code><br><code>Marvin,Gaye,marvin.gaye@motown.com</code>
 *
 * exportId String Id of export batch job.
 * range String To support partial retrieval of extracted data, the HTTP header \"Range\" of type \"bytes\" may be specified.  See RFC 2616 \"Range Retrieval Requests\" for more information. If the header is not set, the entire contents will be returned. (optional)
 * returns ObservableOfInputStreamRangeContent
 **/
exports.getExportProgramMembersFileUsingGET = function(exportId,range) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {"empty": true};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Get Export Program Member Job Status
 * Returns status of an export job.  Job status is available for 30 days after Completed or Failed status was reached. Required Permissions: Read-Only Lead
 *
 * exportId String Id of export batch job.
 * returns ResponseOfExportResponse
 **/
exports.getExportProgramMembersStatusUsingGET = function(exportId) {
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
 * Get Export Program Member Jobs
 * Returns a list of export jobs that were created in the past 7 days.  Required Permissions: Read-Only Lead
 *
 * status List Comma separated list of statuses to filter on. (optional)
 * batchSize Integer The batch size to return. The max and default value is 300. (optional)
 * nextPageToken String A token will be returned by this endpoint if the result set is greater than the batch size and can be passed in a subsequent call through this parameter. See Paging Tokens for more info. (optional)
 * returns ResponseOfExportResponseWithToken
 **/
exports.getExportProgramMembersUsingGET = function(status,batchSize,nextPageToken) {
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

