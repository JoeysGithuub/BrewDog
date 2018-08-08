const $ = require("jquery")

const beerBuild = require("./beerFavBuild")
const beerPrint = require("./beerFavPrint")


const printOnPageLoad = () => {
    $.ajax("http://localhost:3000/favorites")
    .then((beer) => {
        beerPrint.printComment(beer)
    })
}

printOnPageLoad()