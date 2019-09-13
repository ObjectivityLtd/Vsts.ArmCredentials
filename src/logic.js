var tl = require("vsts-task-lib");

exports.getARMCredentials = getARMCredentials;
exports.saveToSecretVariables = saveToSecretVariables;

function getARMCredentials(connectedService, variableNames) {
    var servicePrincipalId = tl.getEndpointAuthorizationParameter(connectedService, "serviceprincipalid", false);
    var servicePrincipalKey = tl.getEndpointAuthorizationParameter(connectedService, "serviceprincipalkey", false);
    var tenantId = tl.getEndpointAuthorizationParameter(connectedService, "tenantid", false);
    var subscriptionId = tl.getEndpointDataParameter(connectedService, "subscriptionId", true);
     

    var secrets = [];
    secrets.push({ name: variableNames.serviceprincipalid, value: servicePrincipalId });
    secrets.push({ name: variableNames.servicePrincipalKey, value: servicePrincipalKey });
    secrets.push({ name: variableNames.tenantId, value: tenantId });
    secrets.push({ name: variableNames.subscriptionId, value: subscriptionId });

    return secrets;
}

function saveToSecretVariables(secrets) {
    var secret;
    while (secrets.length > 0) {
        secret = secrets.pop();
        tl.setVariable(secret.name, secret.value, true);
    }
}
