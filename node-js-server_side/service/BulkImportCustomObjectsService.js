'use strict';


/**
 * Get Import Custom Object Failures
 * Returns the list of failures for the import batch job.  Required Permissions: Read-Write Custom Object
 *
 * apiName String API Name of the custom object for the import batch job.
 * batchId Integer Id of the import batch job.
 * returns ObservableOfInputStreamContent
 **/
exports.getImportCustomObjectFailuresUsingGET = function(apiName,batchId) {
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
 * Get Import Custom Object Status
 * Returns the status of an import batch job.  Required Permissions: Read-Write Custom Object
 *
 * apiName String API Name of the custom object for the import batch job.
 * batchId Integer Id of the import batch job.
 * returns ResponseOfImportCustomObjectResponse
 **/
exports.getImportCustomObjectStatusUsingGET = function(apiName,batchId) {
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
 * Get Import Custom Object Warnings
 * Returns the list of warnings for the import batch job.  Required Permissions: Read-Write Custom Object
 *
 * apiName String API Name of the custom object for the import batch job.
 * batchId Integer Id of the import batch job.
 * returns ObservableOfInputStreamContent
 **/
exports.getImportCustomObjectWarningsUsingGET = function(apiName,batchId) {
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
 * Import Custom Objects
 * Imports a file containing data records into the target instance.  Required Permissions: Read-Write Custom Object
 *
 * apiName String API Name of the custom object for the import batch job.
 * format String Import file format.
 * file File File containing the data records to import.
 * returns ResponseOfImportCustomObjectResponse
 **/
exports.importCustomObjectUsingPOST = function(apiName,format,file) {
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

