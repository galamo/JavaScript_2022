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
