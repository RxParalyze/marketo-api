'use strict';

var utils = require('../utils/writer.js');
var BulkImportCustomObjects = require('../service/BulkImportCustomObjectsService');

module.exports.getImportCustomObjectFailuresUsingGET = function getImportCustomObjectFailuresUsingGET (req, res, next) {
  var apiName = req.swagger.params['apiName'].value;
  var batchId = req.swagger.params['batchId'].value;
  BulkImportCustomObjects.getImportCustomObjectFailuresUsingGET(apiName,batchId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getImportCustomObjectStatusUsingGET = function getImportCustomObjectStatusUsingGET (req, res, next) {
  var apiName = req.swagger.params['apiName'].value;
  var batchId = req.swagger.params['batchId'].value;
  BulkImportCustomObjects.getImportCustomObjectStatusUsingGET(apiName,batchId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getImportCustomObjectWarningsUsingGET = function getImportCustomObjectWarningsUsingGET (req, res, next) {
  var apiName = req.swagger.params['apiName'].value;
  var batchId = req.swagger.params['batchId'].value;
  BulkImportCustomObjects.getImportCustomObjectWarningsUsingGET(apiName,batchId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.importCustomObjectUsingPOST = function importCustomObjectUsingPOST (req, res, next) {
  var apiName = req.swagger.params['apiName'].value;
  var format = req.swagger.params['format'].value;
  var file = req.swagger.params['file'].value;
  BulkImportCustomObjects.importCustomObjectUsingPOST(apiName,format,file)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
