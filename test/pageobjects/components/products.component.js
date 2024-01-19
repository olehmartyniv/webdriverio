const BaseComponent = require('./base.component');

class ProductsTabsComponent extends BaseComponent {
  constructor() {
    super('md-card-content#mainForm');
  }

  async selectProduct(name) {
    await this.rootEl.$(`span=${name}`).click();
  }
}

module.exports = ProductsTabsComponent;
