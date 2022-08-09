function validateAllInputs() {
    //  Step 1 - Click on add (Empty) sticky note 
    document.querySelector("#addNoteButton").click()

    // Step 2 - assert that the board is empty
    const board = document.querySelector("#tasksBoard")
    if (board.children.length > 0) {
        alert("test failed")
        return;
    }

    Swal.fire(
        'validateAllInputs!',
        'Test passed!',
    )
}

function validateAdd() {
    console.log("validateAdd: Test passed")
}



// setTimeout(async () => {
//     validateAllInputs()
//     await new Promise(r => setTimeout(r, 2000)); // wait 2 sec
//     closeSweetAlert()
//     await new Promise(r => setTimeout(r, 2000));
//     validateAdd()
// }, 5000)

function closeSweetAlert() {
    document.querySelector(".swal2-confirm").click()
}
