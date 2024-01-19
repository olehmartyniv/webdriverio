const BaseComponent = require('./base.component');

class EstimateTabComponent extends BaseComponent {
  constructor() {
    super('md-card-content#resultBlock');
  }

  get region() {
    return this.rootEl.$('div*=Region');
  }

  get commitmentTerm() {
    return this.rootEl.$('div*=Commitment term');
  }

  get provisioningModel() {
    return this.rootEl.$('div*=Provisioning model');
  }

  get instanceType() {
    return this.rootEl.$('//div[contains(text(), "Instance type")]');
  }

  get localSSD() {
    return this.rootEl.$('//div[contains(text(), "Local SSD")]');
  }

  get totalEstimatedCost() {
    return this.rootEl.$('div*=Total Estimated Cost');
  }

  get emailEstimateButton() {
    return this.rootEl.$('button[id="Email Estimate"]');
  }
}

module.exports = EstimateTabComponent;
