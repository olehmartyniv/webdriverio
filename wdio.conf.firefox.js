const { config } = require('./wdio.conf');

config.capabilities = [
  {
    browserName: 'firefox',
  },
];

module.exports = { config };
