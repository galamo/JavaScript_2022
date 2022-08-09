// require('chromedriver') WITHOUT COMMENT!
const { expect } = require("chai")
const { Builder, Browser, By, Key, until } = require('selenium-webdriver');


// expect(true).to.be.equal(true)
const budgetUrl = "https://tst-mof-budget-ms-application.herokuapp.com/hatzmadot"
describe("Budget Application - Prerequisites", function () {
    it("Check Budget URL is QA env", function () {
        expect(budgetUrl).contain("tst")
    })
    it("Check Sum function", function () {
        expect(5 + 5).to.be.equal(10)
    })
})

describe("Budget Application - Hatzmadot", function () {
    it("Open Budget Site", async function () {
        let driver = await new Builder().forBrowser(Browser.CHROME).build();
        await driver.get(budgetUrl);
    })
})