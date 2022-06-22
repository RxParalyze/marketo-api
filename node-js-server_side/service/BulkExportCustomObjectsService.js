'use strict';


/**
 * Cancel Export Custom Object Job
 * Cancel export job.  Required Permissions: Read-Only Custom Object
 *
 * apiName String API Name of the custom object for the export batch job.
 * exportId String Id of export batch job.
 * returns ResponseOfExportResponse
 **/
exports.cancelExportCustomObjectsUsingPOST = function(apiName,exportId) {
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
 * Create Export Custom Object Job
 * Create export job for search criteria defined via \"filter\" parameter.  Request returns the \"exportId\" which is passed as a parameter in subsequent calls to Bulk Export Custom Object endpoints.  Use Enqueue Export Custom Object Job endpoint to queue the export job for processing.  Use Get Export Custom Object Job Status endpoint to retrieve status of export job.  Required Permissions: Read-Only Custom Object
 *
 * apiName String API Name of the custom object for the export batch job.
 * exportCustomObjectRequest ExportCustomObjectRequest exportCustomObjectRequest<br><br>ColumnHeaderNames: A JSON object containing key-value pairs of custom object attributes and column header names.<br><br>Example:<br><code>\"columnHeaderNames\":{<br>  \"attrName1\":\"value1\",<br>  \"attrName2\":\"value2\",<br>  \"attrName3\":\"value3\"<br>}</code><br> (optional)
 * returns ResponseOfExportResponse
 **/
exports.createExportCustomObjectsUsingPOST = function(apiName,exportCustomObjectRequest) {
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
 * Enqueue Export Custom Object Job
 * Enqueue export job. This will place export job in queue, and will start the job when computing resources become available.  The export job must be in \"Created\" state.  Use Get Export Custom Object Job Status endpoint to retrieve status of export job.  Required Permissions: Read-Only Custom Object
 *
 * apiName String API Name of the custom object for the export batch job.
 * exportId String Id of export batch job.
 * returns ResponseOfExportResponse
 **/
exports.enqueueExportCustomObjectsUsingPOST = function(apiName,exportId) {
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
 * Get Export Custom Object File
 * Returns the file content of an export job.  The export job must be in \"Completed\" state.  Use Get Export Custom Object Job Status endpoint to retrieve status of export job.  Required Permissions: Read-Only Custom Object<br><br>The file format is specified by calling the Create Export Custom Object Job endpoint. The following is an example of the default file format (\"CSV\").<br><br><code>leadId,marketoGUID,itemName</code><br><code>11,c93f0494-bbd9-44e8-9c0e-dae9b525073f,Hoka One One Mach 4</code>
 *
 * apiName String API Name of the custom object for the export batch job.
 * exportId String Id of export batch job.
 * range String To support partial retrieval of extracted data, the HTTP header \"Range\" of type \"bytes\" may be specified.  See RFC 2616 \"Range Retrieval Requests\" for more information. If the header is not set, the entire contents will be returned. (optional)
 * returns ObservableOfInputStreamRangeContent
 **/
exports.getExportCustomObjectsFileUsingGET = function(apiName,exportId,range) {
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
 * Get Export Custom Object Job Status
 * Returns status of an export job.  Job status is available for 30 days after Completed or Failed status was reached. Required Permissions: Read-Only Custom Object
 *
 * apiName String API Name of the custom object for the export batch job.
 * exportId String Id of export batch job.
 * returns ResponseOfExportResponse
 **/
exports.getExportCustomObjectsStatusUsingGET = function(apiName,exportId) {
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
 * Get Export Custom Object Jobs
 * Returns a list of export jobs that were created in the past 7 days.  Required Permissions: Read-Only Custom Object
 *
 * apiName String API Name of the custom object for the export batch job.
 * status List Comma separated list of statuses to filter on. (optional)
 * batchSize Integer The batch size to return. The max and default value is 300. (optional)
 * nextPageToken String A token will be returned by this endpoint if the result set is greater than the batch size and can be passed in a subsequent call through this parameter. See Paging Tokens for more info. (optional)
 * returns ResponseOfExportResponseWithToken
 **/
exports.getExportCustomObjectsUsingGET = function(apiName,status,batchSize,nextPageToken) {
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

