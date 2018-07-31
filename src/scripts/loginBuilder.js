const $ = require("jquery")

const signUpForm = Object.create({}, {
    buildForm: {
        value: () => {
            const $signDiv = $("<div>").attr("id", "sign")
            $("<input>").attr("id", "logIn-input").attr("placeholder", "Username").appendTo($signDiv)
            $("<button>").attr("id", "logIn-butt").text("Sign In").appendTo($signDiv)
            $signDiv.appendTo($("#signBox"))
        }
    }
})

module.exports = signUpForm