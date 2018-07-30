const $ = require("jquery")

     // get favorite info
     $(".beer").one("click", ".fa-star", function () {
         $(this).toggleClass("active-star");
         let favoriteImg = $(this)
             .closest(".beer-wrapper")
            .find(".beer__img")
             .attr("src");
         let favoriteName = $(this)
             .closest(".beer-wrapper")
             .find(".beer__name")
             .text();
         let favoriteTagline = $(this)
             .closest(".beer-wrapper")
             .find(".beer__tagline")
             .text();
         let index = $(".fa-star").index(this);
         let favoriteHTML = 
              `<div class ='favorites__item' data-index-number = ${index}>
               <h4>${favoriteName}</h4>
               <img src = ${favoriteImg} />
               <h5>${favoriteTagline}</h5>
             </div>`
        $(".favorites").append(favoriteHTML);
    });
    // favorite clicks
    $(".favorites").append(
        '<i class="fa fa-window-close-o favorites__close" aria-hidden="true"></i>'
    );

    $(".favorites").on("click", ".favorites__close", function () {
        $(".favorites").fadeOut();
    });

    $(".favorites__title").on("click", function () {
        $(".favorites").fadeIn();
    });