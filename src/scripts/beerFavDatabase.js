const $ = require("jquery")

const favBeers = Object.create({}, {
    postBeer: {
        value: (newBeer) => {
            return $.ajax({
                url: "http://localhost:3000/favorites",
                method: "POST",
                data: newBeer
            })
        }
    },
    getAllBeers: {
        value: () => {
            return $.ajax("http://localhost:3000/favorites")
        }
    },
    getBeer: {
        value: (id) => {
            return $.ajax({
                url: `http://localhost:3000/favorites${id}`,
                method: "GET"
            })
        }
    },
    putBeer: {
        value: (updateFavorites) => {
            return $.ajax({
                url: `http://localhost:3000/favorites${updateFavorites.id}`,
                method: "PUT",
                data: updateFavorites
            })
        }
    },
    deleteBeer: {
        value: (id) => {
            return $.ajax({
                url: `http://localhost:3000/favorites/${id}`,
                method: "DELETE",
            })
        }
    }
}) 

module.exports = favBeers