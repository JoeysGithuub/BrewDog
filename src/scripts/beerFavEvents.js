const $ = require("jquery")
// const commentData = require("./CommentFavData")
const beerData = require("./beerView")
const beerPrint = require("./beerFavPrint")
const beerFavData = require("./beerFavDatabase")

$(document).on("click", ".addComment", function(event) {
  console.log("updates")
  const beerWrapper = $(event.target).closest('.beer-wrapper');
  const beerId = beerWrapper.data('beer-id');
  const commentInput = $('#fav_' + beerId + '_comment').val();
  const comment = {
      comment: commentInput,
      beerId: beerId
  }
  console.log($('#fav_' + beerId + '_comment'));
  // debugger
  beerFavData.postFavorite(comment)
  .then(comment => {
    console.log("comment", comment)
    let thing = `${beerId}favBeerComment`
    let beerCard = ($(`#${thing}`))
    console.log("beerCard", beerCard)
    let jqueryComment = beerPrint.printComment(comment)
    console.log("fuck")
    console.log ("jquery Comment", jqueryComment)
    // jqueryComment.prepend(beerCard)
    beerCard.prepend(jqueryComment)
    // beerPrint.printComment(comment).appendTo($(`#${thing}`))
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
