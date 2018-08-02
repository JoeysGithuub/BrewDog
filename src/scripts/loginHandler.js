const $ = require("jquery")

const loginData = Object.create({}, {
    postUser: {
        value: (newUser) => {
            return $.ajax({
                url: "http://localhost:3000/users",
                method: "POST",
                data: {
                    name: newUser.name,
                    userName: newUser.userName,
                    password: newUser.password
                }
            })
        }
    },
    getAllUsers: {
        value: () => {
            return $.ajax({
                url: "http://localhost:3000/users",
                method: "GET"
            })
        }
    }
})

module.exports = loginData