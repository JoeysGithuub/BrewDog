const $ = require("jquery")

const favBeer = Object.create({}, {
    postBeer: {
        value: (newBeers) => {
            return $.ajax({
                url: "http://localhost:3000/favorites",
                method: "POST",
                data: {
                    // name: favoriteName,
                    // image: favoriteImg,
                    // tagline: favoriteTagline,
                    // id: favId
                }
            })
        }
    }
})