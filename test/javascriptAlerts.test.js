internetPage = require('../pages/internet.page.js')

describe('Javascript Alerts', () => {
    it('should get text of alert', () => {
        browser.url(`${browser.options.baseUrl}javascript_alerts`)
        internetPage.clickJavascriptAlertButton(1)
        assert.equal('I am a JS Alert', browser.getAlertText())
        console.log(browser.getAlertText())
        browser.pause(1000)
    });
    it('should accept alert', () => {
        browser.acceptAlert()
        assert.equal('You successfuly clicked an alert', internetPage.getResultText())
        // browser.pause(1000)
    });
    it('should dismiss alert', () => {
        internetPage.clickJavascriptAlertButton(2)
        browser.dismissAlert()
        assert.equal('You clicked: Cancel', internetPage.getResultText())
        // browser.pause(1000)
    });
    it('should send text to the alert', () => {
        internetPage.clickJavascriptAlertButton(3)
        browser.sendAlertText('This is some text')
        browser.acceptAlert()
        assert.equal('You entered: This is some text', internetPage.getResultText())
        browser.pause(3000)
    });
});