const $ = require("jquery")

$(document).ready(function () {
    $("#signUp_btn").click(function () {
        $("#main").animate({ left: "22.5%" }, 400)
        $("#main").animate({ left: "30%" }, 500)
        $("#loginForm").css("visibility", "hidden")
        $("#loginForm").animate({ left: "25%" }, 400)

        $("#signUpForm").animate({ left: "17%" }, 400)
        $("#signUpForm").animate({ left: "30%" }, 500)
        $("#signUpForm").css("visibility", "visible")
    })

    $("#login_btn").click(function () {
        $("#main").animate({ left: "77.5%" }, 400)
        $("#main").animate({ left: "70%" }, 500)
        $("#signUpForm").css("visibility", "hidden")
        $("#signUpForm").animate({ left: "75%" }, 400)
        $("#loginForm").animate({ left: "83.5%" }, 400)
        $("#loginForm").animate({ left: "70%" }, 500)
        $("#loginForm").css("visibility", "visible")
    })
})