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
    },
    postFavorite: {
        value: (newComment) => {
            return $.ajax({
                url: "http://localhost:3000/comments",
                method: "POST",
                data: newComment
            })
        }
    },
    getAllFavorites: {
        value: () => {
            return $.ajax("http://localhost:3000/comments")
        }
    },
    getFavorite: {
        value: (id) => {
            return $.ajax({
                url: `http://localhost:3000/comments${id}`,
                method: "GET"
            })
        }
    },
    patchFavorite: {
        value: (comment, id) => {
            return $.ajax({
                url: `http://localhost:3000/comments/${id}`,
                method: "PATCH",
                data: {
                    comment: comment
                }
            })
        }
    },
    deleteFavorite: {
        value: (id) => {
            return $.ajax({
                url: `http://localhost:3000/comments${id}`,
                method: "DELETE",
            })
        }
    }
})


module.exports = favBeers