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
            // Requesting the Web application URL ( GET )
            await driver.get(budgetUrl);
            // Collect the breadCrumbs from the site
            await new Promise(r => setTimeout(r, 3000));
            const breadCrumbs = await driver.findElement(By.className('tw-text-nav-title-page'));
            // Extract the text from the breadCrumbs element
            const text = await breadCrumbs.getText()
            expect(text).to.be.equal('ניהול הצמדות > ניהול גרסאות הצמדה')

            const sideBarButton = await driver.findElement(By.className('fix-position-icon tw-w-42px tw-h-35px tw-pr-[7px] tw-select-none tw-z-999'));
            // Assert the string to the correct header
            sideBarButton.click()
            await new Promise(r => setTimeout(r, 3000));
            const mahaduraNew = await driver.findElement(By.className('text-appear-animation tw-bg-side-menu-button tw-h-50px tw-leading-sub-menu fix-sub-menu-postion'))
            mahaduraNew.click()
            await new Promise(r => setTimeout(r, 3000));
            const breadCrumbs2 = await driver.findElement(By.className('tw-text-nav-title-page'));
            // Extract the text from the breadCrumbs element
            const text2 = await breadCrumbs2.getText()
            expect(text2).to.be.equal('בית > מהדורה')
        } finally {
            setTimeout(async () => {
                await driver.quit();
            }, 10000);
        }
    })
})

