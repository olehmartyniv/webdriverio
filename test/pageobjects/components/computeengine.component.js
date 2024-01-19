const BaseComponent = require('./base.component');

class ComputeEngineFormComponent extends BaseComponent {
  constructor() {
    super('form[aria-label="ComputeEngineForm"]');
  }

  async selectDropdownOption(input, option) {
    await this.rootEl
      .$(`//label[normalize-space()="${input}"]/following-sibling::md-select`)
      .click();
    await $(`//body/div//md-option/div[normalize-space()="${option}"]`).click();
  }

  get numberOfInstancesInput() {
    return this.rootEl.$('input[name="quantity"]');
  }

  get addGPUsCheckbox() {
    return this.rootEl.$('md-checkbox[aria-label="Add GPUs"]');
  }

  get addToEstimateButton() {
    return this.rootEl.$('button*=Add to Estimate');
  }
}

module.exports = ComputeEngineFormComponent;
