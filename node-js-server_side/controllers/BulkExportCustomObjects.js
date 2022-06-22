'use strict';

var utils = require('../utils/writer.js');
var BulkExportCustomObjects = require('../service/BulkExportCustomObjectsService');

module.exports.cancelExportCustomObjectsUsingPOST = function cancelExportCustomObjectsUsingPOST (req, res, next) {
  var apiName = req.swagger.params['apiName'].value;
  var exportId = req.swagger.params['exportId'].value;
  BulkExportCustomObjects.cancelExportCustomObjectsUsingPOST(apiName,exportId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.createExportCustomObjectsUsingPOST = function createExportCustomObjectsUsingPOST (req, res, next) {
  var apiName = req.swagger.params['apiName'].value;
  var exportCustomObjectRequest = req.swagger.params['exportCustomObjectRequest'].value;
  BulkExportCustomObjects.createExportCustomObjectsUsingPOST(apiName,exportCustomObjectRequest)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.enqueueExportCustomObjectsUsingPOST = function enqueueExportCustomObjectsUsingPOST (req, res, next) {
  var apiName = req.swagger.params['apiName'].value;
  var exportId = req.swagger.params['exportId'].value;
  BulkExportCustomObjects.enqueueExportCustomObjectsUsingPOST(apiName,exportId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getExportCustomObjectsFileUsingGET = function getExportCustomObjectsFileUsingGET (req, res, next) {
  var apiName = req.swagger.params['apiName'].value;
  var exportId = req.swagger.params['exportId'].value;
  var range = req.swagger.params['Range'].value;
  BulkExportCustomObjects.getExportCustomObjectsFileUsingGET(apiName,exportId,range)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getExportCustomObjectsStatusUsingGET = function getExportCustomObjectsStatusUsingGET (req, res, next) {
  var apiName = req.swagger.params['apiName'].value;
  var exportId = req.swagger.params['exportId'].value;
  BulkExportCustomObjects.getExportCustomObjectsStatusUsingGET(apiName,exportId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getExportCustomObjectsUsingGET = function getExportCustomObjectsUsingGET (req, res, next) {
  var apiName = req.swagger.params['apiName'].value;
  var status = req.swagger.params['status'].value;
  var batchSize = req.swagger.params['batchSize'].value;
  var nextPageToken = req.swagger.params['nextPageToken'].value;
  BulkExportCustomObjects.getExportCustomObjectsUsingGET(apiName,status,batchSize,nextPageToken)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
