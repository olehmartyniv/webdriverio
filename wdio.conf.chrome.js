const { config } = require('./wdio.conf');

config.capabilities = [
  {
    browserName: 'chrome',
  },
];

module.exports = { config };
