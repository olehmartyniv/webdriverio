const { Home, Results, Calculator, TempMail } = require('./pages');

/**
 *
 * @param {'home' | 'search' | 'calculator' | 'tempmail'} name
 * @returns {Home | Results | Calculator | TempMail}
 */
function page(name) {
  const items = {
    home: new Home(),
    search: new Results(),
    calculator: new Calculator(),
    tempmail: new TempMail(),
  };

  return items[name.toLocaleLowerCase()];
}

module.exports = page;
