'use strict';

var utils = require('../utils/writer.js');
var Usage = require('../service/UsageService');

module.exports.getDailyErrorsUsingGET = function getDailyErrorsUsingGET (req, res, next) {
  Usage.getDailyErrorsUsingGET()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getDailyUsageUsingGET = function getDailyUsageUsingGET (req, res, next) {
  Usage.getDailyUsageUsingGET()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getLast7DaysErrorsUsingGET = function getLast7DaysErrorsUsingGET (req, res, next) {
  Usage.getLast7DaysErrorsUsingGET()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getLast7DaysUsageUsingGET = function getLast7DaysUsageUsingGET (req, res, next) {
  Usage.getLast7DaysUsageUsingGET()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
