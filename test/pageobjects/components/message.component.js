const BaseComponent = require('./base.component');

class MessageComponent extends BaseComponent {
  constructor() {
    super('article[data-qa="message-page"]');
  }

  get estimatedMonthlyCost() {
    return this.rootEl.$('h2*=Estimated Monthly Cost');
  }
}

module.exports = MessageComponent;
