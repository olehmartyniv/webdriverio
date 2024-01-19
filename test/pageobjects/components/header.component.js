const BaseComponent = require('./base.component');

class HeaderComponent extends BaseComponent {
  constructor() {
    super('//body/*/*[contains(local-name(),"header")]');
  }

  get searchForm() {
    return this.rootEl.$('form[action="https://cloud.google.com/s/results"]');
  }

  get searchInput() {
    return this.searchForm.$('input[aria-label="Search"]');
  }
}

module.exports = HeaderComponent;
