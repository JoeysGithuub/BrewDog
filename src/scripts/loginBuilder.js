const $ = require("jquery")

const loginInfo = Object.create({}, {
    buildLoginInfo: {
        value: () => {
            const $formDiv = $("<div>").attr("id", "form")
            $("<input>").attr("id", "userName-input").attr("placeholder", "username").appendTo($formDiv)
            $("<input>").attr("id", "password-input").attr("placeholder", "password").appendTo($formDiv)
            $("<button>").attr("id", "add-btt").text("Sign In").appendTo($formDiv)
            $formDiv.appendTo($("#signBox"))
        }
    }
})

module.exports = loginInfo