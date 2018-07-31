const $ = require("jquery")
const loginData = require("./loginHandler")

let userID = ""

$("#signBox").on("click", "#logIn-butt", () => {
    const loginInput = $("#logIn-input").val()
    const newUser = {
        name: loginInput
    } 
    console.log(loginData)
})