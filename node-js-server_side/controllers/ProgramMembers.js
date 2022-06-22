'use strict';

var utils = require('../utils/writer.js');
var ProgramMembers = require('../service/ProgramMembersService');

module.exports.createProgramMemberFieldUsingPOST = function createProgramMemberFieldUsingPOST (req, res, next) {
  var createLeadFieldRequest = req.swagger.params['createLeadFieldRequest'].value;
  ProgramMembers.createProgramMemberFieldUsingPOST(createLeadFieldRequest)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.deleteProgramMemberUsingPOST = function deleteProgramMemberUsingPOST (req, res, next) {
  var programId = req.swagger.params['programId'].value;
  var deleteProgramMemberRequest = req.swagger.params['deleteProgramMemberRequest'].value;
  ProgramMembers.deleteProgramMemberUsingPOST(programId,deleteProgramMemberRequest)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.describeProgramMemberUsingGET2 = function describeProgramMemberUsingGET2 (req, res, next) {
  ProgramMembers.describeProgramMemberUsingGET2()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getProgramMemberFieldByNameUsingGET = function getProgramMemberFieldByNameUsingGET (req, res, next) {
  var fieldApiName = req.swagger.params['fieldApiName'].value;
  ProgramMembers.getProgramMemberFieldByNameUsingGET(fieldApiName)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getProgramMemberFieldsUsingGET = function getProgramMemberFieldsUsingGET (req, res, next) {
  var batchSize = req.swagger.params['batchSize'].value;
  var nextPageToken = req.swagger.params['nextPageToken'].value;
  ProgramMembers.getProgramMemberFieldsUsingGET(batchSize,nextPageToken)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getProgramMembersUsingGET = function getProgramMembersUsingGET (req, res, next) {
  var programId = req.swagger.params['programId'].value;
  var filterType = req.swagger.params['filterType'].value;
  var filterValues = req.swagger.params['filterValues'].value;
  var startAt = req.swagger.params['startAt'].value;
  var endAt = req.swagger.params['endAt'].value;
  var fields = req.swagger.params['fields'].value;
  var batchSize = req.swagger.params['batchSize'].value;
  var nextPageToken = req.swagger.params['nextPageToken'].value;
  ProgramMembers.getProgramMembersUsingGET(programId,filterType,filterValues,startAt,endAt,fields,batchSize,nextPageToken)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.syncProgramMemberDataUsingPOST = function syncProgramMemberDataUsingPOST (req, res, next) {
  var programId = req.swagger.params['programId'].value;
  var syncProgramMemberDataRequest = req.swagger.params['syncProgramMemberDataRequest'].value;
  ProgramMembers.syncProgramMemberDataUsingPOST(programId,syncProgramMemberDataRequest)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.syncProgramMemberStatusUsingPOST = function syncProgramMemberStatusUsingPOST (req, res, next) {
  var programId = req.swagger.params['programId'].value;
  var syncProgramMemberStatusRequest = req.swagger.params['syncProgramMemberStatusRequest'].value;
  ProgramMembers.syncProgramMemberStatusUsingPOST(programId,syncProgramMemberStatusRequest)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.updateProgramMemberFieldUsingPOST = function updateProgramMemberFieldUsingPOST (req, res, next) {
  var fieldApiName = req.swagger.params['fieldApiName'].value;
  var updateLeadFieldRequest = req.swagger.params['updateLeadFieldRequest'].value;
  ProgramMembers.updateProgramMemberFieldUsingPOST(fieldApiName,updateLeadFieldRequest)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
