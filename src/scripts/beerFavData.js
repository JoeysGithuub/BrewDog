const $ = require("jquery")

const favData = Object.create({}, {
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
    putFavorite: {
        value: (updateComments) => {
            return $.ajax({
                url: `http://localhost:3000/comments${updateComments.id}`,
                method: "PUT",
                data: {
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

// const favComment = Object.create({}, {
//     postFavorite: {
//         value: (newComment) => {
//             return $.ajax({
//                 url: "http://localhost:3000/comments",
//                 method: "POST",
//                 data: newComment
//             })
//         }
//     },
//     getAllFavorites: {
//         value: () => {
//             return $.ajax("http://localhost:3000/comments")
//         }
//     },
//     getFavorite: {
//         value: (id) => {
//             return $.ajax({
//                 url: `http://localhost:3000/comments${id}`,
//                 method: "GET"
//             })
//         }
//     },
//     putFavorite: {
//         value: (updateFavorites) => {
//             return $.ajax({
//                 url: `http://localhost:3000/comments${updateFavorites.id}`,
//                 method: "PUT",
//                 data: {
//                 }
//             })
//         }
//     },
//     deleteFavorite: {
//         value: (id) => {
//             return $.ajax({
//                 url: `http://localhost:3000/comments${id}`,
//                 method: "DELETE",
//             })
//         }
//     }
// })


module.exports = favData