'use strict';

var utils = require('../utils/writer.js');
var Leads = require('../service/LeadsService');

module.exports.associateLeadUsingPOST = function associateLeadUsingPOST (req, res, next) {
  var leadId = req.swagger.params['leadId'].value;
  var cookie = req.swagger.params['cookie'].value;
  Leads.associateLeadUsingPOST(leadId,cookie)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.changeLeadProgramStatusUsingPOST = function changeLeadProgramStatusUsingPOST (req, res, next) {
  var programId = req.swagger.params['programId'].value;
  var changeLeadProgramStatusRequest = req.swagger.params['changeLeadProgramStatusRequest'].value;
  Leads.changeLeadProgramStatusUsingPOST(programId,changeLeadProgramStatusRequest)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.createLeadFieldUsingPOST = function createLeadFieldUsingPOST (req, res, next) {
  var createLeadFieldRequest = req.swagger.params['createLeadFieldRequest'].value;
  Leads.createLeadFieldUsingPOST(createLeadFieldRequest)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.deleteLeadsUsingPOST = function deleteLeadsUsingPOST (req, res, next) {
  var deleteLeadRequest = req.swagger.params['deleteLeadRequest'].value;
  var id = req.swagger.params['id'].value;
  Leads.deleteLeadsUsingPOST(deleteLeadRequest,id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.describeProgramMemberUsingGET = function describeProgramMemberUsingGET (req, res, next) {
  Leads.describeProgramMemberUsingGET()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.describeUsingGET_2 = function describeUsingGET_2 (req, res, next) {
  Leads.describeUsingGET_2()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.describeUsingGET_6 = function describeUsingGET_6 (req, res, next) {
  Leads.describeUsingGET_6()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getLeadByIdUsingGET = function getLeadByIdUsingGET (req, res, next) {
  var leadId = req.swagger.params['leadId'].value;
  var fields = req.swagger.params['fields'].value;
  Leads.getLeadByIdUsingGET(leadId,fields)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getLeadFieldByNameUsingGET = function getLeadFieldByNameUsingGET (req, res, next) {
  var fieldApiName = req.swagger.params['fieldApiName'].value;
  Leads.getLeadFieldByNameUsingGET(fieldApiName)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getLeadFieldsUsingGET = function getLeadFieldsUsingGET (req, res, next) {
  var batchSize = req.swagger.params['batchSize'].value;
  var nextPageToken = req.swagger.params['nextPageToken'].value;
  Leads.getLeadFieldsUsingGET(batchSize,nextPageToken)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getLeadPartitionsUsingGET = function getLeadPartitionsUsingGET (req, res, next) {
  Leads.getLeadPartitionsUsingGET()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getLeadsByFilterUsingGET = function getLeadsByFilterUsingGET (req, res, next) {
  var filterType = req.swagger.params['filterType'].value;
  var filterValues = req.swagger.params['filterValues'].value;
  var fields = req.swagger.params['fields'].value;
  var batchSize = req.swagger.params['batchSize'].value;
  var nextPageToken = req.swagger.params['nextPageToken'].value;
  Leads.getLeadsByFilterUsingGET(filterType,filterValues,fields,batchSize,nextPageToken)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getLeadsByProgramIdUsingGET = function getLeadsByProgramIdUsingGET (req, res, next) {
  var programId = req.swagger.params['programId'].value;
  var fields = req.swagger.params['fields'].value;
  var batchSize = req.swagger.params['batchSize'].value;
  var nextPageToken = req.swagger.params['nextPageToken'].value;
  Leads.getLeadsByProgramIdUsingGET(programId,fields,batchSize,nextPageToken)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getListMembershipUsingGET = function getListMembershipUsingGET (req, res, next) {
  var leadId = req.swagger.params['leadId'].value;
  var nextPageToken = req.swagger.params['nextPageToken'].value;
  var batchSize = req.swagger.params['batchSize'].value;
  Leads.getListMembershipUsingGET(leadId,nextPageToken,batchSize)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getProgramMembershipUsingGET = function getProgramMembershipUsingGET (req, res, next) {
  var leadId = req.swagger.params['leadId'].value;
  var nextPageToken = req.swagger.params['nextPageToken'].value;
  var batchSize = req.swagger.params['batchSize'].value;
  var earliestUpdatedAt = req.swagger.params['earliestUpdatedAt'].value;
  var latestUpdatedAt = req.swagger.params['latestUpdatedAt'].value;
  var filterType = req.swagger.params['filterType'].value;
  var filterValues = req.swagger.params['filterValues'].value;
  Leads.getProgramMembershipUsingGET(leadId,nextPageToken,batchSize,earliestUpdatedAt,latestUpdatedAt,filterType,filterValues)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getSmartCampaignMembershipUsingGET = function getSmartCampaignMembershipUsingGET (req, res, next) {
  var leadId = req.swagger.params['leadId'].value;
  var nextPageToken = req.swagger.params['nextPageToken'].value;
  var batchSize = req.swagger.params['batchSize'].value;
  var earliestUpdatedAt = req.swagger.params['earliestUpdatedAt'].value;
  var latestUpdatedAt = req.swagger.params['latestUpdatedAt'].value;
  Leads.getSmartCampaignMembershipUsingGET(leadId,nextPageToken,batchSize,earliestUpdatedAt,latestUpdatedAt)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.mergeLeadsUsingPOST = function mergeLeadsUsingPOST (req, res, next) {
  var leadId = req.swagger.params['leadId'].value;
  var leadId2 = req.swagger.params['leadId'].value;
  var leadIds = req.swagger.params['leadIds'].value;
  var mergeInCRM = req.swagger.params['mergeInCRM'].value;
  Leads.mergeLeadsUsingPOST(leadId,leadId2,leadIds,mergeInCRM)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.pushToMarketoUsingPOST = function pushToMarketoUsingPOST (req, res, next) {
  var pushLeadToMarketoRequest = req.swagger.params['pushLeadToMarketoRequest'].value;
  Leads.pushToMarketoUsingPOST(pushLeadToMarketoRequest)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.submitFormUsingPOST = function submitFormUsingPOST (req, res, next) {
  var submitFormRequest = req.swagger.params['submitFormRequest'].value;
  Leads.submitFormUsingPOST(submitFormRequest)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.syncLeadUsingPOST = function syncLeadUsingPOST (req, res, next) {
  var syncLeadRequest = req.swagger.params['syncLeadRequest'].value;
  Leads.syncLeadUsingPOST(syncLeadRequest)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.updateLeadFieldUsingPOST = function updateLeadFieldUsingPOST (req, res, next) {
  var fieldApiName = req.swagger.params['fieldApiName'].value;
  var updateLeadFieldRequest = req.swagger.params['updateLeadFieldRequest'].value;
  Leads.updateLeadFieldUsingPOST(fieldApiName,updateLeadFieldRequest)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.updatePartitionsUsingPOST = function updatePartitionsUsingPOST (req, res, next) {
  var updateLeadPartitionRequest = req.swagger.params['updateLeadPartitionRequest'].value;
  Leads.updatePartitionsUsingPOST(updateLeadPartitionRequest)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
