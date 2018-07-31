const $ = require("jquery")

const loginData = Object.create({}, {
    postUser: {
        value: (newUserObject) => {
            return $.ajax({
                url: "http://localhost:3000/users",
                method: "POST",
                data: newUserObject
            })
        }
    }
})

module.exports = loginData