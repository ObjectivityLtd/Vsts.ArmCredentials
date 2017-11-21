var logic = require('./logic.js');
var inputs = require('./inputs.js');

exports.run = function () {
    var connectedService = inputs.getConectedService();
    var variablesNames = inputs.getVariablesNames();

    var secrets = logic.getARMCredentials(connectedService, variablesNames);

    logic.saveToSecretVariables(secrets);
}

