const $ = require("jquery")
const loginData = require("./loginHandler")

let userID = ""

$("#signBox").on("click", "#add-btt", () => {
    const userNameInput = $("#userName-input").val()
    const newUser = {
        name: userNameInput
    } 
    console.log(loginData)

    loginData.postUser(newUser)
        .then((userInfo) => {
            console.log(userInfo)
            $("#logIn-input").val("").attr("placeholder", "Username")
            return loginData.getAllUsers()

    })
})