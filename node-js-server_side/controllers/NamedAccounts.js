'use strict';

var utils = require('../utils/writer.js');
var NamedAccounts = require('../service/NamedAccountsService');

module.exports.deleteNamedAccountsUsingPOST = function deleteNamedAccountsUsingPOST (req, res, next) {
  var deleteAccountRequest = req.swagger.params['deleteAccountRequest'].value;
  NamedAccounts.deleteNamedAccountsUsingPOST(deleteAccountRequest)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.describeUsingGET_3 = function describeUsingGET_3 (req, res, next) {
  NamedAccounts.describeUsingGET_3()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getNamedAccountFieldByNameUsingGET = function getNamedAccountFieldByNameUsingGET (req, res, next) {
  var fieldApiName = req.swagger.params['fieldApiName'].value;
  NamedAccounts.getNamedAccountFieldByNameUsingGET(fieldApiName)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getNamedAccountFieldsUsingGET = function getNamedAccountFieldsUsingGET (req, res, next) {
  var batchSize = req.swagger.params['batchSize'].value;
  var nextPageToken = req.swagger.params['nextPageToken'].value;
  NamedAccounts.getNamedAccountFieldsUsingGET(batchSize,nextPageToken)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getNamedAccountsUsingGET = function getNamedAccountsUsingGET (req, res, next) {
  var filterType = req.swagger.params['filterType'].value;
  var filterValues = req.swagger.params['filterValues'].value;
  var fields = req.swagger.params['fields'].value;
  var batchSize = req.swagger.params['batchSize'].value;
  var nextPageToken = req.swagger.params['nextPageToken'].value;
  NamedAccounts.getNamedAccountsUsingGET(filterType,filterValues,fields,batchSize,nextPageToken)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.syncNamedAccountsUsingPOST = function syncNamedAccountsUsingPOST (req, res, next) {
  var syncAccountRequest = req.swagger.params['syncAccountRequest'].value;
  NamedAccounts.syncNamedAccountsUsingPOST(syncAccountRequest)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
