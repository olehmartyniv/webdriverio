class Page {
  open() {
    return browser.url(`https://pastebin.com/`);
  }

  async dismissBaners() {
    await $('#vi-smartbanner').waitForDisplayed();
    await $('span=OK, I Understand').click();
    await $('aria/Close Me').click();
    await browser.execute(() => {
      document.querySelector('#hideSlideBanner').click();
    });
  }
}

class NewPasteForm extends Page {
  get newPaste() {
    return $('#postform-text');
  }

  get syntaxHighlighting() {
    return $('#select2-postform-format-container');
  }

  get pasteExpiration() {
    return $('#select2-postform-expiration-container');
  }

  get pasteNameTitle() {
    return $('#postform-name');
  }

  get createNewPasteButton() {
    return $('//button[text()="Create New Paste"]');
  }

  async selectSyntaxHighlighting(syntax) {
    await this.syntaxHighlighting.click();
    const results = $('ul#select2-postform-format-results ul');
    await results.waitForDisplayed();
    await results.$(`//li[text()="${syntax}"]`).click();
  }

  async selectPasteExpiration(expirationTime) {
    await this.pasteExpiration.click();
    const results = $('#select2-postform-expiration-results');
    await results.waitForDisplayed();
    await results.$(`//li[text()="${expirationTime}"]`).click();
  }
}

class PastePage extends Page {
  get syntax() {
    return $('div.left > a.h_800');
  }

  get code() {
    return $('div.source > ol');
  }
}

describe('Bring It On', () => {
  it('should create a new paste', async () => {
    const testData = {
      code: 'git config --global user.name "New Sheriff in Town"\ngit reset $ (git commit-tree HEAD ^ {tree} -m "Legacy code")\ngit push origin master --force',
      syntax: 'HTML 5',
      expirationTime: '10 Minutes',
      title: 'how to gain dominance among developers',
    };

    const addPastePage = new NewPasteForm();
    await addPastePage.open();
    await addPastePage.dismissBaners();
    await addPastePage.newPaste.setValue(testData.code);
    await addPastePage.selectSyntaxHighlighting(testData.syntax);
    await addPastePage.selectPasteExpiration(testData.expirationTime);
    await addPastePage.pasteNameTitle.setValue(testData.title);
    await addPastePage.createNewPasteButton.click();

    const pastePage = new PastePage();
    await expect(browser).toHaveTitle(new RegExp(testData.title));
    await expect(pastePage.syntax).toHaveText(testData.syntax);
    await expect(pastePage.code).toHaveText(testData.code);
  });
});
