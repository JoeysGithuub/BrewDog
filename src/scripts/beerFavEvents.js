const $ = require("jquery")
const beerFavData = require("./beerFavData")
const beerData = require("./beerView")
const beerPrint = require("./beerFavPrint")


// $(document).on("click", ".addComment", function() {
//   console.log("add");
// })

// $(document).on("click", ".removeFavorite", function() {
//   console.log("delete");
// })

$(document).on("click", ".addComment", function() {
  console.log("updates")
  const commentInput = $(".favComments-input").val();
  const beerIdInput = $(".favBeerId").val();
  const newComment = {
      comment: commentInput,
      beerId: beerIdInput
  }


  console.log(newComment);
  beerFavData.postFavorite(newComment)
.then((favInfo) => {
    // $(".favComments-input").val("").attr("placeholder", "What Did You Think?")

//     return beerFavData.getAllFavorites()
// })
// .then(commentArray => {
//     beerPrint.printComment(commentArray)
// })

})

// beerFavData.postFavorite(commentInput)
// .then((favInfo) => {
//     $(".favComments-input").val("").attr("placeholder", "What Did You Think?");

//     return beerFavData.getAllFavorites()
// })
// .then(commentArray => {
//     beerPrint.printComment(commentArray)
// })



//     const beerImg = $(".beer__img").val();
//     const newFavorite = {
//       favorite: beerImg
//     }
//       // userID: userData()
  
//     // console.log("thi is the one", userData())
//     beerFavData.postFavorite(newFavorite)
//     .then((favInfo) => {
//       console.log("favInfo",favInfo)
//       // $("#taskName-input").val("").attr("placeholder", "Task Name")
//       // $("#taskDetails-input").vale("").attr("placeholder", "Details")
//       // $("#taskCompletion-input").val("").attr("placeholder", "Expected Completion Date")
//       // console.log("task date", $("#taskCompletion-input"))
//       return beerFavData.getAllFavorites()
//     })
// //     .then(taskArray => {
// //       taskPrinter.printTasks(taskArray)
