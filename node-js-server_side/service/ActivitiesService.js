'use strict';


/**
 * Add Custom Activities
 * Allows insertion of custom activities associated to given lead records.  Requires provisioning of custom activity types to utilize.  Required Permissions: Read-Write Activity
 *
 * customActivityRequest CustomActivityRequest customActivityRequest
 * returns ResponseOfCustomActivity
 **/
exports.addCustomActivityUsingPOST = function(customActivityRequest) {
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
 * Approve Custom Activity Type
 * Approves the current draft of the type, and makes it the live version.  This will delete the current live version of the type.  Required Permissions: Read-Write Activity Metadata
 *
 * apiName String API Name of the activity type
 * returns ResponseOfCustomActivityType
 **/
exports.approveCustomActivityTypeUsingPOST = function(apiName) {
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
 * Create Custom Activity Type Attributes
 * Adds activity attributes to the target type.  These are added to the draft version of the type.  Required Permissions: Read-Write Activity Metadata
 *
 * apiName String API Name of the activity type
 * customActivityTypeAttributeRequest CustomActivityTypeAttributeRequest customActivityTypeAttributeRequest
 * returns ResponseOfCustomActivityType
 **/
exports.createCustomActivityTypeAttributesUsingPOST = function(apiName,customActivityTypeAttributeRequest) {
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
 * Create Custom Activity Type
 * Creates a new custom activity type draft in the target instance.  Required Permissions: Read-Write Activity Metadata
 *
 * customActivityTypeRequest CustomActivityTypeRequest customActivityTypeRequest
 * returns ResponseOfCustomActivityType
 **/
exports.createCustomActivityTypeUsingPOST = function(customActivityTypeRequest) {
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
 * Delete Custom Activity Type Attributes
 * Deletes the target attributes from the custom activity type draft.  The apiName of each attribute is the primary key for the update.  Required Permissions: Read-Write Activity Metadata
 *
 * apiName String API Name of the activity type
 * customActivityTypeAttributeRequest CustomActivityTypeAttributeRequest customActivityTypeAttributeRequest
 * returns ResponseOfCustomActivityType
 **/
exports.deleteCustomActivityTypeAttributesUsingPOST = function(apiName,customActivityTypeAttributeRequest) {
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
 * Delete Custom Activity Type
 * Deletes the target custom activity type.  The type must first be removed from use by any assets, such as triggers or filters.  Required Permissions: Read-Write Activity Metadata
 *
 * apiName String API Name of the activity type
 * returns ResponseOfCustomActivityType
 **/
exports.deleteCustomActivityTypeUsingPOST = function(apiName) {
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
 * Describe Custom Activity Type
 * Returns metadata for a specific custom activity type.  Required Permissions: Read-Only Activity Metadata, Read-Write Activity Metadata
 *
 * apiName String API Name of the activity type
 * draft Boolean draft (optional)
 * returns ResponseOfCustomActivityType
 **/
exports.describeCustomActivityTypeUsingGET = function(apiName,draft) {
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
 * Discard Custom Activity Type Draft
 * Discards the current draft of the custom activity type.  Required Permissions: Read-Write Activity Metadata
 *
 * apiName String API Name of the activity type
 * returns ResponseOfCustomActivityType
 **/
exports.discardDraftofCustomActivityTypeUsingPOST = function(apiName) {
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
 * Get Paging Token
 * Returns a paging token for use in retrieving activities and data value changes.  Required Permissions: Read-Only Activity, Read-Write Activity
 *
 * sinceDatetime Date Earliest datetime to retrieve activities from
 * returns ResponseOfVoid
 **/
exports.getActivitiesPagingTokenUsingGET = function(sinceDatetime) {
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
 * Get Activity Types
 * Returns a list of available activity types in the target instance, along with associated metadata of each type.  Required Permissions: Read-Only Activity, Read-Write Activity
 *
 * returns ResponseOfActivityType
 **/
exports.getAllActivityTypesUsingGET = function() {
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
 * Get Custom Activity Types
 * Returns metadata regarding custom activities provisioned in the target instance.  Required Permissions: Read-Only Activity Metadata, Read-Write Activity Metadata
 *
 * returns ResponseOfCustomActivityType
 **/
exports.getCustomActivityTypeUsingGET = function() {
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
 * Get Deleted Leads
 * Returns a list of leads deleted after a given datetime.  Deletions greater than 14 days old may be pruned.  Required Permissions: Read-Only Activity, Read-Write Activity
 *
 * nextPageToken String Token representation of a datetime returned by the Get Paging Token endpoint.  This endpoint will return activities after this datetime
 * batchSize Integer Maximum number of records to return.  Maximum and default is 300. (optional)
 * returns ResponseOfActivity
 **/
exports.getDeletedLeadsUsingGET = function(nextPageToken,batchSize) {
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
 * Get Lead Activities
 * Returns a list of activities from after a datetime given by the nextPageToken parameter.  Also allows for filtering by lead static list membership, or by a list of up to 30 lead ids.  Required Permissions: Read-Only Activity, Read-Write Activity
 *
 * nextPageToken String Token representation of a datetime returned by the Get Paging Token endpoint.  This endpoint will return activities after this datetime
 * activityTypeIds List Comma-separated list of activity type ids. These can be retrieved with the Get Activity Types API.
 * assetIds List Id of the primary asset for an activity.  This is based on the primary asset id of a given activity type.  Should only be used when a single activity type is set (optional)
 * listId Integer Id of a static list.  If set, will only return activities of members of this static list. (optional)
 * leadIds List Comma-separated list of lead ids.  If set, will only return activities of the leads with these ids.  Allows up to 30 entries. (optional)
 * batchSize Integer Maximum number of records to return.  Maximum and default is 300. (optional)
 * returns ResponseOfActivity
 **/
exports.getLeadActivitiesUsingGET = function(nextPageToken,activityTypeIds,assetIds,listId,leadIds,batchSize) {
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
 * Get Lead Changes
 * Returns a list of Data Value Changes and New Lead activities after a given datetime. Required Permissions: Read-Only Activity, Read-Write Activity
 *
 * nextPageToken String Token representation of a datetime returned by the Get Paging Token endpoint.  This endpoint will return activities after this datetime
 * fields List Comma-separated list of field names to return changes for.  Field names can be retrieved with the Describe Lead API.
 * listId Integer Id of a static list.  If set, will only return activities of members of this static list. (optional)
 * leadIds List Comma-separated list of lead ids.  If set, will only return activities of the leads with these ids.  Allows up to 30 entries. (optional)
 * batchSize Integer Maximum number of records to return.  Maximum and default is 300. (optional)
 * returns ResponseOfLeadChange
 **/
exports.getLeadChangesUsingGET = function(nextPageToken,fields,listId,leadIds,batchSize) {
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
 * Update Custom Activity Type Attributes
 * Updates the attributes of the custom activity type draft.  The apiName of each attribute is the primary key for the update.  Required Permissions: Read-Write Activity Metadata
 *
 * apiName String API Name of the activity type
 * customActivityTypeAttributeRequest CustomActivityTypeAttributeRequest customActivityTypeAttributeRequest
 * returns ResponseOfCustomActivityType
 **/
exports.updateCustomActivityTypeAttributesUsingPOST = function(apiName,customActivityTypeAttributeRequest) {
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
 * Update Custom Activity Type
 * Updates the target custom activity type.  All changes are applied to the draft version of the type.  Required Permissions: Read-Write Activity Metadata
 *
 * apiName String API Name of the activity type
 * customActivityTypeRequest CustomActivityTypeRequest customActivityTypeRequest
 * returns ResponseOfCustomActivityType
 **/
exports.updateCustomActivityTypeUsingPOST = function(apiName,customActivityTypeRequest) {
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

