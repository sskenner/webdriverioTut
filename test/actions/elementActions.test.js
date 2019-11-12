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
});
