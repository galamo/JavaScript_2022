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