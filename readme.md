# JavaScript

# Git
Download git
https://git-scm.com/downloads

# VScode

VScode
https://code.visualstudio.com/download

VScode online
https://vscode.dev/

## Clone the repo
1. install git
2. run in the command line `git clone https://github.com/galamo/JavaScript_2022.git`
3. run `cd <FolderName>`


## Automation scripts

https://beaire.com/en/london/landing/#eleventhSection
```javascript
function testSendMailForm(){
    const email = document.getElementById("checkoutEmail")
    email.scrollIntoView()
    email.value = "danwada@gmail.com"
    document.getElementById("CheckboxGroup1_0").checked = true
    document.getElementById("CheckboxGroup1_1").checked = true
    document.getElementById("btnSubmit").click()
    setTimeout(()=>{
        const data = document.getElementById("btnSubmit").innerText
        console.log(data)
        if(data.includes("SENDING")) alert("test passed")
    },2000) 
}

```



## Homework 25-7
- Create new Folder Name: `car`
- create inside the following file `car.html`
- create inside the following file `car.js`
- include `car.js` inside `car.html` file as script - see our examples
- in `car.js` Build an object that describe your private car
- example:
```javascript
const myCar = { } 

```
- fill the object with the properties
1. licensePlate - number
2. type - object ( subType, model, year)
3. km - number
4. color - string
5. owners - Array of objects `{name:string, id:number, yearPurchase:string}`
6. price
7. insuranceCompany - object `{companyName:string, insuranceNumber:string}`

- Create a Button that - `show car`
- when clicking the button the car will be presented in the HTML
- create another button `remove car` - clicking the button will remove the car from the HTML
- sell car - create a form that will support car sale.


# Automation Exercise
Create Automation script which test our car site
1. Click on the `showCar`
2. Assert the car id
3. Insert the input: `id` & `name`
4. Click on `sellCar`
5. Assert the new Owner row



# Subjects:
1. Javascript Automation scripts
2. Test Sticky notes
3. Async await - operations
4. nodejs - starting


# Commit your changes
- `git checkout -b newBranch_TODAY_DATE`
- `git add .`
- `git commit -m "WhatEverYouLike"`
- `git checkout master`
- `git pull`


## Help scripts
`document.querySelectorAll(".all_delete_buttons").forEach(b=>b.click())`


# HomeWork 
- Sticky note
- Write tests for the following scenarios:
1. validateInputs - validate all inputs - Done
2. Add sticky note ( remember to clean the board) + Delete 
3. Filter sticky notes - all, completed, today



# Automation scripts
1. Async operations
2. Install node.js - https://nodejs.org/en/download/
- Click on the LTS 
- Download and install
- Draw.io - explanation on js run
3. `Hello world` node.js example



run 
`npm install -g npm@6`

run 
`npm init -y`


- run `npm i selenium-webdriver`
- run `npm i chai`
- run `npm i mocha`

- run `npm i chromedriver`

- `require('chromedriver')`
5. test budget application




# using cypress - if time permits
`npm install cypress`
`npx cypress open`



## Selenium test - budget app
1.
```javascript
describe("Budget Application - Hatzmadot", function () {
    it("Open Budget Site", async function () {
        // Creating the Browser object
        let driver = await new Builder().forBrowser(Browser.CHROME).build();
        try {
            // Requesting the Web application URL ( GET )
            await driver.get(budgetUrl);
        } catch (ex) {
            setTimeout(async () => {
                await driver.quit();
            }, 5000);
        }
    })
})


```

2. 
```javascript


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



```


3.

```javascript
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


```