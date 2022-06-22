'use strict';

var utils = require('../utils/writer.js');
var Campaigns = require('../service/CampaignsService');

module.exports.getCampaignByIdUsingGET = function getCampaignByIdUsingGET (req, res, next) {
  var campaignId = req.swagger.params['campaignId'].value;
  Campaigns.getCampaignByIdUsingGET(campaignId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getCampaignsUsingGET = function getCampaignsUsingGET (req, res, next) {
  var id = req.swagger.params['id'].value;
  var name = req.swagger.params['name'].value;
  var programName = req.swagger.params['programName'].value;
  var workspaceName = req.swagger.params['workspaceName'].value;
  var batchSize = req.swagger.params['batchSize'].value;
  var nextPageToken = req.swagger.params['nextPageToken'].value;
  var isTriggerable = req.swagger.params['isTriggerable'].value;
  Campaigns.getCampaignsUsingGET(id,name,programName,workspaceName,batchSize,nextPageToken,isTriggerable)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.scheduleCampaignUsingPOST = function scheduleCampaignUsingPOST (req, res, next) {
  var campaignId = req.swagger.params['campaignId'].value;
  var scheduleCampaignRequest = req.swagger.params['scheduleCampaignRequest'].value;
  Campaigns.scheduleCampaignUsingPOST(campaignId,scheduleCampaignRequest)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.triggerCampaignUsingPOST = function triggerCampaignUsingPOST (req, res, next) {
  var campaignId = req.swagger.params['campaignId'].value;
  var triggerCampaignRequest = req.swagger.params['triggerCampaignRequest'].value;
  Campaigns.triggerCampaignUsingPOST(campaignId,triggerCampaignRequest)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
