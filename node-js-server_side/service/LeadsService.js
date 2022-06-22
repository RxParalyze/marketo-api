'use strict';


/**
 * Associate Lead
 * Associates a known Marketo lead record to a munchkin cookie and its associated web acitvity history.  Required Permissions: Read-Write Lead
 *
 * leadId Long The id of the lead to associate
 * cookie String The cookie value to associate
 * returns ResponseWithoutResult
 **/
exports.associateLeadUsingPOST = function(leadId,cookie) {
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
 * Change Lead Program Status
 * Changes the program status of a list of leads in a target program.  Only existing members of the program may have their status changed with this API.  Required Permissions: Read-Write Lead<br><br><b>Note: This endpoint has been superceded.</b>  Use <a href=\"/rest-api/endpoint-reference/lead-database-endpoint-reference/#/Program_Members/syncProgramMemberStatusUsingPOST\">Sync Program Member Status</a> endpoint instead.
 *
 * programId Integer The id of target program
 * changeLeadProgramStatusRequest ChangeLeadProgramStatusRequest changeLeadProgramStatusRequest
 * returns ResponseOfChangeLeadProgramStatusOutputData
 **/
exports.changeLeadProgramStatusUsingPOST = function(programId,changeLeadProgramStatusRequest) {
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
 * Create Lead Fields
 * Create lead fields in the target instance.  Required Permissions: Read-Write Schema Custom Field
 *
 * createLeadFieldRequest CreateLeadFieldRequest createLeadFieldRequest
 * returns ResponseOfCreateLeadField
 **/
exports.createLeadFieldUsingPOST = function(createLeadFieldRequest) {
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
 * Delete Leads
 * Delete a list of leads from the destination instance.  Required Permissions: Read-Write Lead
 *
 * deleteLeadRequest DeleteLeadRequest deleteLeadRequest (optional)
 * id List Parameter can be specified if the request body is empty. Multiple lead ids can be specified. e.g. id=1,2,3,2342 (optional)
 * returns ResponseOfLead
 **/
exports.deleteLeadsUsingPOST = function(deleteLeadRequest,id) {
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
 * Returns metadata about program member objects in the target instance, including a list of all fields available for interaction via the APIs.  Required Permissions: Read-Only Lead, Read-Write Lead<br><br><b>Note: This endpoint has been superceded.</b>  Use <a href=\"/rest-api/endpoint-reference/lead-database-endpoint-reference/#/Leads/describeProgramMemberUsingGET2\">Describe Program Member</a> endpoint instead.
 *
 * returns ResponseOfProgramMemberAttributes
 **/
exports.describeProgramMemberUsingGET = function() {
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
 * Describe Lead
 * Returns metadata about lead objects in the target instance, including a list of all fields available for interaction via the APIs.  Required Permissions: Read-Only Lead, Read-Write Lead<br><br><b>Note: This endpoint has been superceded.</b>  Use <a href=\"/rest-api/endpoint-reference/lead-database-endpoint-reference/#!/Leads/describeUsingGET_6\">Describe Lead2</a> endpoint instead.
 *
 * returns ResponseOfLeadAttribute
 **/
exports.describeUsingGET_2 = function() {
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
 * Describe Lead2
 * Returns list of searchable fields on lead objects in the target instance.  Required Permissions: Read-Only Lead, Read-Write Lead
 *
 * returns ResponseOfLeadAttribute2
 **/
exports.describeUsingGET_6 = function() {
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
 * Get Lead by Id
 * Retrieves a single lead record through its Marketo id.  Required Permissions: Read-Only Lead, Read-Write Lead
 *
 * leadId Long The Marketo lead id
 * fields List Comma separated list of field names. If omitted, the following default fields will be returned: email, updatedAt, createdAt, lastName, firstName, and id. (optional)
 * returns ResponseOfLead
 **/
exports.getLeadByIdUsingGET = function(leadId,fields) {
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
 * Get Lead Field by Name
 * Retrieves metadata for single lead field.  Required Permissions: Read-Write Schema Standard Field, Read-Write Schema Custom Field
 *
 * fieldApiName String The API name of lead field
 * returns ResponseOfLeadField
 **/
exports.getLeadFieldByNameUsingGET = function(fieldApiName) {
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
 * Get Lead Fields
 * Retrieves metadata for all lead fields in the target instance.  Required Permissions: Read-Write Schema Standard Field, Read-Write Schema Custom Field
 *
 * batchSize Integer The batch size to return. The max and default value is 300. (optional)
 * nextPageToken String A token will be returned by this endpoint if the result set is greater than the batch size and can be passed in a subsequent call through this parameter. See Paging Tokens for more info. (optional)
 * returns ResponseOfLeadField
 **/
exports.getLeadFieldsUsingGET = function(batchSize,nextPageToken) {
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
 * Get Lead Partitions
 * Returns a list of available partitions in the target instance.  Required Permissions: Read-Only Lead, Read-Write Lead
 *
 * returns ResponseOfLeadPartition
 **/
exports.getLeadPartitionsUsingGET = function() {
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
 * Get Leads by Filter Type
 * Returns a list of up to 300 leads based on a list of values in a particular field.  Required Permissions: Read-Only Lead, Read-Write Lead
 *
 * filterType String The lead field to filter on.  Any custom field (string, email, or integer types only), and any of the following fields are supported: cookies, email, facebookId, id, leadPartitionId, linkedInId, sfdcAccountId, sfdcContactId, sfdcLeadId, sfdcLeadOwnerId, sfdcOpptyId, twitterId.<br><br>A comprehensive list of fields can be obtained via the <a href=\"http://developers.marketo.com/rest-api/endpoint-reference/lead-database-endpoint-reference/#/Leads/describeUsingGET_6\">Describe Lead2</a> endpoint.
 * filterValues List A comma-separated list of values to filter on in the specified fields.
 * fields List A comma-separated list of lead fields to return for each record (optional)
 * batchSize Integer The batch size to return.  The max and default value is 300. (optional)
 * nextPageToken String A token will be returned by this endpoint if the result set is greater than the batch size and can be passed in a subsequent call through this parameter.  See Paging Tokens for more info. (optional)
 * returns ResponseOfLead
 **/
exports.getLeadsByFilterUsingGET = function(filterType,filterValues,fields,batchSize,nextPageToken) {
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
 * Get Leads by Program Id
 * Retrieves a list of leads which are members of the designated program.  Required Permissions: Read-Only Lead, Read-Write Lead
 *
 * programId Integer The id of the program to retrieve from
 * fields List A comma-separated list of fields to be returned for each record (optional)
 * batchSize Integer The batch size to return.  The max and default value is 300. (optional)
 * nextPageToken String A token will be returned by this endpoint if the result set is greater than the batch size and can be passed in a subsequent call through this parameter.  See Paging Tokens for more info. (optional)
 * returns ResponseOfLead
 **/
exports.getLeadsByProgramIdUsingGET = function(programId,fields,batchSize,nextPageToken) {
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
 * Get Lists by Lead Id
 * Query static list membership for one lead.  Required Permissions: Read-Only Asset
 *
 * leadId Long The Marketo lead id
 * nextPageToken String A token will be returned by this endpoint if the result set is greater than the batch size and can be passed in a subsequent call through this parameter.  See Paging Tokens for more info. (optional)
 * batchSize Integer Maximum number of records to return.  Maximum and default is 300. (optional)
 * returns ResponseOfLists
 **/
exports.getListMembershipUsingGET = function(leadId,nextPageToken,batchSize) {
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
 * Get Programs by Lead Id
 * Query program membership for one lead.  Required Permissions: Read-Only Asset
 *
 * leadId Long The Marketo lead id
 * nextPageToken String A token will be returned by this endpoint if the result set is greater than the batch size and can be passed in a subsequent call through this parameter.  See Paging Tokens for more info. (optional)
 * batchSize Integer Maximum number of records to return.  Maximum and default is 300. (optional)
 * earliestUpdatedAt String Exclude programs prior to this date. Must be valid ISO-8601 string.  See <a href=\"http://developers.marketo.com/rest-api/lead-database/fields/field-types/\">Datetime</a> field type description. (optional)
 * latestUpdatedAt String Exclude programs after this date. Must be valid ISO-8601 string.  See <a href=\"http://developers.marketo.com/rest-api/lead-database/fields/field-types/\">Datetime</a> field type description. (optional)
 * filterType String Set to \"programId\" to filter a set of programs. (optional)
 * filterValues List Comma-separated list of program ids to match against (optional)
 * returns ResponseOfPrograms
 **/
exports.getProgramMembershipUsingGET = function(leadId,nextPageToken,batchSize,earliestUpdatedAt,latestUpdatedAt,filterType,filterValues) {
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
 * Get Smart Campaigns by Lead Id
 * Query smart campaign membership for one lead.  Required Permissions: Read-Only Asset
 *
 * leadId Long The Marketo lead id
 * nextPageToken String A token will be returned by this endpoint if the result set is greater than the batch size and can be passed in a subsequent call through this parameter.  See Paging Tokens for more info. (optional)
 * batchSize Integer Maximum number of records to return.  Maximum and default is 300. (optional)
 * earliestUpdatedAt String Exclude smart campaigns prior to this date. Must be valid ISO-8601 string.  See <a href=\"http://developers.marketo.com/rest-api/lead-database/fields/field-types/\">Datetime</a> field type description. (optional)
 * latestUpdatedAt String Exclude smart campaigns after this date. Must be valid ISO-8601 string.  See <a href=\"http://developers.marketo.com/rest-api/lead-database/fields/field-types/\">Datetime</a> field type description. (optional)
 * returns ResponseOfSmartCampaigns
 **/
exports.getSmartCampaignMembershipUsingGET = function(leadId,nextPageToken,batchSize,earliestUpdatedAt,latestUpdatedAt) {
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
 * Merge Leads
 * Merges two or more known lead records into a single lead record.  Required Permissions: Read-Write Lead
 *
 * leadId Long The id of the winning lead record
 * leadId2 Long The id of the losing record (optional)
 * leadIds List A comma-separated list of ids of losing records (optional)
 * mergeInCRM Boolean If set, will attempt to merge the designated records in a natively-synched CRM.  Only valid for instances with are natively synched to SFDC. (optional)
 * returns ResponseWithoutResult
 **/
exports.mergeLeadsUsingPOST = function(leadId,leadId2,leadIds,mergeInCRM) {
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
 * Push Lead to Marketo
 * Upserts a lead and generates a Push Lead to Marketo activity.  Required Permissions: Read-Write Lead
 *
 * pushLeadToMarketoRequest PushLeadToMarketoRequest pushLeadToMarketoRequest
 * returns ResponseOfPushLeadToMarketo
 **/
exports.pushToMarketoUsingPOST = function(pushLeadToMarketoRequest) {
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
 * Submit Form
 * Upserts a lead and generates a \"Fill out Form\" activity which is associated back to program and/or campaign.  Required Permissions: Read-Write Lead
 *
 * submitFormRequest SubmitFormRequest submitFormRequest
 * returns ResponseOfSubmitForm
 **/
exports.submitFormUsingPOST = function(submitFormRequest) {
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
 * Sync Leads
 * Syncs a list of leads to the target instance.  Required Permissions: Read-Write Lead
 *
 * syncLeadRequest SyncLeadRequest syncLeadRequest
 * returns ResponseOfLead
 **/
exports.syncLeadUsingPOST = function(syncLeadRequest) {
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
 * Update Lead Field
 * Update metadata for a lead field in the target instance.  See update rules <a href=\"https://developers.marketo.com/rest-api/lead-database/leads/#update_field\">here</a>.  Required Permissions: Read-Write Schema Standard Field, Read-Write Schema Custom Field
 *
 * fieldApiName String The API name of lead field
 * updateLeadFieldRequest UpdateLeadFieldRequest updateLeadFieldRequest
 * returns ResponseOfUpdateLeadField
 **/
exports.updateLeadFieldUsingPOST = function(fieldApiName,updateLeadFieldRequest) {
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
 * Update Lead Partition
 * Updates the lead partition for a list of leads.  Required Permissions: Read-Write Lead
 *
 * updateLeadPartitionRequest UpdateLeadPartitionRequest updateLeadPartitionRequest
 * returns ResponseOfLead
 **/
exports.updatePartitionsUsingPOST = function(updateLeadPartitionRequest) {
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

