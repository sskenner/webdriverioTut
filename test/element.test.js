describe("Interacting with elements", function(){
  it("Get text for element", () => {
    browser.url('/')
    let text = $("//*[@id='page-footer']").getText()
    console.log(text)
  })
})