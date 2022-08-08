const { expect } = require("chai")
const { Builder, Browser, By, Key, until, escapeCss } = require('selenium-webdriver');

const budgetUrl = "https://tst-mof-budget-ms-application.herokuapp.com/hatzmadot"
describe("Budget application - Girsa", () => {
    // it("Test adding Girsa", async () => {
    //     let driver = await new Builder().forBrowser(Browser.CHROME).build();
    //     try {
    //         await driver.get(budgetUrl);
    //         await new Promise(r => setTimeout(r, 3000));
    //         // const buttonAdd = await driver.findElement(By.className("p-element btn-color p-button p-component ng-star-inserted"));
    //         // buttonAdd.click()
    //         // await new Promise(r => setTimeout(r, 3000));
    //         // const elements = await driver.findElements(By.className('p-inputtext p-component p-element ng-untouched ng-dirty ng-invalid ng-star-inserted'))
    //         // elements[0].sendKeys("Name")
    //         // elements[1].sendKeys("1")
    //         const edit = await driver.findElement(By.className('p-button-icon pi pi-pencil'))
    //         edit.click()
    //         await new Promise(r => setTimeout(r, 1000));
    //         const save = await driver.findElement(By.className('p-button-icon pi pi-check'))
    //         save.click();
    //         await new Promise(r => setTimeout(r, 1500));
    //         const close = await driver.findElement(By.className('p-toast-icon-close-icon pi pi-times'))
    //         close.click()


    //         expect(true).to.be.equal(true)
    //         // await driver.wait(until.titleIs('webdriver - Google Search'), 1000);
    //     } finally {
    //         setTimeout(async () => {
    //             await driver.quit();
    //         }, 5000);
    //     }
    // })

    it("Open Girst site", async () => {
        let driver = await new Builder().forBrowser(Browser.CHROME).build();
        try {
            await driver.get(budgetUrl);
            // await new Promise(r => setTimeout(r, 3000));
            // // const target = 
            // const edit = await driver.findElement(By.className('tw-text-nav-title-page')).then((el) => {
            //     const text = el.getText()
            //     console.log(text)
            // })
            // await driver.wait(until.elementLocated(By.className('tw-text-nav-title-page')));
            // const condition = await until.elementIsVisible(driver.findElement())
            const el = await driver.findElement(By.className('tw-text-nav-title-page'));
            const text = await el.getText()
            console.log(text)
            expect(text).to.be.equal('ניהול הצמדות > ניהול גרסאות הצמדה')
            // await driver.wait(until.titleIs('webdriver - Google Search'), 1000);
        } finally {
            setTimeout(async () => {
                await driver.quit();
            }, 5000);
        }
    })

})