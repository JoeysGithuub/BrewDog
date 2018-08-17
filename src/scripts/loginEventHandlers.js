const $ = require("jquery")
const loginData = require("./loginHandler")
console.log("hello")
let userID = ""

// $("#signBox").on("click", "#but_reg", () => {
    $("#secSign").on("click", function() {
        console.log("hell")
    const nameInput = $("#nam").val()
    const userNameInput = $("#ema").val()
    const password = $("#pass").val()
    const newUser = {
        name: nameInput,
        userName: userNameInput,
        password: password
    } 
    console.log(newUser)

    loginData.postUser(newUser)
        .then((userInfo) => {
            // console.log(userInfo)
            $("#logIn-input").val("").attr("placeholder", "Username")
            return loginData.getAllUsers()

    })
})

$("#secLog").on("click", function() {
    console.log("hell")
const emailInput = $("#em").val()
const password = $("#pa").val()
const newUser = {
    email: emailInput,
    password: password
} 
console.log(newUser)

loginData.postUser(newUser)
    .then((userInfo) => {
        // console.log(userInfo)
        $("#logIn-input").val("").attr("placeholder", "Username")
        return loginData.getAllUsers()
})
document.querySelector('[data-target]').click();
})



