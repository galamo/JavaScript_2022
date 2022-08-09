const { expect } = require("chai")

// expect(true).to.be.equal(true)
const budgetUrl = "https://tst-mof-budget-ms-application.herokuapp.com/hatzmadot"
describe("Budget Application - Girst", function () {
    it("Check Budget URL is QA env", function () {
        expect(budgetUrl).contain("tst")
    })
})