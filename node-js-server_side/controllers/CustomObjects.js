'use strict';

var utils = require('../utils/writer.js');
var CustomObjects = require('../service/CustomObjectsService');

module.exports.addCustomObjectTypeFieldsUsingPOST = function addCustomObjectTypeFieldsUsingPOST (req, res, next) {
  var apiName = req.swagger.params['apiName'].value;
  var addCustomObjectTypeFieldsRequest = req.swagger.params['addCustomObjectTypeFieldsRequest'].value;
  CustomObjects.addCustomObjectTypeFieldsUsingPOST(apiName,addCustomObjectTypeFieldsRequest)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.approveCustomObjectTypeUsingPOST = function approveCustomObjectTypeUsingPOST (req, res, next) {
  var apiName = req.swagger.params['apiName'].value;
  CustomObjects.approveCustomObjectTypeUsingPOST(apiName)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.deleteCustomObjectTypeFieldsUsingPOST = function deleteCustomObjectTypeFieldsUsingPOST (req, res, next) {
  var apiName = req.swagger.params['apiName'].value;
  var deleteCustomObjectTypeFieldsRequest = req.swagger.params['deleteCustomObjectTypeFieldsRequest'].value;
  CustomObjects.deleteCustomObjectTypeFieldsUsingPOST(apiName,deleteCustomObjectTypeFieldsRequest)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.deleteCustomObjectTypeUsingPOST = function deleteCustomObjectTypeUsingPOST (req, res, next) {
  var apiName = req.swagger.params['apiName'].value;
  CustomObjects.deleteCustomObjectTypeUsingPOST(apiName)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.deleteCustomObjectsUsingPOST = function deleteCustomObjectsUsingPOST (req, res, next) {
  var customObjectName = req.swagger.params['customObjectName'].value;
  var deleteCustomObjectRequest = req.swagger.params['deleteCustomObjectRequest'].value;
  CustomObjects.deleteCustomObjectsUsingPOST(customObjectName,deleteCustomObjectRequest)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.describeCustomObjectTypeUsingGET = function describeCustomObjectTypeUsingGET (req, res, next) {
  var apiName = req.swagger.params['apiName'].value;
  var state = req.swagger.params['state'].value;
  CustomObjects.describeCustomObjectTypeUsingGET(apiName,state)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.describeUsingGET_1 = function describeUsingGET_1 (req, res, next) {
  var customObjectName = req.swagger.params['customObjectName'].value;
  CustomObjects.describeUsingGET_1(customObjectName)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.discardCustomObjectTypeUsingPOST = function discardCustomObjectTypeUsingPOST (req, res, next) {
  var apiName = req.swagger.params['apiName'].value;
  CustomObjects.discardCustomObjectTypeUsingPOST(apiName)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getCustomObjectTypeDependentAssetsUsingGET = function getCustomObjectTypeDependentAssetsUsingGET (req, res, next) {
  var apiName = req.swagger.params['apiName'].value;
  CustomObjects.getCustomObjectTypeDependentAssetsUsingGET(apiName)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getCustomObjectTypeFieldDataTypesUsingGET = function getCustomObjectTypeFieldDataTypesUsingGET (req, res, next) {
  CustomObjects.getCustomObjectTypeFieldDataTypesUsingGET()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getCustomObjectTypeLinkableObjectsUsingGET = function getCustomObjectTypeLinkableObjectsUsingGET (req, res, next) {
  CustomObjects.getCustomObjectTypeLinkableObjectsUsingGET()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getCustomObjectsUsingGET = function getCustomObjectsUsingGET (req, res, next) {
  var customObjectName = req.swagger.params['customObjectName'].value;
  var filterType = req.swagger.params['filterType'].value;
  var filterValues = req.swagger.params['filterValues'].value;
  var customObjectLookupRequest = req.swagger.params['customObjectLookupRequest'].value;
  var fields = req.swagger.params['fields'].value;
  var batchSize = req.swagger.params['batchSize'].value;
  var nextPageToken = req.swagger.params['nextPageToken'].value;
  CustomObjects.getCustomObjectsUsingGET(customObjectName,filterType,filterValues,customObjectLookupRequest,fields,batchSize,nextPageToken)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.listCustomObjectTypesUsingGET = function listCustomObjectTypesUsingGET (req, res, next) {
  var names = req.swagger.params['names'].value;
  var state = req.swagger.params['state'].value;
  CustomObjects.listCustomObjectTypesUsingGET(names,state)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.listCustomObjectsUsingGET = function listCustomObjectsUsingGET (req, res, next) {
  var names = req.swagger.params['names'].value;
  CustomObjects.listCustomObjectsUsingGET(names)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.syncCustomObjectTypeUsingPOST = function syncCustomObjectTypeUsingPOST (req, res, next) {
  var syncCustomObjectTypeRequest = req.swagger.params['syncCustomObjectTypeRequest'].value;
  CustomObjects.syncCustomObjectTypeUsingPOST(syncCustomObjectTypeRequest)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.syncCustomObjectsUsingPOST = function syncCustomObjectsUsingPOST (req, res, next) {
  var customObjectName = req.swagger.params['customObjectName'].value;
  var syncCustomObjectRequest = req.swagger.params['syncCustomObjectRequest'].value;
  CustomObjects.syncCustomObjectsUsingPOST(customObjectName,syncCustomObjectRequest)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.updateCustomObjectTypeFieldUsingPOST = function updateCustomObjectTypeFieldUsingPOST (req, res, next) {
  var apiName = req.swagger.params['apiName'].value;
  var fieldApiName = req.swagger.params['fieldApiName'].value;
  var updateCustomObjectTypeFieldRequest = req.swagger.params['updateCustomObjectTypeFieldRequest'].value;
  CustomObjects.updateCustomObjectTypeFieldUsingPOST(apiName,fieldApiName,updateCustomObjectTypeFieldRequest)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
