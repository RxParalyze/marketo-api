'use strict';


/**
 * Add Custom Object Type Fields
 * Adds fields to custom object type.  Required Permissions: Read-Write Custom Object Type
 *
 * apiName String API name of custom object type
 * addCustomObjectTypeFieldsRequest AddCustomObjectTypeFieldsRequest JSON object containing custom object type fields
 * returns ResponseOfCustomObjectType
 **/
exports.addCustomObjectTypeFieldsUsingPOST = function(apiName,addCustomObjectTypeFieldsRequest) {
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
 * Approve Custom Object Type
 * Approves the current draft of the type, and makes it the live version.  This will delete the current live version of the type.  Required Permissions: Read-Write Custom Object Type
 *
 * apiName String API Name of the custom object type to approve
 * returns ResponseOfCustomObjectType
 **/
exports.approveCustomObjectTypeUsingPOST = function(apiName) {
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
 * Delete Custom Object Type Fields
 * Deletes fields from custom object type.  Required Permissions: Read-Write Custom Object Type
 *
 * apiName String API name of custom object type
 * deleteCustomObjectTypeFieldsRequest DeleteCustomObjectTypeFieldsRequest JSON object containing custom object type fields
 * returns ResponseOfCustomObjectType
 **/
exports.deleteCustomObjectTypeFieldsUsingPOST = function(apiName,deleteCustomObjectTypeFieldsRequest) {
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
 * Delete Custom Object Type
 * Deletes the target custom object type.  The type must first be removed from use by any assets, such as triggers or filters.  Required Permissions: Read-Write Custom Object Type
 *
 * apiName String API Name of the custom object type to delete
 * returns ResponseOfCustomObjectType
 **/
exports.deleteCustomObjectTypeUsingPOST = function(apiName) {
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
 * Delete Custom Objects
 * Deletes a given set of custom object records.  Required Permissions: Read-Write Custom Object
 *
 * customObjectName String customObjectName
 * deleteCustomObjectRequest DeleteCustomObjectRequest deleteCustomObjectRequest (optional)
 * returns ResponseOfCustomObject
 **/
exports.deleteCustomObjectsUsingPOST = function(customObjectName,deleteCustomObjectRequest) {
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
 * Describe Custom Object Type
 * Returns metadata regarding a given custom object type (including relationships and fields).  Required Permissions: Read-Only Custom Object Type, Read-Write Custom Object Type
 *
 * apiName String API name of custom object type to describe
 * state String State of custom object type to filter on.  By default, if an approved version exists, it is returned.  Otherwise, the draft version is returned. (optional)
 * returns ResponseOfObjectMetaData
 **/
exports.describeCustomObjectTypeUsingGET = function(apiName,state) {
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
 * Describe Custom Objects
 * Returns metadata regarding a given custom object.  Required Permissions: Read-Only Custom Object, Read-Write Custom Object
 *
 * customObjectName String customObjectName
 * returns ResponseOfObjectMetaData
 **/
exports.describeUsingGET_1 = function(customObjectName) {
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
 * Discard Custom Object Type Draft
 * Discards the current draft of the custom object type.  Required Permissions: Read-Write Custom Object Type
 *
 * apiName String API Name of the custom object type draft to discard
 * returns ResponseOfCustomObjectType
 **/
exports.discardCustomObjectTypeUsingPOST = function(apiName) {
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
 * Get Custom Object Dependent Assets
 * Returns a list of dependent assets for a custom object type, including their in-instance location.  Required Permissions: Read-Only Custom Object Type, Read-Write Custom Object Type
 *
 * apiName String REST API name for custom object
 * returns ResponseOfObjectDependentAssets
 **/
exports.getCustomObjectTypeDependentAssetsUsingGET = function(apiName) {
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
 * Get Custom Object Type Field Data Types
 * Returns a list of permissible data types that are assigned to custom object fields.  Required Permissions: Read-Only Custom Object Type, Read-Write Custom Object Type
 *
 * returns ResponseOfCustomObjectTypeFieldDataTypes
 **/
exports.getCustomObjectTypeFieldDataTypesUsingGET = function() {
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
 * Get Custom Object Linkable Objects
 * Returns a list of linkable custom objects and their fields.  Required Permissions: Read-Only Custom Object Type, Read-Write Custom Object Type
 *
 * returns ResponseOfObjectLinkableObject
 **/
exports.getCustomObjectTypeLinkableObjectsUsingGET = function() {
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
 * Get Custom Objects
 * Retrieves a list of custom objects records based on filter and set of values.  There are two unique types of requests for this endpoint: one is executed normally using a GET with URL parameters, the other is by passing a JSON object in the body of a POST and specifying _method=GET in the querystring.  The latter is used when dedupeFields attribute has more than one field, which is known as a \"compound key\".  Required Permissions: Read-Only Custom Object, Read-Write Custom Object
 *
 * customObjectName String Name of custom object type to retrieve records for
 * filterType String Field to filter on. Searchable fields can be retrieved with Describe Custom Object
 * filterValues List Comma-separated list of field values to match against.
 * customObjectLookupRequest LookupCustomObjectRequest Optional JSON request for retrieving custom objects with compound keys.  Example:<br><code>{<br>\"filterType\":\"dedupeFields\",<br>\"fields\":[<br>\"marketoGuid\",<br>\"Bedrooms\",<br>\"yearBuilt\"<br>],<br>\"input\":[<br>{<br>\"mlsNum\":\"1962352\",<br>\"houseOwnerId\":\"42645756\"<br>},<br>{<br>\"mlsNum\":\"3962352\",<br>\"houseOwnerId\":\"62645756\"<br>}<br>]<br>}</code><br> (optional)
 * fields List Comma-separated list of fields to return for each record.  If unset marketoGuid, dedupeFields, updatedAt, createdAt will be returned (optional)
 * batchSize Integer The batch size to return.  The max and default value is 300. (optional)
 * nextPageToken String A token will be returned by this endpoint if the result set is greater than the batch size and can be passed in a subsequent call through this parameter.  See Paging Tokens for more info. (optional)
 * returns ResponseOfCustomObject
 **/
exports.getCustomObjectsUsingGET = function(customObjectName,filterType,filterValues,customObjectLookupRequest,fields,batchSize,nextPageToken) {
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
 * List Custom Object Types
 * Returns a list of Custom Object Types available in the target instance, along with id, deduplication, relationship, and field information for each type.  Required Permissions: Read-Only Custom Object Type, Read-Write Custom Object Type
 *
 * names List Comma-separated list of API names of custom object types to filter on (optional)
 * state String State of custom object type to filter on.  By default, if an approved version exists, it is returned.  Otherwise, the draft version is returned. (optional)
 * returns ResponseOfObjectMetaData
 **/
exports.listCustomObjectTypesUsingGET = function(names,state) {
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
 * List Custom Objects
 * Returns a list of Custom Object types available in the target instance, along with id and deduplication information for each type.  Required Permissions: Read-Only Custom Object, Read-Write Custom Object
 *
 * names List Comma-separated list of names to filter types on (optional)
 * returns ResponseOfObjectMetaData
 **/
exports.listCustomObjectsUsingGET = function(names) {
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
 * Sync Custom Object Type
 * Inserts, updates, or upserts custom object type record to the target instance.  Required Permissions: Read-Write Custom Object Type
 *
 * syncCustomObjectTypeRequest SyncCustomObjectTypeRequest JSON object containing custom object type attributes
 * returns ResponseOfCustomObjectType
 **/
exports.syncCustomObjectTypeUsingPOST = function(syncCustomObjectTypeRequest) {
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
 * Sync Custom Objects
 * Inserts, updates, or upserts custom object records to the target instance.  Required Permissions: Read-Write Custom Object
 *
 * customObjectName String customObjectName
 * syncCustomObjectRequest SyncCustomObjectRequest syncCustomObjectRequest
 * returns ResponseOfCustomObject
 **/
exports.syncCustomObjectsUsingPOST = function(customObjectName,syncCustomObjectRequest) {
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
 * Update Custom Object Type Field
 * Updates a field in custom object type.  Required Permissions: Read-Write Custom Object Type
 *
 * apiName String API name of custom object type
 * fieldApiName String API name of custom object type field
 * updateCustomObjectTypeFieldRequest UpdateCustomObjectTypeFieldRequest JSON object containing custom object type fields
 * returns ResponseOfCustomObjectType
 **/
exports.updateCustomObjectTypeFieldUsingPOST = function(apiName,fieldApiName,updateCustomObjectTypeFieldRequest) {
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

