const { Builder, Browser, By, Key, until } = require('selenium-webdriver');

(async function example() {
    let driver = await new Builder().forBrowser(Browser.CHROME).build();
    try {
        await driver.get('https://www.kikar.co.il/');
        const ele = await driver.findElement(By.className('mainart_special_title'));
        ele.click()
        console.log(ele)
        // await driver.wait(until.titleIs('webdriver - Google Search'), 1000);
    } finally {
        // await driver.quit();
    }
})();
