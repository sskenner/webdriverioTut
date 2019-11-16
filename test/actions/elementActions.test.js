internetPage = require("../../pages/internet.page");
loginData = require("../../data/logindata");

describe("Test element actions", () => {
  it("should click element", () => {
    browser.url("/");
    internetPage.clickOnLink();
    expect(browser.getUrl()).equals("http://the-internet.herokuapp.com/abtest");
  });
  it("should get text", () => {
    browser.url("/");
    // it.only('should get text', () => {
    expect(internetPage.getSpecificElementText(1)).equals("A/B Testing");
  });
  it("should click checkbox", () => {
    internetPage.clickLink(6);
    internetPage.clickCheckbox(1);
    expect(internetPage.checkboxes(1).isSelected()).equals(true);
    
  });
  it("should uncheck checkbox", () => {
    internetPage.clickCheckbox(1);
    expect(internetPage.checkboxes(1).isSelected()).equals(false);
  });
  it("should enter username", () => {
    browser.url(`${browser.options.baseUrl}/login`);
    internetPage.enterUsername(loginData.userName);
    assert.equal(loginData.userName, internetPage.username.getValue());
  });
  it("should enter password", () => {
    internetPage.enterPassword(loginData.password);
    assert.equal(loginData.password, internetPage.password.getValue());
  });
  it("should clear value", () => {
    internetPage.username.click();
    internetPage.username.clearValue();
    assert.equal("", internetPage.username.getValue());
  });
  it.only("should sort due column in ascending order", () => {
    browser.url(`${browser.options.baseUrl}/tables`);
    let unSorted = internetPage.getColumnText();
    console.log(unSorted);
    let sorted = unSorted.sort(function(a, b){return a - b});
    console.log(sorted);
    let sortedClick = internetPage.getColumnTextClick();
    console.log(sortedClick);
    function areArraysEqualSets(a1, a2) {
      let superSet = {};
      for (let i = 0; i < a1.length; i++) {
        const e = a1[i] + typeof a1[i];
        superSet[e] = 1;
      }
    
      for (let i = 0; i < a2.length; i++) {
        const e = a2[i] + typeof a2[i];
        if (!superSet[e]) {
          return false;
        }
        superSet[e] = 2;
      }
    
      for (let e in superSet) {
        if (superSet[e] === 1) {
          return false;
        }
      }
    
      return true;
    }
    console.log(areArraysEqualSets(sorted, unSorted));
    expect(areArraysEqualSets(sortedClick, sorted)).equals(true, 'expected column due data to be sorted in ascending order');
  });
  it('should keep data in tact after sorting', () => {
    browser.url(`${browser.options.baseUrl}/tables`);
    // console.log(internetPage.getRowText());
    let unSorted = internetPage.getRowText();
    console.log(unSorted);
    let sorted = internetPage.getRowTextSorted();
    console.log(sorted);
    function areArraysEqualSets(a1, a2) {
      let superSet = {};
      for (let i = 0; i < a1.length; i++) {
        const e = a1[i] + typeof a1[i];
        superSet[e] = 1;
      }
    
      for (let i = 0; i < a2.length; i++) {
        const e = a2[i] + typeof a2[i];
        if (!superSet[e]) {
          return false;
        }
        superSet[e] = 2;
      }
    
      for (let e in superSet) {
        if (superSet[e] === 1) {
          return false;
        }
      }
    
      return true;
    }
    console.log(areArraysEqualSets(unSorted, sorted));
    expect(areArraysEqualSets(unSorted, sorted)).equals(true, 'expected data to be in tact after sort');
  });
});