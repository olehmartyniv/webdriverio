const BasePage = require('./base.page');
const { Header } = require('../components');

class GoogleCloudPage extends BasePage {
  constructor() {
    super('https://cloud.google.com/');
    this.header = new Header();
  }
}

module.exports = GoogleCloudPage;
