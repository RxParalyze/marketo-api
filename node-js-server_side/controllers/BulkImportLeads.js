'use strict';

var utils = require('../utils/writer.js');
var BulkImportLeads = require('../service/BulkImportLeadsService');

module.exports.getImportLeadFailuresUsingGET = function getImportLeadFailuresUsingGET (req, res, next) {
  var batchId = req.swagger.params['batchId'].value;
  BulkImportLeads.getImportLeadFailuresUsingGET(batchId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getImportLeadStatusUsingGET = function getImportLeadStatusUsingGET (req, res, next) {
  var batchId = req.swagger.params['batchId'].value;
  BulkImportLeads.getImportLeadStatusUsingGET(batchId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getImportLeadWarningsUsingGET = function getImportLeadWarningsUsingGET (req, res, next) {
  var batchId = req.swagger.params['batchId'].value;
  BulkImportLeads.getImportLeadWarningsUsingGET(batchId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.importLeadUsingPOST = function importLeadUsingPOST (req, res, next) {
  var format = req.swagger.params['format'].value;
  var file = req.swagger.params['file'].value;
  var lookupField = req.swagger.params['lookupField'].value;
  var partitionName = req.swagger.params['partitionName'].value;
  var listId = req.swagger.params['listId'].value;
  BulkImportLeads.importLeadUsingPOST(format,file,lookupField,partitionName,listId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
