const $ = require("jquery")
const commentData = require("./CommentFavData")
const beerData = require("./beerView")
const beerPrint = require("./beerFavPrint")


$(document).on("click", ".addComment", function(event) {
  console.log("updates")
  var beerWrapper = $(event.target).closest('.beer-wrapper');
  var beerId = beerWrapper.data('beer-id');
  const commentInput = $('#fav_' + beerId + '_comment').val();
  const newComment = {
      comment: commentInput,
      beerId: beerId
  }


  console.log(newComment);
  commentData.postFavorite(newComment)
  .then(commentArray => {
    beerPrint.printComment(commentArray)
  });
})
//.then((favInfo) => {
    // $(".favComments-input").val("").attr("placeholder", "What Did You Think?")

//     return commentData.getAllFavorites()
// })
//.then(commentArray => {
//    beerPrint.printComment(commentArray)
// })
//  })

// commentData.postFavorite(commentInput)
// .then((favInfo) => {
//     $(".favComments-input").val("").attr("placeholder", "What Did You Think?");

//     return commentData.getAllFavorites()
// })
// .then(commentArray => {
//     beerPrint.printComment(commentArray)
// })
