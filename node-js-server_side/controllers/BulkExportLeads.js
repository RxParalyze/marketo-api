'use strict';

var utils = require('../utils/writer.js');
var BulkExportLeads = require('../service/BulkExportLeadsService');

module.exports.cancelExportLeadsUsingPOST = function cancelExportLeadsUsingPOST (req, res, next) {
  var exportId = req.swagger.params['exportId'].value;
  BulkExportLeads.cancelExportLeadsUsingPOST(exportId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.createExportLeadsUsingPOST = function createExportLeadsUsingPOST (req, res, next) {
  var exportLeadRequest = req.swagger.params['exportLeadRequest'].value;
  BulkExportLeads.createExportLeadsUsingPOST(exportLeadRequest)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.enqueueExportLeadsUsingPOST = function enqueueExportLeadsUsingPOST (req, res, next) {
  var exportId = req.swagger.params['exportId'].value;
  BulkExportLeads.enqueueExportLeadsUsingPOST(exportId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getExportLeadsFileUsingGET = function getExportLeadsFileUsingGET (req, res, next) {
  var exportId = req.swagger.params['exportId'].value;
  var range = req.swagger.params['Range'].value;
  BulkExportLeads.getExportLeadsFileUsingGET(exportId,range)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getExportLeadsStatusUsingGET = function getExportLeadsStatusUsingGET (req, res, next) {
  var exportId = req.swagger.params['exportId'].value;
  BulkExportLeads.getExportLeadsStatusUsingGET(exportId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getExportLeadsUsingGET = function getExportLeadsUsingGET (req, res, next) {
  var status = req.swagger.params['status'].value;
  var batchSize = req.swagger.params['batchSize'].value;
  var nextPageToken = req.swagger.params['nextPageToken'].value;
  BulkExportLeads.getExportLeadsUsingGET(status,batchSize,nextPageToken)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
