// array
// object
// function sendMail(user) {
//     console.log("Mail Sent!", user)
// }
// arrow function vs es5 function
const sendMail = (user) => {
    console.log("Mail Sent!", user)
}


const colors = ["red", "green", "pink", "blue"]
console.log(colors.length)
colors.push("purple")
console.log(colors.length)
colors.splice(1, 1)
console.log(colors)

function addColor() {
    colors.push(`color_${Math.random() * 99}`)
    console.log(colors)
}

const users = ["user1@gmail.com", "user2@gmail.com", "yocheved@gmail.com"]
const newUsers = [];
for (let index = 0; index < users.length; index++) {
    const newUser = getReplacedEmail(users[index])
    newUsers.push(newUser)
    console.log(newUser)
    sendMail(newUser)
}

function getReplacedEmail(email) {
    return email.replace("gmail", "gov")
}

users.forEach(function (item) { console.log(item) })


// Object example
const myUser = {
    name: "Gal",
    lastName: "Amouyal",
    favoritesMeals: ["Pasta", "Pizza", "ViznizHalla"],
    address: { city: "Ashdod", street: "elizer", num: 11 },
    age: 33,
    vacationsWithoutChildren: [
        { location: "sayshel", nights: 5 },
        { location: "eilat", nights: 4 },
        { location: "usa", nights: 11 },
        { location: "odesa", nights: 3 },
    ]
}

function showUserDetails() {
    console.log(myUser)
}