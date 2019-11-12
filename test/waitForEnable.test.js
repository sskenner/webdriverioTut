internetPage = require("../pages/internet.page.js");

describe("Wait for Enabled", () => {
  it("should wait for the input field to be enabled", () => {
    browser.url(`${browser.options.baseUrl}dynamic_controls`);
    internetPage.clickEnableButton();
    internetPage.inputEnabledField.waitForEnabled(4000);
    assert.equal(true, internetPage.inputEnabledField.isEnabled());
    browser.pause(4000);
    // browser.debug()
  });
  it("should wait for the input field to be disabled", () => {
    internetPage.clickEnableButton();
    internetPage.inputEnabledField.waitForEnabled(4000, true);
    assert.equal(false, internetPage.inputEnabledField.isEnabled());
  });
});
