const BasePage = require('./base.page');
const { MailBox, ButtonsMenu, Inbox, Message } = require('../components');

class TempMailPage extends BasePage {
  constructor() {
    super('https://temp-mail.io/');
    this.mailbox = new MailBox();
    this.buttonsMenu = new ButtonsMenu();
    this.inbox = new Inbox();
    this.message = new Message();
  }

  async waitForEmail() {
    await this.inbox.emailList.waitUntil(
      async () => {
        await this.buttonsMenu.refreshBtn.click();
        return await this.inbox.emailList.isDisplayed();
      },
      {
        timeout: 10000,
        interval: 2500,
        timeoutMsg: 'email message not received',
      }
    );
  }
}

module.exports = TempMailPage;
