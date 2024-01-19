const BaseComponent = require('./base.component');

class EmailFormComponent extends BaseComponent {
  constructor() {
    super('form[name="emailForm"]');
  }

  get emailInput() {
    return this.rootEl.$('input[type="email"]');
  }

  get sendEmailButton() {
    return this.rootEl.$('button*=Send Email');
  }
}

module.exports = EmailFormComponent;
