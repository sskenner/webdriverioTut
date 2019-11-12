internetPage = require('../pages/internet.page.js')

describe('Wait For Exist', () => {
    it('should wait until the delete button exists', () => {
        browser.url(`${browser.options.baseUrl}add_remove_elements/`)
    // it.only('should wait until the delete button exists', () => {
    //     browser.url(`${browser.options.baseUrl}add_remove_elements/`)
        internetPage.clickExampleButton()
        internetPage.deleteButton(1).waitForExist()
        assert.equal(true, internetPage.deleteButton(1).isExisting())
        browser.pause(2000)
    });
    it('should wait for the delete button to not exist', () => {
    // it.skip('should wait for the delete button to not exist', () => {
        internetPage.clickDeleteButton(1)
        internetPage.deleteButton(1).waitForExist(500, true)
        assert.equal(false, internetPage.deleteButton(1).isExisting())
        browser.pause(2000)
    });
});