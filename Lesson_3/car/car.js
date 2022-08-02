const myCar = {
    licensePlate: 1222334,
    type: { model: "Ford", subType: "Focus", Year: 2022 },
    km: 190000,
    color: "black",
    owners: [
        { name: "Dan Wada", id: 123, yearPurchase: 2022 },
        { name: "Shlomo Shamla", id: 456, yearPurchase: 2022 }
    ],
    price: 100000,
    insuranceCompany: { name: "Yashir", policyNumber: 11223344 },
    drive: function (km = 0) {
        this.km += km
    },
    sell: function (newOwner = {}) {

        if (typeof newOwner.id === 'number' &&
            typeof newOwner.name === 'string' &&
            typeof newOwner.yearPurchase === 'number') {
            this.owners.push(newOwner)
        } else {
            throw new Error("NewOwner parameters invalid")
        }

    },
    imageUrl: "https://www.evanshalshaw.com/-/media/evanshalshaw/ford/car-models/focus/2022-model/trim-images/new-focus-titanium-vignale-720x405px.ashx"
}

function showCar() {
    const contentDiv = document.getElementById("content")
    contentDiv.innerHTML = ""
    // creating LP header
    const h1LP = document.createElement("h1")
    h1LP.id = myCar.licensePlate
    h1LP.innerText = myCar.licensePlate

    // creating model
    const h2Model = document.createElement("h2")
    h2Model.innerText = myCar.type.model
    // h2Model.className = "inlineHeader"
    const h2ModelYear = document.createElement("h2")
    h2ModelYear.innerText = myCar.type.Year
    // h2ModelYear.className = "inlineHeader"
    const h2ModelSubType = document.createElement("h2")
    h2ModelSubType.innerText = myCar.type.subType
    // h2ModelSubType.className = "inlineHeader"

    // Creating image
    const image = document.createElement("img")
    image.height = 300
    image.width = 500;
    image.src = myCar.imageUrl
    image.style.display = "block"
    image.style.margin = "auto"

    const h3List = document.createElement("h3")
    h3List.innerText = "Owners"

    const ownersList = document.createElement("ul")
    ownersList.className = "list-group"
    ownersList.id = "ownersList"

    // Append LP header
    contentDiv.append(h1LP, h2Model, h2ModelSubType, h2ModelYear, image, h3List, ownersList)

    myCar.owners.forEach((owner) => {
        const ownerLi = document.createElement("li")
        ownerLi.className = "list-group-item"
        ownerLi.id = owner.id
        ownerLi.innerText = `id: ${owner.id} name: ${owner.name}  year:${owner.yearPurchase}`
        ownersList.append(ownerLi)
    })

}


function sellCar() {
    const buyerId = document.getElementById("buyerId")
    const buyerName = document.getElementById("buyerName")
    myCar.sell({ id: Number(buyerId.value), name: buyerName.value, yearPurchase: new Date().getFullYear() })
    showCar()
}

// save in localStorage
// window.localStorage.setItem("dorinCar", JSON.stringify(myCar))

