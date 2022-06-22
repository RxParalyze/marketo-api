'use strict';


/**
 * Get Daily Errors
 * Retrieves a count of each error type they have encountered in the current day.  Required Permissions: None
 *
 * returns ResponseOfErrorsData
 **/
exports.getDailyErrorsUsingGET = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {"empty": false};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Get Daily Usage
 * Returns the number of calls consumed for the day.  Required Permissions: None
 *
 * returns ResponseOfUsageData
 **/
exports.getDailyUsageUsingGET = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {"empty": false};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Get Weekly Errors
 * Returns a count of each error type they have encountered in the past 7 days.  Required Permissions: None
 *
 * returns ResponseOfErrorsData
 **/
exports.getLast7DaysErrorsUsingGET = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {"empty": false};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Get Weekly Usage
 * Returns the number of calls consumed in the past 7 days.  Required Permissions: None
 *
 * returns ResponseOfUsageData
 **/
exports.getLast7DaysUsageUsingGET = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {"empty": false};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

