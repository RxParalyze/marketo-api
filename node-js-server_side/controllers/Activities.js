'use strict';

var utils = require('../utils/writer.js');
var Activities = require('../service/ActivitiesService');

module.exports.addCustomActivityUsingPOST = function addCustomActivityUsingPOST (req, res, next) {
  var customActivityRequest = req.swagger.params['customActivityRequest'].value;
  Activities.addCustomActivityUsingPOST(customActivityRequest)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.approveCustomActivityTypeUsingPOST = function approveCustomActivityTypeUsingPOST (req, res, next) {
  var apiName = req.swagger.params['apiName'].value;
  Activities.approveCustomActivityTypeUsingPOST(apiName)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.createCustomActivityTypeAttributesUsingPOST = function createCustomActivityTypeAttributesUsingPOST (req, res, next) {
  var apiName = req.swagger.params['apiName'].value;
  var customActivityTypeAttributeRequest = req.swagger.params['customActivityTypeAttributeRequest'].value;
  Activities.createCustomActivityTypeAttributesUsingPOST(apiName,customActivityTypeAttributeRequest)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.createCustomActivityTypeUsingPOST = function createCustomActivityTypeUsingPOST (req, res, next) {
  var customActivityTypeRequest = req.swagger.params['customActivityTypeRequest'].value;
  Activities.createCustomActivityTypeUsingPOST(customActivityTypeRequest)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.deleteCustomActivityTypeAttributesUsingPOST = function deleteCustomActivityTypeAttributesUsingPOST (req, res, next) {
  var apiName = req.swagger.params['apiName'].value;
  var customActivityTypeAttributeRequest = req.swagger.params['customActivityTypeAttributeRequest'].value;
  Activities.deleteCustomActivityTypeAttributesUsingPOST(apiName,customActivityTypeAttributeRequest)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.deleteCustomActivityTypeUsingPOST = function deleteCustomActivityTypeUsingPOST (req, res, next) {
  var apiName = req.swagger.params['apiName'].value;
  Activities.deleteCustomActivityTypeUsingPOST(apiName)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.describeCustomActivityTypeUsingGET = function describeCustomActivityTypeUsingGET (req, res, next) {
  var apiName = req.swagger.params['apiName'].value;
  var draft = req.swagger.params['draft'].value;
  Activities.describeCustomActivityTypeUsingGET(apiName,draft)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.discardDraftofCustomActivityTypeUsingPOST = function discardDraftofCustomActivityTypeUsingPOST (req, res, next) {
  var apiName = req.swagger.params['apiName'].value;
  Activities.discardDraftofCustomActivityTypeUsingPOST(apiName)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getActivitiesPagingTokenUsingGET = function getActivitiesPagingTokenUsingGET (req, res, next) {
  var sinceDatetime = req.swagger.params['sinceDatetime'].value;
  Activities.getActivitiesPagingTokenUsingGET(sinceDatetime)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getAllActivityTypesUsingGET = function getAllActivityTypesUsingGET (req, res, next) {
  Activities.getAllActivityTypesUsingGET()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getCustomActivityTypeUsingGET = function getCustomActivityTypeUsingGET (req, res, next) {
  Activities.getCustomActivityTypeUsingGET()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getDeletedLeadsUsingGET = function getDeletedLeadsUsingGET (req, res, next) {
  var nextPageToken = req.swagger.params['nextPageToken'].value;
  var batchSize = req.swagger.params['batchSize'].value;
  Activities.getDeletedLeadsUsingGET(nextPageToken,batchSize)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getLeadActivitiesUsingGET = function getLeadActivitiesUsingGET (req, res, next) {
  var nextPageToken = req.swagger.params['nextPageToken'].value;
  var activityTypeIds = req.swagger.params['activityTypeIds'].value;
  var assetIds = req.swagger.params['assetIds'].value;
  var listId = req.swagger.params['listId'].value;
  var leadIds = req.swagger.params['leadIds'].value;
  var batchSize = req.swagger.params['batchSize'].value;
  Activities.getLeadActivitiesUsingGET(nextPageToken,activityTypeIds,assetIds,listId,leadIds,batchSize)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getLeadChangesUsingGET = function getLeadChangesUsingGET (req, res, next) {
  var nextPageToken = req.swagger.params['nextPageToken'].value;
  var fields = req.swagger.params['fields'].value;
  var listId = req.swagger.params['listId'].value;
  var leadIds = req.swagger.params['leadIds'].value;
  var batchSize = req.swagger.params['batchSize'].value;
  Activities.getLeadChangesUsingGET(nextPageToken,fields,listId,leadIds,batchSize)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.updateCustomActivityTypeAttributesUsingPOST = function updateCustomActivityTypeAttributesUsingPOST (req, res, next) {
  var apiName = req.swagger.params['apiName'].value;
  var customActivityTypeAttributeRequest = req.swagger.params['customActivityTypeAttributeRequest'].value;
  Activities.updateCustomActivityTypeAttributesUsingPOST(apiName,customActivityTypeAttributeRequest)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.updateCustomActivityTypeUsingPOST = function updateCustomActivityTypeUsingPOST (req, res, next) {
  var apiName = req.swagger.params['apiName'].value;
  var customActivityTypeRequest = req.swagger.params['customActivityTypeRequest'].value;
  Activities.updateCustomActivityTypeUsingPOST(apiName,customActivityTypeRequest)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
