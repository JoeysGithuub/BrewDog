const $ = require("jquery")
const loginData = require("./loginHandler")

let userID = ""

// $("#signBox").on("click", "#but_reg", () => {
    $("#but_reg").click(function() {
        console.log("hell")
    const nameInput = $("#name-input").val()
    const userNameInput = $("#userName-input").val()
    const password = $("#password-input").val()
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