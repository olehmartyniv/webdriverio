const BaseComponent = require('./base.component');

class SearchResultsComponent extends BaseComponent {
  constructor() {
    super('[name="results"]');
  }

  getResult(search) {
    return this.rootEl.$(`=${search}`);
  }
}

module.exports = SearchResultsComponent;
