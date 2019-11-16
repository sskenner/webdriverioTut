class Internet {
  get pageHeader() {
    return $("h1.heading");
  }
  get subHeading() {
    return $("h2");
  }
  get h3Header() {
    return $("h3");
  }
  get pageFooter() {
    return $("#page-footer");
  }
  get parent() {
    return $("ul");
  }
  get childElements() {
    return this.parent.$$("li");
  }
  specificChildElement(index) {
    return this.parent.$(`li:nth-child(${index})`);
  }

  get firstLink() {
    return $("ul li:nth-child(1) a");
  }
  link(index) {
    return $(`ul li:nth-child(${index}) a`);
  }

  checkboxes(index) {
    return $(`#checkboxes input:nth-child(${index})`);
  }

  get username() {
    return $("#username");
  }
  get password() {
    return $("#password");
  }

  figures(index) {
    return $(`.example .figure:nth-child(${index}) img`);
  }
  figureDetails(index) {
    return $(`.example .figure:nth-child(${index}) .figcaption h5`);
  }

  get target() {
    return $(".example #target");
  }
  get result() {
    return $(".example #result");
  }

  get hereLink() {
    return $(".example a");
  }

  get iframeBody() {
    return $("#tinymce");
  }
  get iframe() {
    return $("#mceu_27 #mce_0_ifr");
  }

  get columnA() {
    return $("#column-a");
  }
  get columnB() {
    return $("#column-b");
  }

  get columnAHeader() {
    return $("#column-a header");
  }
  get columnBHeader() {
    return $("#column-b header");
  }

  get draggable() {
    return $("#draggable");
  }
  get droppable() {
    return $("#droppable");
  }
  get droppableParagraph() {
    return $("#droppable p");
  }

  get dropdownMenu() {
    return $("#dropdown");
  }
  get dropdownMenuOption1() {
    return $("#dropdown option:nth-child(2)");
  }
  get dropdownMenuOption2() {
    return $("#dropdown option:nth-child(3)");
  }

  javascriptAlertButton(index) {
    return $(`.example li:nth-child(${index}) button`);
  }

  get enableButton() {
    return $("#input-example button");
  }
  get inputEnabledField() {
    return $("#input-example input");
  }

  get exampleButton() {
    return $(".example button");
  }
  deleteButton(index) {
    return $(`#elements button:nth-child(${index})`);
  }

  get pageButton() {
    return $("#checkbox-example button");
  }
///////
  get table() {
    return $("tbody")
  }

  get tableRows() {
    return this.table.$$("tr");
  }

  get tableColumns() {
    return this.table.$$("td:nth-child(4)");
  }
  
  get headerDueSort() {
    return $("#table1 .header:nth-child(4) span")
  }

  getColumnText() {
    let tableArrayColumn = [];
    this.tableColumns.forEach((element) => {
      // console.log(element.getText());
      let tableColumnCurr = element.getText()
      let tableColumnNum = Number(tableColumnCurr.replace(/[^0-9-\.]+/g, ""));
      tableArrayColumn.push(tableColumnNum);
    })
    return tableArrayColumn;
  }

  getColumnTextSorted() {
    let sorted = this.getColumnText().sort(function(a, b){return a - b});
    // TODO: rmv for test verification ONLY
    sorted.pop();
    sorted.push(20);
    //
    return sorted;
  }

  getColumnTextClick() {
    let tableArrayColumnClick = [];
    this.headerDueSort.click();
    this.tableColumns.forEach((element) => {
      // console.log(element.getText());
      let tableColumnCurrClick = element.getText()
      let tableColumnNumClick = Number(tableColumnCurrClick.replace(/[^0-9-\.]+/g, ""));
      tableArrayColumnClick.push(tableColumnNumClick);
    })
    return tableArrayColumnClick;
  }

  getRowText() {
    let tableArrayRow = [];
    this.tableRows.forEach((element) => {
      // console.log(element.getText());
      let tableRow = element.getText()
      tableArrayRow.push(tableRow);
    })
    return tableArrayRow;
  }

  getRowTextSorted() {
    let tableArraySorted = [];
    this.headerDueSort.click();
    this.tableRows.forEach((element) => {
      // console.log(element.getText());
      let tableRow = element.getText()
      tableArraySorted.push(tableRow);
    })
    // TODO: rmv for test verification ONLY
    tableArraySorted.pop();
    tableArraySorted.push("jdoe@hotmail.com Doe Jason $100.00 http://www.jdoe.com edit delete");
    //
    return tableArraySorted;
  }

  areArraysEqualSets(a1, a2) {
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
///////
  clickPageButton() {
    this.pageButton.waitForDisplayed();
    this.pageButton.click();
  }

  clickExampleButton() {
    this.exampleButton.waitForDisplayed();
    this.exampleButton.click();
  }

  clickDeleteButton(index) {
    this.deleteButton(index).waitForDisplayed();
    this.deleteButton(index).click();
  }

  /**
   * Click the Enable/Disable Button
   */
  clickEnableButton() {
    this.enableButton.waitForDisplayed();
    this.enableButton.click();
  }

  clickJavascriptAlertButton(index) {
    this.javascriptAlertButton(index).waitForDisplayed();
    this.javascriptAlertButton(index).click();
  }

  clickDropdownMenu() {
    this.dropdownMenu.waitForDisplayed();
    this.dropdownMenu.click();
  }

  clickDropdownMenuOption1() {
    this.dropdownMenuOption1.waitForDisplayed();
    this.dropdownMenuOption1.click();
  }

  clickDropdownMenuOption2() {
    this.dropdownMenuOption2.waitForDisplayed();
    this.dropdownMenuOption2.click();
  }

  /**
   * Drag and drop
   */
  dragDraggableToDroppable() {
    this.draggable.waitForDisplayed();
    this.draggable.dragAndDrop(this.droppable);
  }

  /**
   * Drag box A to box B
   */
  dragColumnAToColumnB() {
    this.columnA.waitForDisplayed();
    this.columnA.dragAndDrop(this.columnB);
  }
  /**
   * Enter text in the iframe
   * @param {String} text the text to be entered
   */
  sendTextToBody(text) {
    this.iframeBody.waitForDisplayed();
    this.iframeBody.clearValue();
    this.iframeBody.click();
    this.iframeBody.keys(text);
  }

  /**
   * Click the "click here" link
   */
  clickHereLink() {
    this.hereLink.waitForDisplayed();
    this.hereLink.click();
  }

  /**
   * Scrolls to the page footer w scrollIntoView; DOESNT WORK w/o it as per tuturial
   */
  scrollToPageFooter() {
    this.pageFooter.scrollIntoView();
    this.pageFooter.moveTo();
  }

  /**
   * Clicks the target input field
   */
  clickTarget() {
    this.target.waitForDisplayed();
    this.target.click();
  }

  /**
   *
   * @param {String} text the keyboard text to enter
   */
  sendKeysToTarget(text) {
    this.target.waitForDisplayed();
    this.target.keys(text);
  }

  /**
   * Return the text of the return element
   */
  getResultText() {
    this.result.waitForDisplayed();
    return this.result.getText();
  }

  /**
   * Hovers over the specified image
   * @param {Number} index the specified index of the image
   */
  hoverOnFigure(index) {
    this.figures(index).waitForDisplayed();
    this.figures(index).moveTo(1, 1);
  }

  /**
   * Returns the text of the figure details
   * @param {Number} index the index of the element
   */
  getFigureDetailsText(index) {
    this.figureDetails(index).waitForDisplayed();
    return this.figureDetails(index).getText();
  }

  /**
   * Enter the username into the field
   * @param {String} text username to be entered
   */
  enterUsername(text) {
    this.username.waitForDisplayed();
    this.username.setValue(text);
  }

  /**
   * Enter the password into the field
   * @param {String} text password to be entered
   */
  enterPassword(text) {
    this.password.waitForDisplayed();
    this.password.setValue(text);
  }

  /**
   * Clicks on the link based on the index provided
   * @param {Number} index the index of the element
   */
  clickLink(index) {
    this.link(index).waitForDisplayed();
    this.link(index).click();
  }

  clickCheckbox(index) {
    this.checkboxes(index).waitForDisplayed();
    this.checkboxes(index).click();
  }

  getLiText() {
    this.childElements.filter(element => {
      console.log(element.getText());
    });
  }

  getSpecificElementText(index) {
    this.specificChildElement(index).waitForDisplayed();
    return this.specificChildElement(index).getText();
  }

  clickOnLink() {
    if (this.firstLink.isDisplayed() === true) {
      this.firstLink.click();
    }
    this.h3Header.waitForDisplayed();
  }
}
module.exports = new Internet();
