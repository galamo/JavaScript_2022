function testOwner(id, name, lp) {
    // Step 1 click on show car
    const button = document.getElementById("showCarButton");
    button.click();

    // Step 2 - assert the car LP
    const carLP = document.getElementById(1222334)
    if (carLP === null || carLP.innerText !== "1222334") {
        alert("test failed")
        return;
    }

    // Step 3 - insert inputs (name,id)
    const inputName = document.getElementById("buyerName")
    const inputId = document.getElementById("buyerId")
    inputName.value = "Dorin";
    inputId.value = "dorinId123456789";


    // Step 4 - click on sellCar
    const sellCarButton = document.getElementById("sellButton")
    sellCarButton.click()

    // Step 5 - assert new owner
    const listItem = document.getElementById("dorinId123456789")
    if (listItem === null || !listItem.innerText.includes("dorinId123456789")) {
        alert("test failed")
        return;
    }


    setTimeout(() => {
        alert("test passed!")
    }, 1000);


}
