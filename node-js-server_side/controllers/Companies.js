'use strict';

var utils = require('../utils/writer.js');
var Companies = require('../service/CompaniesService');

module.exports.deleteCompaniesUsingPOST = function deleteCompaniesUsingPOST (req, res, next) {
  var deleteCompanyRequest = req.swagger.params['deleteCompanyRequest'].value;
  Companies.deleteCompaniesUsingPOST(deleteCompanyRequest)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.describeUsingGET = function describeUsingGET (req, res, next) {
  Companies.describeUsingGET()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getCompaniesUsingGET = function getCompaniesUsingGET (req, res, next) {
  var filterType = req.swagger.params['filterType'].value;
  var filterValues = req.swagger.params['filterValues'].value;
  var fields = req.swagger.params['fields'].value;
  var batchSize = req.swagger.params['batchSize'].value;
  var nextPageToken = req.swagger.params['nextPageToken'].value;
  Companies.getCompaniesUsingGET(filterType,filterValues,fields,batchSize,nextPageToken)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getCompanyFieldByNameUsingGET = function getCompanyFieldByNameUsingGET (req, res, next) {
  var fieldApiName = req.swagger.params['fieldApiName'].value;
  Companies.getCompanyFieldByNameUsingGET(fieldApiName)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getCompanyFieldsUsingGET = function getCompanyFieldsUsingGET (req, res, next) {
  var batchSize = req.swagger.params['batchSize'].value;
  var nextPageToken = req.swagger.params['nextPageToken'].value;
  Companies.getCompanyFieldsUsingGET(batchSize,nextPageToken)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.syncCompaniesUsingPOST = function syncCompaniesUsingPOST (req, res, next) {
  var syncCompanyRequest = req.swagger.params['syncCompanyRequest'].value;
  Companies.syncCompaniesUsingPOST(syncCompanyRequest)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
