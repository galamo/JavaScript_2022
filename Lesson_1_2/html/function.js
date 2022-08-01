const globalPassword = 999999;
function login(userName, password = 999991) {
    console.log(`Hello ${userName} , your
     password is: ${password} , 
     global password: ${globalPassword}`)
    // console.log("Hello " + userName + " , how are you?") // old approach
}
console.log("before function execution")

login("Shlomo@gmail.com", 12234434)
login("Dorin@gmail.com", 1223444)
login("ruth@gmail.com", 122334)
login("neomi@gmail.com")
console.log("after function execution")