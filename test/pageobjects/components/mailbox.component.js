const BaseComponent = require('./base.component');

class MailBoxComponent extends BaseComponent {
  constructor() {
    super('header');
  }

  get emailInput() {
    return this.rootEl.$('input[data-qa="current-email"]');
  }
}

module.exports = MailBoxComponent;
