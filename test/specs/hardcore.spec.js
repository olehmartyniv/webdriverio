const page = require('../pageobjects');
const testData = require('../data/pricingCalculatorData');

describe('Hardcore', () => {
  it('should search products', async () => {
    await page('home').open();
    await page('home').header.searchForm.click();
    await page('home').header.searchInput.setValue(
      'Google Cloud Pricing Calculator Legacy'
    );
    await browser.keys('Enter');
    await expect(browser).toHaveTitle(
      /Search results for "Google Cloud Pricing Calculator Legacy"/
    );
  });

  it('should display search results', async () => {
    await expect(page('search').results.rootEl).toBeDisplayed();
    await page('search')
      .results.getResult('Google Cloud Pricing Calculator')
      .click();
    await expect(browser).toHaveTitle(/Google Cloud Pricing Calculator/);
  });

  it('should fill from', async () => {
    const calculatorPage = page('calculator');
    await calculatorPage.switchToCalculatorFrame();
    await calculatorPage.productsTabs.selectProduct('Compute Engine');
    await calculatorPage.computeEngineForm.numberOfInstancesInput.setValue(4);
    await calculatorPage.computeEngineForm.selectDropdownOption(
      testData.computeEngine.operatingSystem[0],
      testData.computeEngine.operatingSystem[1]
    );
    await calculatorPage.computeEngineForm.selectDropdownOption(
      testData.computeEngine.provisioningModel[0],
      testData.computeEngine.provisioningModel[1]
    );
    await calculatorPage.computeEngineForm.selectDropdownOption(
      testData.computeEngine.series[0],
      testData.computeEngine.series[1]
    );
    await calculatorPage.computeEngineForm.selectDropdownOption(
      testData.computeEngine.machineType[0],
      testData.computeEngine.machineType[1]
    );
    await calculatorPage.computeEngineForm.addGPUsCheckbox.click();
    await calculatorPage.computeEngineForm.selectDropdownOption(
      testData.computeEngine.gpuType[0],
      testData.computeEngine.gpuType[1]
    );
    await calculatorPage.computeEngineForm.selectDropdownOption(
      testData.computeEngine.gpuNumber[0],
      testData.computeEngine.gpuNumber[1]
    );
    await calculatorPage.computeEngineForm.selectDropdownOption(
      testData.computeEngine.localSDD[0],
      testData.computeEngine.localSDD[1]
    );
    await calculatorPage.computeEngineForm.selectDropdownOption(
      testData.computeEngine.region[0],
      testData.computeEngine.region[1]
    );
    await calculatorPage.computeEngineForm.selectDropdownOption(
      testData.computeEngine.term[0],
      testData.computeEngine.term[1]
    );
    await calculatorPage.computeEngineForm.addToEstimateButton.click();
    await expect(calculatorPage.estimateTab.totalEstimatedCost).toBeDisplayed();
  });

  it('should estimate cost', async () => {
    const calculatorPage = page('calculator');
    await expect(calculatorPage.estimateTab.region).toHaveText(
      new RegExp(testData.estimateCost.region)
    );
    await expect(calculatorPage.estimateTab.commitmentTerm).toHaveText(
      new RegExp(testData.estimateCost.termnew)
    );
    await expect(calculatorPage.estimateTab.provisioningModel).toHaveText(
      new RegExp(testData.estimateCost.provisioningModel)
    );
    await expect(calculatorPage.estimateTab.instanceType).toHaveText(
      new RegExp(testData.estimateCost.machineType)
    );
    await expect(calculatorPage.estimateTab.localSSD).toHaveText(
      new RegExp(testData.estimateCost.localSSD)
    );
    await expect(calculatorPage.estimateTab.totalEstimatedCost).toHaveText(
      new RegExp(testData.estimateCost.cost)
    );
  });

  it('should email estimate', async () => {
    const tempmailPage = page('tempmail');
    const calculatorPage = page('calculator');
    await browser.newWindow('');
    await tempmailPage.open();
    const mailAddress = await tempmailPage.mailbox.emailInput.getValue();
    await expect(tempmailPage.isEmailListNotEmpty).toBeFalsy();
    const handles = await browser.getWindowHandles();

    await browser.switchToWindow(handles[0]);
    await calculatorPage.switchToCalculatorFrame();
    await calculatorPage.estimateTab.emailEstimateButton.click();
    await expect(calculatorPage.emailForm.rootEl).toBeDisplayed();
    await calculatorPage.emailForm.emailInput.setValue(mailAddress);
    await calculatorPage.emailForm.sendEmailButton.click();

    await browser.switchToWindow(handles[1]);
    await tempmailPage.waitForEmail();
    await expect(tempmailPage.inbox.isEmailListNotEmpty).toBeTruthy();
    await tempmailPage.inbox.getLatestMessage().click();
    await expect(tempmailPage.message.estimatedMonthlyCost).toHaveText(
      new RegExp(testData.estimateCost.cost)
    );
  });
});
