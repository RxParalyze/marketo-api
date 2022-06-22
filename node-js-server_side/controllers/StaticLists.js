'use strict';

var utils = require('../utils/writer.js');
var StaticLists = require('../service/StaticListsService');

module.exports.addLeadsToListUsingPOST = function addLeadsToListUsingPOST (req, res, next) {
  var listId = req.swagger.params['listId'].value;
  var listOperationRequest = req.swagger.params['listOperationRequest'].value;
  var id = req.swagger.params['id'].value;
  StaticLists.addLeadsToListUsingPOST(listId,listOperationRequest,id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.areLeadsMemberOfListUsingGET = function areLeadsMemberOfListUsingGET (req, res, next) {
  var listId = req.swagger.params['listId'].value;
  var listOperationRequest = req.swagger.params['listOperationRequest'].value;
  var id = req.swagger.params['id'].value;
  StaticLists.areLeadsMemberOfListUsingGET(listId,listOperationRequest,id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getLeadsByListIdUsingGET = function getLeadsByListIdUsingGET (req, res, next) {
  var listId = req.swagger.params['listId'].value;
  var fields = req.swagger.params['fields'].value;
  var batchSize = req.swagger.params['batchSize'].value;
  var nextPageToken = req.swagger.params['nextPageToken'].value;
  StaticLists.getLeadsByListIdUsingGET(listId,fields,batchSize,nextPageToken)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getLeadsByListIdUsingGET_1 = function getLeadsByListIdUsingGET_1 (req, res, next) {
  var listId = req.swagger.params['listId'].value;
  var fields = req.swagger.params['fields'].value;
  var batchSize = req.swagger.params['batchSize'].value;
  var nextPageToken = req.swagger.params['nextPageToken'].value;
  StaticLists.getLeadsByListIdUsingGET_1(listId,fields,batchSize,nextPageToken)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getListByIdUsingGET = function getListByIdUsingGET (req, res, next) {
  var listId = req.swagger.params['listId'].value;
  StaticLists.getListByIdUsingGET(listId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getListsUsingGET = function getListsUsingGET (req, res, next) {
  var id = req.swagger.params['id'].value;
  var name = req.swagger.params['name'].value;
  var programName = req.swagger.params['programName'].value;
  var workspaceName = req.swagger.params['workspaceName'].value;
  var batchSize = req.swagger.params['batchSize'].value;
  var nextPageToken = req.swagger.params['nextPageToken'].value;
  StaticLists.getListsUsingGET(id,name,programName,workspaceName,batchSize,nextPageToken)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.removeLeadsFromListUsingDELETE = function removeLeadsFromListUsingDELETE (req, res, next) {
  var listId = req.swagger.params['listId'].value;
  var listOperationRequest = req.swagger.params['listOperationRequest'].value;
  var id = req.swagger.params['id'].value;
  StaticLists.removeLeadsFromListUsingDELETE(listId,listOperationRequest,id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
