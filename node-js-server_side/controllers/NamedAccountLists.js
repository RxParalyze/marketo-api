'use strict';

var utils = require('../utils/writer.js');
var NamedAccountLists = require('../service/NamedAccountListsService');

module.exports.addNamedAccountListMembersUsingPOST = function addNamedAccountListMembersUsingPOST (req, res, next) {
  var id = req.swagger.params['id'].value;
  var addNamedAccountListMemberRequest = req.swagger.params['addNamedAccountListMemberRequest'].value;
  NamedAccountLists.addNamedAccountListMembersUsingPOST(id,addNamedAccountListMemberRequest)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.deleteNamedAccountListsUsingPOST = function deleteNamedAccountListsUsingPOST (req, res, next) {
  var deleteNamedAccountListRequest = req.swagger.params['deleteNamedAccountListRequest'].value;
  NamedAccountLists.deleteNamedAccountListsUsingPOST(deleteNamedAccountListRequest)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getNamedAccountListMembersUsingGET = function getNamedAccountListMembersUsingGET (req, res, next) {
  var id = req.swagger.params['id'].value;
  var fields = req.swagger.params['fields'].value;
  var batchSize = req.swagger.params['batchSize'].value;
  var nextPageToken = req.swagger.params['nextPageToken'].value;
  NamedAccountLists.getNamedAccountListMembersUsingGET(id,fields,batchSize,nextPageToken)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getNamedAccountListsUsingGET = function getNamedAccountListsUsingGET (req, res, next) {
  var filterType = req.swagger.params['filterType'].value;
  var filterValues = req.swagger.params['filterValues'].value;
  var batchSize = req.swagger.params['batchSize'].value;
  var nextPageToken = req.swagger.params['nextPageToken'].value;
  NamedAccountLists.getNamedAccountListsUsingGET(filterType,filterValues,batchSize,nextPageToken)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.removeNamedAccountListMembersUsingPOST = function removeNamedAccountListMembersUsingPOST (req, res, next) {
  var id = req.swagger.params['id'].value;
  var removeNamedAccountListMemberRequest = req.swagger.params['removeNamedAccountListMemberRequest'].value;
  NamedAccountLists.removeNamedAccountListMembersUsingPOST(id,removeNamedAccountListMemberRequest)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.syncNamedAccountListsUsingPOST = function syncNamedAccountListsUsingPOST (req, res, next) {
  var syncNamedAccountListRequest = req.swagger.params['syncNamedAccountListRequest'].value;
  NamedAccountLists.syncNamedAccountListsUsingPOST(syncNamedAccountListRequest)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
