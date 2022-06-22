'use strict';


/**
 * Get Campaign By Id
 * Returns the record of a campaign by its id.  Required Permissions: Read-Only Campaigns, Read-Write Campaigns<br><br><b>Note: This endpoint has been superceded.</b>  Use <a href=\"/rest-api/endpoint-reference/asset-endpoint-reference/#!/Smart_Campaigns/getSmartCampaignByIdUsingGET\">Get Smart Campaign by Id</a> endpoint instead.
 *
 * campaignId Integer campaignId
 * returns ResponseOfCampaign
 **/
exports.getCampaignByIdUsingGET = function(campaignId) {
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
 * Get Campaigns
 * Returns a list of campaign records.  Required Permissions: Read-Only Campaigns, Read-Write Campaigns<br><br><b>Note: This endpoint has been superceded.</b>  Use <a href=\"/rest-api/endpoint-reference/asset-endpoint-reference/#/Smart_Campaigns/getAllSmartCampaignsGET\">Get Smart Campaigns</a> endpoint instead.
 *
 * id List Comma-separated list of campaign ids to return records for (optional)
 * name List Comma-separated list of names to filter on (optional)
 * programName List Comma-separated list of program names to filter on.  If set, will filter to only campaigns which are children of the designated programs. (optional)
 * workspaceName List Comma-separated list of workspace names to filter on.  If set, will only return campaigns in the given workspaces. (optional)
 * batchSize Integer Maximum number of records to return.  Maximum and default is 300. (optional)
 * nextPageToken String A token will be returned by this endpoint if the result set is greater than the batch size and can be passed in a subsequent call through this parameter.  See Paging Tokens for more info. (optional)
 * isTriggerable Boolean Set to true to return active Campaigns which have a Campaign is Requested trigger and source is Web Service API (optional)
 * returns ResponseOfCampaign
 **/
exports.getCampaignsUsingGET = function(id,name,programName,workspaceName,batchSize,nextPageToken,isTriggerable) {
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
 * Schedule Campaign
 * Remotely schedules a batch campaign to run at a given time.  My tokens local to the campaign's parent program can be overridden for the run to customize content.  When using the \"cloneToProgramName\" parameter described below, this endpoint is limited to 20 calls per day. Required Permissions: Execute Campaign
 *
 * campaignId Integer Id of the batch campaign to schedule.
 * scheduleCampaignRequest ScheduleCampaignRequest scheduleCampaignRequest (optional)
 * returns ResponseOfCampaign
 **/
exports.scheduleCampaignUsingPOST = function(campaignId,scheduleCampaignRequest) {
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
 * Request Campaign
 * Passes a set of leads to a trigger campaign to run through the campaign's flow.  The designated campaign must have a Campaign is Requested: Web Service API trigger, and must be active.  My tokens local to the campaign's parent program can be overridden for the run to customize content. A maximum of 100 leads are allowed per call. Required Permissions: Execute Campaign
 *
 * campaignId Integer The id of the campaign to trigger
 * triggerCampaignRequest TriggerCampaignRequest triggerCampaignRequest (optional)
 * returns ResponseOfCampaign
 **/
exports.triggerCampaignUsingPOST = function(campaignId,triggerCampaignRequest) {
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

