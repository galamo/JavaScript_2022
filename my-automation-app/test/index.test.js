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
            await new Promise(r => setTimeout(r, 2000));
            const mahaduraNew = await driver.wait(until.elementLocated(By.className('text-appear-animation tw-bg-side-menu-button tw-h-50px tw-leading-sub-menu fix-sub-menu-postion')));
            mahaduraNew.click()
            await new Promise(r => setTimeout(r, 2000));
            const breadCrumbs2 = await driver.wait(until.elementLocated(By.className('tw-text-nav-title-page')));
            const text2 = await breadCrumbs2.getText()
            expect(text2).to.be.equal('בית > מהדורה')

            const sideBarButton2 = await driver.wait(until.elementLocated(By.xpath('/html/body/app-root/div[2]/div[1]/gov-side-menu/div/div/div[5]/div/div')));
            sideBarButton2.click()

            const sideBarClickCodes = await driver.wait(until.elementLocated(By.xpath('/html/body/app-root/div[2]/div[1]/gov-side-menu/div/div/div[5]/div/div[2]/div[2]/div[2]/span/div')));
            sideBarClickCodes.click()

            await new Promise(r => setTimeout(r, 2000));
            const breadCrumbs3 = await driver.wait(until.elementLocated(By.className('tw-text-nav-title-page')));
            const text3 = await breadCrumbs3.getText()
            expect(text3).to.be.equal('ניהול הצמדות > מקדמי מחירים')
        } finally {
            setTimeout(async () => {
                await driver.quit();
            }, 3000);
        }
    })
    it("New Girsa Hatzmada", async () => {
        let driver = await new Builder().forBrowser(Browser.CHROME).build();
        try {
            await driver.get(budgetUrl);
            await new Promise(r => setTimeout(r, 2000));
            const buttonAdd = await driver.findElement(By.className("p-element btn-color p-button p-component ng-star-inserted"));
            buttonAdd.click()
            await new Promise(r => setTimeout(r, 2000));
            const elements = await driver.findElements(By.className('p-inputtext p-component p-element ng-untouched ng-dirty ng-invalid ng-star-inserted'))
            elements[0].sendKeys(`automation_girsa_${new Date().getTime()}`)
            elements[1].sendKeys("8")
            // const edit = await driver.findElement(By.className('p-button-icon pi pi-pencil'))
            // edit.click()
            await new Promise(r => setTimeout(r, 1000));
            const save = await driver.findElement(By.className('p-button-icon pi pi-check'))
            save.click();
            await new Promise(r => setTimeout(r, 1500));
            const close = await driver.findElement(By.className('p-toast-icon-close-icon pi pi-times'))
            const isElementExist = close !== null
            close.click()
            expect(isElementExist).to.be.equal(true)
            // await driver.wait(until.titleIs('webdriver - Google Search'), 1000);
        } finally {
            setTimeout(async () => {
                await driver.quit();
            }, 5000);
        }
    })
})

