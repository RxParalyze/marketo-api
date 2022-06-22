'use strict';

var utils = require('../utils/writer.js');
var BulkExportProgramMembers = require('../service/BulkExportProgramMembersService');

module.exports.cancelExportProgramMembersUsingPOST = function cancelExportProgramMembersUsingPOST (req, res, next) {
  var exportId = req.swagger.params['exportId'].value;
  BulkExportProgramMembers.cancelExportProgramMembersUsingPOST(exportId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.createExportProgramMembersUsingPOST = function createExportProgramMembersUsingPOST (req, res, next) {
  var exportProgramMemberRequest = req.swagger.params['exportProgramMemberRequest'].value;
  BulkExportProgramMembers.createExportProgramMembersUsingPOST(exportProgramMemberRequest)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.enqueueExportProgramMembersUsingPOST = function enqueueExportProgramMembersUsingPOST (req, res, next) {
  var exportId = req.swagger.params['exportId'].value;
  BulkExportProgramMembers.enqueueExportProgramMembersUsingPOST(exportId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getExportProgramMembersFileUsingGET = function getExportProgramMembersFileUsingGET (req, res, next) {
  var exportId = req.swagger.params['exportId'].value;
  var range = req.swagger.params['Range'].value;
  BulkExportProgramMembers.getExportProgramMembersFileUsingGET(exportId,range)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getExportProgramMembersStatusUsingGET = function getExportProgramMembersStatusUsingGET (req, res, next) {
  var exportId = req.swagger.params['exportId'].value;
  BulkExportProgramMembers.getExportProgramMembersStatusUsingGET(exportId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getExportProgramMembersUsingGET = function getExportProgramMembersUsingGET (req, res, next) {
  var status = req.swagger.params['status'].value;
  var batchSize = req.swagger.params['batchSize'].value;
  var nextPageToken = req.swagger.params['nextPageToken'].value;
  BulkExportProgramMembers.getExportProgramMembersUsingGET(status,batchSize,nextPageToken)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
