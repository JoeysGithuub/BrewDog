const $ = require("jquery")

const commentPrint = Object.create({}, {
    printComment: {
        value: function(commentArray) {
            $(".favorites").empty()
            commentArray.forEach((comment) => {
                const $commentDiv = $("<div>").attr("id", comment.id)
                $("<p>").text(comment.details).appendTo($commentDiv)
                $($commentDiv).appendTo(".favorites")
            })
        }
    }
})

module.exports = commentPrint