const GoogleCloudPage = require('./gcloud.page');
const { SearchResults } = require('../components');

class ResultsPage extends GoogleCloudPage {
  constructor() {
    super();
    this.results = new SearchResults();
  }

  open(param) {
    return browser.url(`${this.url}s/results?q=${param}`);
  }
}

module.exports = ResultsPage;
