const $ = require("jquery")

const commentPrint = Object.create({}, {
    printComment: {
        value: function (comment) {
            // $(".favorites").empty()
            console.log("printCommentRUn", comment)
            const $commentDiv = $("<div>").attr("id", comment.id)
            $("<p>").text(`${comment.comment}`).appendTo($commentDiv)
            console.log("printCommentFinished", $commentDiv)
            return $commentDiv
        }
    }
})

module.exports = commentPrint