'use strict';

var utils = require('../utils/writer.js');
var BulkExportActivities = require('../service/BulkExportActivitiesService');

module.exports.cancelExportActivitiesUsingPOST = function cancelExportActivitiesUsingPOST (req, res, next) {
  var exportId = req.swagger.params['exportId'].value;
  BulkExportActivities.cancelExportActivitiesUsingPOST(exportId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.createExportActivitiesUsingPOST = function createExportActivitiesUsingPOST (req, res, next) {
  var exportActivityRequest = req.swagger.params['exportActivityRequest'].value;
  BulkExportActivities.createExportActivitiesUsingPOST(exportActivityRequest)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.enqueueExportActivitiesUsingPOST = function enqueueExportActivitiesUsingPOST (req, res, next) {
  var exportId = req.swagger.params['exportId'].value;
  BulkExportActivities.enqueueExportActivitiesUsingPOST(exportId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getExportActivitiesFileUsingGET = function getExportActivitiesFileUsingGET (req, res, next) {
  var exportId = req.swagger.params['exportId'].value;
  var range = req.swagger.params['Range'].value;
  BulkExportActivities.getExportActivitiesFileUsingGET(exportId,range)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getExportActivitiesStatusUsingGET = function getExportActivitiesStatusUsingGET (req, res, next) {
  var exportId = req.swagger.params['exportId'].value;
  BulkExportActivities.getExportActivitiesStatusUsingGET(exportId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getExportActivitiesUsingGET = function getExportActivitiesUsingGET (req, res, next) {
  var status = req.swagger.params['status'].value;
  var batchSize = req.swagger.params['batchSize'].value;
  var nextPageToken = req.swagger.params['nextPageToken'].value;
  BulkExportActivities.getExportActivitiesUsingGET(status,batchSize,nextPageToken)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
