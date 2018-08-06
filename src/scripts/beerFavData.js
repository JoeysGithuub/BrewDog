const $ = require("jquery")

const favData = Object.create({}, {
    postFavorite: {
        value: (newFavorite) => {
            return $.ajax({
                url: "https://api.punkapi.com/v2/beers",
                method: "POST",
                data: newFavorite
            })
        }
    },
    getAllFavorites: {
        value: () => {
            return $.ajax("https://api.punkapi.com/v2/beers")
        }
    },
    getFavorite: {
        value: (id) => {
            return $.ajax({
                url: `https://api.punkapi.com/v2/beers${id}`,
                method: "GET"
            })
        }
    },
    putFavorite: {
        value: (updateFavorites) => {
            return $.ajax({
                url: `https://api.punkapi.com/v2/beers/${updateFavorites.id}`,
                method: "PUT",
                data: {
                }
            })
        }
    },
    deleteFavorite: {
        value: (id) => {
            return $.ajax({
                url: `https://api.punkapi.com/v2/beers/${id}`,
                method: "DELETE",
            })
        }
    }
})

module.exports = favData