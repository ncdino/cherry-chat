const { getDataConnect, validateArgs } = require('firebase/data-connect');

const connectorConfig = {
  connector: 'default',
  service: 'cherry-talk',
  location: 'us-central1'
};
exports.connectorConfig = connectorConfig;

