'use strict';

var utils = require('../utils/writer.js');
var BulkImportProgramMembers = require('../service/BulkImportProgramMembersService');

module.exports.getImportProgramMemberFailuresUsingGET = function getImportProgramMemberFailuresUsingGET (req, res, next) {
  var batchId = req.swagger.params['batchId'].value;
  BulkImportProgramMembers.getImportProgramMemberFailuresUsingGET(batchId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getImportProgramMemberStatusUsingGET = function getImportProgramMemberStatusUsingGET (req, res, next) {
  var batchId = req.swagger.params['batchId'].value;
  BulkImportProgramMembers.getImportProgramMemberStatusUsingGET(batchId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getImportProgramMemberWarningsUsingGET = function getImportProgramMemberWarningsUsingGET (req, res, next) {
  var batchId = req.swagger.params['batchId'].value;
  BulkImportProgramMembers.getImportProgramMemberWarningsUsingGET(batchId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.importProgramMemberUsingPOST = function importProgramMemberUsingPOST (req, res, next) {
  var programId = req.swagger.params['programId'].value;
  var programMemberStatus = req.swagger.params['programMemberStatus'].value;
  var format = req.swagger.params['format'].value;
  var file = req.swagger.params['file'].value;
  BulkImportProgramMembers.importProgramMemberUsingPOST(programId,programMemberStatus,format,file)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
