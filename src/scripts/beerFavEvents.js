const $ = require("jquery")
const beerFavData = require("./beerFavData.js")
const beerData = require("./beerData.js")

  $(".beerWrapper").on("click", ".favBu", () => {
    console.log("fuck")
    const beerImg = $(".beer__img").val();
    const newFavorite = {
      favorite: beerImg
    }
      // userID: userData()
  
    // console.log("thi is the one", userData())
    beerFavData.postFavorite(newFavorite)
    .then((favInfo) => {
      console.log("favInfo",favInfo)
      // $("#taskName-input").val("").attr("placeholder", "Task Name")
      // $("#taskDetails-input").vale("").attr("placeholder", "Details")
      // $("#taskCompletion-input").val("").attr("placeholder", "Expected Completion Date")
      // console.log("task date", $("#taskCompletion-input"))
      return beerFavData.getAllFavorites()
    })
  })
//     .then(taskArray => {
//       taskPrinter.printTasks(taskArray)
