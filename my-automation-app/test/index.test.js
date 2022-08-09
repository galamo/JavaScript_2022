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
        // Creating the Browser object
        let driver = await new Builder().forBrowser(Browser.CHROME).build();
        try {
            // Browsing the Budget
            await driver.get(budgetUrl);
            // Collect the breadCrumbs from the site
            const breadCrumbs = await driver.wait(until.elementLocated(By.className('tw-text-nav-title-page')));
            const text = await breadCrumbs.getText()
            expect(text).to.be.equal('ניהול הצמדות > ניהול גרסאות הצמדה')

            const sideBarButton = await driver.wait(until.elementLocated(By.className('fix-position-icon tw-w-42px tw-h-35px tw-pr-[7px] tw-select-none tw-z-999')));
            sideBarButton.click()

            const mahaduraNew = await driver.wait(until.elementLocated(By.className('text-appear-animation tw-bg-side-menu-button tw-h-50px tw-leading-sub-menu fix-sub-menu-postion')));
            mahaduraNew.click()

            const breadCrumbs2 = await driver.wait(until.elementLocated(By.className('tw-text-nav-title-page')));
            const text2 = await breadCrumbs2.getText()
            expect(text2).to.be.equal('בית > מהדורה')
        } finally {
            setTimeout(async () => {
                await driver.quit();
            }, 3000);
        }
    })
})

