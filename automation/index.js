const { Builder, Browser, By, Key, until } = require('selenium-webdriver');

(async function example() {
    let driver = await new Builder().forBrowser(Browser.CHROME).build();
    try {
        await driver.get('https://gemelnet.cma.gov.il/views/dafmakdim.aspx');
        await new Promise(r => setTimeout(r, 3000));
        const buttonKnisa = await driver.findElement(By.id('knisa'));
        buttonKnisa.click()
        await new Promise(r => setTimeout(r, 3000));
        // await driver.findElement("//option[@value='0000']").click()
        const btnAdd = await driver.findElement(By.id('btnAdd'));
        btnAdd.click()



        // await driver.wait(until.titleIs('webdriver - Google Search'), 1000);
    } finally {
        setTimeout(async () => {
            await driver.quit();
        }, 5000);
    }
})();
