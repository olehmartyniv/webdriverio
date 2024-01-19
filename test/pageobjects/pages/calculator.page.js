const GoogleCloudPage = require('./gcloud.page');
const {
  ProductsTabs,
  ComputeEngine,
  EstimateTab,
  EmailForm,
} = require('../components');

class CalculatorPage extends GoogleCloudPage {
  constructor() {
    super();
    this.productsTabs = new ProductsTabs();
    this.computeEngineForm = new ComputeEngine();
    this.estimateTab = new EstimateTab();
    this.emailForm = new EmailForm();
  }

  open() {
    return browser.url(`${this.url}products/calculator-legacy`);
  }

  async switchToCalculatorFrame() {
    try {
      await $('>>>div#container svg').click();
    } catch (error) {
      console.error('Chat Modal already closed: ' + error.message);
    }

    const frameOuter = await browser.findElement(
      'css selector',
      'iframe[src*="https://cloud.google.com/frame/products/calculator-legacy/"]'
    );
    await browser.switchToFrame(frameOuter);
    const frameInner = await browser.findElement(
      'css selector',
      'iframe#myFrame'
    );
    await browser.switchToFrame(frameInner);
  }
}

module.exports = CalculatorPage;
