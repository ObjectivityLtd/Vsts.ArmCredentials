var tl = require("vsts-task-lib");

exports.getConectedService = getConectedService;
exports.getVariablesNames = getVariablesNames;

function getConectedService() {
    return tl.getInput("ConnectedServiceName", true);
}

function getVariablesNames() {
    var names = {};
    names.serviceprincipalid = tl.getInput("ServicePrincipalIdVariableName", true);
    names.servicePrincipalKey = tl.getInput("ServicePrincipalKeyVariableName", true);
    names.tenantId = tl.getInput("TenantIdVariableName", true);
    names.subscriptionId = tl.getInput("SubscriptionIdVariableName", true);

    return names;
}