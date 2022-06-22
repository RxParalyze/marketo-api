'use strict';

var utils = require('../utils/writer.js');
var SalesPersons = require('../service/SalesPersonsService');

module.exports.deleteSalesPersonUsingPOST = function deleteSalesPersonUsingPOST (req, res, next) {
  var deleteSalesPersonRequest = req.swagger.params['deleteSalesPersonRequest'].value;
  SalesPersons.deleteSalesPersonUsingPOST(deleteSalesPersonRequest)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.describeUsingGET_5 = function describeUsingGET_5 (req, res, next) {
  SalesPersons.describeUsingGET_5()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getSalesPersonUsingGET = function getSalesPersonUsingGET (req, res, next) {
  var filterType = req.swagger.params['filterType'].value;
  var filterValues = req.swagger.params['filterValues'].value;
  var fields = req.swagger.params['fields'].value;
  var batchSize = req.swagger.params['batchSize'].value;
  var nextPageToken = req.swagger.params['nextPageToken'].value;
  SalesPersons.getSalesPersonUsingGET(filterType,filterValues,fields,batchSize,nextPageToken)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.syncSalesPersonsUsingPOST = function syncSalesPersonsUsingPOST (req, res, next) {
  var syncSalesPersonRequest = req.swagger.params['syncSalesPersonRequest'].value;
  SalesPersons.syncSalesPersonsUsingPOST(syncSalesPersonRequest)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
