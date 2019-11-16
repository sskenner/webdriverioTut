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
    // TODO: rmv for test verification ONLY
    let unSorted = internetPage.getColumnText();
    console.log(unSorted);
    //
    let sorted = internetPage.getColumnTextSorted();
    console.log(sorted);
    let sortedClick = internetPage.getColumnTextClick();
    // TODO: rmv for test verification ONLY
    console.log(sortedClick);
    console.log(internetPage.areArraysEqualSets(sortedClick, sorted));
    //
    expect(internetPage.areArraysEqualSets(sortedClick, sorted)).equals(true, 'expected column due data to be sorted in ascending order');
  });
  it('should keep data in tact after sorting', () => {
    browser.url(`${browser.options.baseUrl}/tables`);
    // console.log(internetPage.getRowText());
    let unSorted = internetPage.getRowText();
    console.log(unSorted);
    let sorted = internetPage.getRowTextSorted();
    // TODO: rmv for test verification ONLY
    console.log(sorted);
    console.log(internetPage.areArraysEqualSets(unSorted, sorted));
    //
    expect(internetPage.areArraysEqualSets(unSorted, sorted)).equals(true, 'expected data to be in tact after sort');
  });
});