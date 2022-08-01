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
    favoritesMeals: ["Pasta", "Pizza", "ViznizHalla", "Pizza"],
    address: { city: "Ashdod", street: "elizer", num: 11 },
    age: 33,
    vacationsWithoutChildren: [
        { location: "sayshel", nights: 5 },
        { place: "eilat", nights: 4 },
        { destination: "usa", nights: 11 },
        { place: "odesa", nights: 3 },
    ]
}

function showUserDetails() {
    // Get the div content element from the DOM
    const userDetailsDiv = document.getElementById("userDetailsContent")
    userDetailsDiv.innerHTML = "";
    // const fullName = myUser.name + " " + myUser.lastName
    // Concat the name and last name and store in fullName
    const fullName = `${myUser.name} ${myUser.lastName}`
    // create element header
    const h1UserName = document.createElement("h1")
    // insert fullName into h1
    h1UserName.innerText = fullName
    // create element for age
    const h3 = document.createElement("h3")
    // insert age into h3
    h3.innerText = myUser.age;
    // create favorites header
    const h3FavoritesHeader = document.createElement("h3")
    h3FavoritesHeader.innerText = "Favorites";
    // draw the elements into the userDetailsDiv
    userDetailsDiv.append(h1UserName, h3, h3FavoritesHeader)
    // draw favorites 
    for (let index = 0; index < myUser.favoritesMeals.length; index++) {
        const currentMeal = myUser.favoritesMeals[index];
        const currentFavorite = document.createElement("li")
        currentFavorite.className = "list-group-item"
        currentFavorite.innerText = currentMeal
        currentFavorite.id = currentMeal
        const deleteButton = document.createElement("button")
        deleteButton.className = "btn btn-default"
        deleteButton.innerText = "🗑️"
        deleteButton.addEventListener("click", function () {
            console.log(this.parentElement.innerText)
            if (this.parentElement.id !== "Pizza") {
                this.parentElement.remove()
            }
        })
        currentFavorite.style.color = "lightblue"
        currentFavorite.append(deleteButton)
        userDetailsDiv.append(currentFavorite)
    }
    // create vacations header
    const h3VacationsHeader = document.createElement("h3")
    h3VacationsHeader.innerText = "Vacations";
    userDetailsDiv.append(h3VacationsHeader)
    // draw vacations 
    for (let index = 0; index < myUser.vacationsWithoutChildren.length; index++) {
        const vacation = myUser.vacationsWithoutChildren[index];
        const currentVacation = document.createElement("li")
        const keys = Object.keys(myUser.vacationsWithoutChildren[index])
        currentVacation.innerText = `${keys[0]}: ${vacation[keys[0]]} ${keys[1]}: ${vacation[keys[1]]}`
        currentVacation.style.color = "lightblue"
        userDetailsDiv.append(currentVacation)
    }



}