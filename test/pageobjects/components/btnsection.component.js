const BaseComponent = require('./base.component');

class ButtonsMenuComponent extends BaseComponent {
  constructor() {
    super('div[data-qa="menu"]');
  }

  get refreshBtn() {
    return this.rootEl.$('button[data-qa="refresh-button"]');
  }
}

module.exports = ButtonsMenuComponent;
