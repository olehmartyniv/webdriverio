const BaseComponent = require('./base.component');

class InboxComponent extends BaseComponent {
  constructor() {
    super('aside[data-qa="sidebar"]');
  }

  get emailList() {
    return this.rootEl.$('aside[data-qa="sidebar"] ul');
  }

  async isEmailListNotEmpty() {
    return await this.emailList.isDisplayed();
  }

  getLatestMessage() {
    return this.emailList.$$('li[data-qa="message"]')[0];
  }
}

module.exports = InboxComponent;
