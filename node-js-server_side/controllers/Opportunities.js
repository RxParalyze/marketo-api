'use strict';

var utils = require('../utils/writer.js');
var Opportunities = require('../service/OpportunitiesService');

module.exports.deleteOpportunitiesUsingPOST = function deleteOpportunitiesUsingPOST (req, res, next) {
  var deleteCustomObjectRequest = req.swagger.params['deleteCustomObjectRequest'].value;
  Opportunities.deleteOpportunitiesUsingPOST(deleteCustomObjectRequest)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.deleteOpportunityRolesUsingPOST = function deleteOpportunityRolesUsingPOST (req, res, next) {
  var deleteCustomObjectRequest = req.swagger.params['deleteCustomObjectRequest'].value;
  Opportunities.deleteOpportunityRolesUsingPOST(deleteCustomObjectRequest)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.describeOpportunityRoleUsingGET = function describeOpportunityRoleUsingGET (req, res, next) {
  Opportunities.describeOpportunityRoleUsingGET()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.describeUsingGET_4 = function describeUsingGET_4 (req, res, next) {
  Opportunities.describeUsingGET_4()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getOpportunitiesUsingGET = function getOpportunitiesUsingGET (req, res, next) {
  var filterType = req.swagger.params['filterType'].value;
  var filterValues = req.swagger.params['filterValues'].value;
  var customObjectLookupRequest = req.swagger.params['customObjectLookupRequest'].value;
  var fields = req.swagger.params['fields'].value;
  var batchSize = req.swagger.params['batchSize'].value;
  var nextPageToken = req.swagger.params['nextPageToken'].value;
  Opportunities.getOpportunitiesUsingGET(filterType,filterValues,customObjectLookupRequest,fields,batchSize,nextPageToken)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getOpportunityFieldByNameUsingGET = function getOpportunityFieldByNameUsingGET (req, res, next) {
  var fieldApiName = req.swagger.params['fieldApiName'].value;
  Opportunities.getOpportunityFieldByNameUsingGET(fieldApiName)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getOpportunityFieldsUsingGET = function getOpportunityFieldsUsingGET (req, res, next) {
  var batchSize = req.swagger.params['batchSize'].value;
  var nextPageToken = req.swagger.params['nextPageToken'].value;
  Opportunities.getOpportunityFieldsUsingGET(batchSize,nextPageToken)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getOpportunityRolesUsingGET = function getOpportunityRolesUsingGET (req, res, next) {
  var filterType = req.swagger.params['filterType'].value;
  var filterValues = req.swagger.params['filterValues'].value;
  var customObjectLookupRequest = req.swagger.params['customObjectLookupRequest'].value;
  var fields = req.swagger.params['fields'].value;
  var batchSize = req.swagger.params['batchSize'].value;
  var nextPageToken = req.swagger.params['nextPageToken'].value;
  Opportunities.getOpportunityRolesUsingGET(filterType,filterValues,customObjectLookupRequest,fields,batchSize,nextPageToken)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.syncOpportunitiesUsingPOST = function syncOpportunitiesUsingPOST (req, res, next) {
  var syncCustomObjectRequest = req.swagger.params['syncCustomObjectRequest'].value;
  Opportunities.syncOpportunitiesUsingPOST(syncCustomObjectRequest)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.syncOpportunityRolesUsingPOST = function syncOpportunityRolesUsingPOST (req, res, next) {
  var syncCustomObjectRequest = req.swagger.params['syncCustomObjectRequest'].value;
  Opportunities.syncOpportunityRolesUsingPOST(syncCustomObjectRequest)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
