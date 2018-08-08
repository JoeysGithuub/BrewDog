const $ = require("jquery")

const favData = Object.create({}, {
    postFavorite: {
        value: (newFavorite) => {
            return $.ajax({
                url: "http://localhost:3000/beers",
                method: "POST",
                data: newFavorite
            })
        }
    },
    getAllFavorites: {
        value: () => {
            return $.ajax("http://localhost:3000/beers")
        }
    },
    getFavorite: {
        value: (id) => {
            return $.ajax({
                url: `http://localhost:3000/beers${id}`,
                method: "GET"
            })
        }
    },
    putFavorite: {
        value: (updateFavorites) => {
            return $.ajax({
                url: `http://localhost:3000/beers${updateFavorites.id}`,
                method: "PUT",
                data: {
                }
            })
        }
    },
    deleteFavorite: {
        value: (id) => {
            return $.ajax({
                url: `http://localhost:3000/beers${id}`,
                method: "DELETE",
            })
        }
    }
})

module.exports = favData