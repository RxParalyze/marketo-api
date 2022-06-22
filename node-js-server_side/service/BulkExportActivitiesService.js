'use strict';


/**
 * Cancel Export Activity Job
 * Cancel export job.  Required Permissions: Read-Only Activity
 *
 * exportId String Id of export batch job.
 * returns ResponseOfExportResponse
 **/
exports.cancelExportActivitiesUsingPOST = function(exportId) {
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
 * Create Export Activity Job
 * Create export job for search criteria defined via \"filter\" parameter.  Request returns the \"exportId\" which is passed as a parameter in subsequent calls to Bulk Export Activities endpoints.  Use Enqueue Export Activity Job endpoint to queue the export job for processing.  Use Get Export Activity Job Status endpoint to retrieve status of export job.  Required Permissions: Read-Only Activity
 *
 * exportActivityRequest ExportActivityRequest exportActivityRequest<br><br>ColumnHeaderNames: A JSON object containing key-value pairs of field and column header names.<br><br>Example:<br><code>\"columnHeaderNames\":{<br>  \"primaryAttributeValueId\":\"Attribute ID\",<br>  \"primaryAttributeValue\":\"Attribute Value\",<br>  \"attributes\":\"Secondary Attributes\"<br>}</code><br> (optional)
 * returns ResponseOfExportResponse
 **/
exports.createExportActivitiesUsingPOST = function(exportActivityRequest) {
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
 * Enqueue Export Activity Job
 * Enqueue export job. This will place export job in queue, and will start the job when computing resources become available.  The export job must be in \"Created\" state.  Use Get Export Activity Job Status endpoint to retrieve status of export job.  Required Permissions: Read-Only Activity
 *
 * exportId String Id of export batch job.
 * returns ResponseOfExportResponse
 **/
exports.enqueueExportActivitiesUsingPOST = function(exportId) {
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
 * Get Export Activity File
 * Returns the file content of an export job.  The export job must be in \"Completed\" state.  Use Get Export Activity Job Status endpoint to retrieve status of export job.  Required Permissions: Read-Only Activity<br><br>The file format is specified by calling the Create Export Activity Job endpoint. The following is an example of the default file format (\"CSV\"). Note that the \"attributes\" field is formatted as JSON.<br><br><code>marketoGUID,leadId,activityDate,activityTypeId,campaignId,primaryAttributeValueId,primaryAttributeValue, attributes</code><br><code>122323,6,2013-09-26T06:56:35+0000,12,11,6,Owyliphys Iledil,[{\"name\":\"Source Type\",\"value\":\"Web page visit\"}]</code>
 *
 * exportId String Id of export batch job.
 * range String To support partial retrieval of extracted data, the HTTP header \"Range\" of type \"bytes\" may be specified.  See RFC 2616 \"Range Retrieval Requests\" for more information. If the header is not set, the entire contents will be returned. (optional)
 * returns ObservableOfInputStreamRangeContent
 **/
exports.getExportActivitiesFileUsingGET = function(exportId,range) {
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
 * Get Export Activity Job Status
 * Returns status of an export job.  Job status is available for 30 days after Completed or Failed status was reached. Required Permissions: Read-Only Activity
 *
 * exportId String Id of export batch job.
 * returns ResponseOfExportResponse
 **/
exports.getExportActivitiesStatusUsingGET = function(exportId) {
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
 * Get Export Activity Jobs
 * Returns a list of export jobs that were created in the past 7 days.  Required Permissions: Read-Only Activity
 *
 * status List Comma separated list of statuses to filter on. (optional)
 * batchSize Integer The batch size to return. The max and default value is 300. (optional)
 * nextPageToken String A token will be returned by this endpoint if the result set is greater than the batch size and can be passed in a subsequent call through this parameter. See Paging Tokens for more info. (optional)
 * returns ResponseOfExportResponseWithToken
 **/
exports.getExportActivitiesUsingGET = function(status,batchSize,nextPageToken) {
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

