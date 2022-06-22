'use strict';


/**
 * Get Import Program Member Failures
 * Returns the list of failures for the import batch job.  Required Permissions: Read-Write Lead
 *
 * batchId Integer Id of the import batch job.
 * returns ObservableOfInputStreamContent
 **/
exports.getImportProgramMemberFailuresUsingGET = function(batchId) {
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
 * Get Import Program Member Status
 * Returns the status of an import batch job.  Required Permissions: Read-Write Lead
 *
 * batchId Integer Id of the import batch job.
 * returns ResponseOfImportProgramMemberResponse
 **/
exports.getImportProgramMemberStatusUsingGET = function(batchId) {
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
 * Get Import Program Member Warnings
 * Returns the list of warnings for the import batch job.  Required Permissions: Read-Write Lead
 *
 * batchId Integer Id of the import batch job.
 * returns ObservableOfInputStreamContent
 **/
exports.getImportProgramMemberWarningsUsingGET = function(batchId) {
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
 * Import Program Members
 * Imports a file containing data records into the target instance.  Required Permissions: Read-Write Lead
 *
 * programId String Id of the program to add members to.
 * programMemberStatus String Program member status for members being added.
 * format String Import file format.
 * file File File containing the data records to import.
 * returns ResponseOfImportProgramMemberResponse
 **/
exports.importProgramMemberUsingPOST = function(programId,programMemberStatus,format,file) {
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

