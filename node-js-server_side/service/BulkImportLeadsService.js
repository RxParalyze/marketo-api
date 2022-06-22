'use strict';


/**
 * Get Import Lead Failures
 * Returns the list of failures for the import batch job.  Required Permissions: Read-Write Lead
 *
 * batchId Integer Id of the import batch job.
 * returns ObservableOfInputStreamContent
 **/
exports.getImportLeadFailuresUsingGET = function(batchId) {
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
 * Get Import Lead Status
 * Returns the status of an import batch job.  Required Permissions: Read-Write Lead
 *
 * batchId Integer Id of the import batch job.
 * returns ResponseOfImportLeadResponse
 **/
exports.getImportLeadStatusUsingGET = function(batchId) {
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
 * Get Import Lead Warnings
 * Returns the list of warnings for the import batch job.  Required Permissions: Read-Write Lead
 *
 * batchId Integer Id of the import batch job.
 * returns ObservableOfInputStreamContent
 **/
exports.getImportLeadWarningsUsingGET = function(batchId) {
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
 * Import Leads
 * Imports a file containing data records into the target instance.  Required Permissions: Read-Write Lead
 *
 * format String Import file format.
 * file File File containing the data records to import.
 * lookupField String Field to use for deduplication.  Custom fields (string, email, integer), and the following field types are supported: id, cookies, email, twitterId, facebookId, linkedInId, sfdcAccountId, sfdcContactId, sfdcLeadId, sfdcLeadOwnerId, sfdcOpptyId.  Default is email.<br>Note: You can use id for update only operations.  (optional)
 * partitionName String Name of the lead partition to import to. (optional)
 * listId Integer Id of the static list to import into. (optional)
 * returns ResponseOfImportLeadResponse
 **/
exports.importLeadUsingPOST = function(format,file,lookupField,partitionName,listId) {
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

