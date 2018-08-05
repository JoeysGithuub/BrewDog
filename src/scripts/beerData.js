const $ = require("jquery")

$.getJSON("https://api.punkapi.com/v2/beers", function(data) {
  console.log(data);

  //filter through data 
  let weakBeers = data.filter(beer => beer.abv <= 4.5);
  let medBeers = data.filter(beer => beer.abv > 4.5 && beer.abv <= 7.5);
  let strongBeers = data.filter(beer => beer.abv > 7.5 && beer.abv <= 50);
  //pass in data and a class
  function Display(range, percent) {
    //build html
    let beerHtml = range.map(
      item =>
        `
        <div class = "beer-wrapper">
        <div class = "beer ${percent}">
          <i class="fa fa-star" aria-hidden="true"></i>
          <h3 class="beer__name">${item.name}</h3>
          <img class ="beer__img" src = "${item.image_url}">
          <h4 class ="beer__tagline">${item.tagline}</h4>
         
         </div>
         <div class ="pop-up">
          <i class="fa fa-window-close-o" aria-hidden="true"></i>
            <h3 class ="title">Wanna Know More?</h3>
            <p>${item.description}</p>
            <h3 class ="title">Goes Well With</h3>
              <ul>
       
               ${item.food_pairing
                 .map(ingredient => `<li>${ingredient}</li>`)
                 .join("")}

              </ul>
          </div>
        </div>
       
            `
    );

    $(".beers").append(beerHtml);
  }
  //call html with class names
  Display(weakBeers, "weak");
  Display(medBeers, "medium");
  Display(strongBeers, "strong");

  //beer pop up 
  $(".beer img").on("click", function() {
    $(this)
      .closest(".beer-wrapper")
      .find(".pop-up")
      .fadeIn();
    $(".bg").fadeIn();
  });

  $(".fa-window-close-o").on("click", function() {
    $(".pop-up").fadeOut();
    $(".bg").fadeOut();
  });
  //hide beers besides medium range

  $(".beer").css("display", "none");

  $(".beers .medium").css("display", "block");
//filter beers using tabs
  $(".tab__item").on("click", function() {
    $(".tab__item").removeClass("active");
    $(this).addClass("active");
  });

  $(".tab__item.weak").on("click", function() {
    $(".beers .weak").show();

    $(".beers .medium").hide();
    $(".beers .strong").hide();
  });

  $(".tab__item.medium").on("click", function() {
    $(".beers .medium").show();

    $(".beers .weak").hide();
    $(".beers .strong").hide();
  });

  $(".tab__item.strong").on("click", function() {
    $(".beers .strong").show();

    $(".beers .weak").hide();
    $(".beers .medium").hide();
  });
});



// const $ = require("jquery")

// $.getJSON("https://api.punkapi.com/v2/beers", function (data) {

//   //filter data
//   let lightBeers = data.filter(beer => beer.abv <= 4.5)
//   let midBeers = data.filter(beer => beer.abv > 4.5 && beer.abv <= 7.5)
//   let heavyBeers = data.filter(beer => beer.abv > 7.6 && beer.abv <= 99)

//   //pass in data and class
//   function Display(range, percent) {
//     //build html
//     let main = range.map(
//       item =>
//         ` <div class - "beerWrapper">
//         <div class = "beer ${percent}">
//         <i class = "favStar" aria-hidden="true"></i>
//         <h3 class = "beerName">${item.name}</h3>
//         <img class = "beerImg" src = "${item.image_url}">
//         <h4 class = "beerTag">${item.tagline}</h4>
//         </div>
//         <div class = "popUp">
//         <i class = "favWindow" aria-hidden="true"></i>
//         <h3 class = "title">Wanna Know More?</h3>
//         <p>${item.description}</p>
//         <h3 class = "title">Goes Well With</h3>
//         <ul>${item.food_pairing.map(
//           ingredient => `<li>${ingredient}</li>`)
//           .join("")}
//         </ul>
//         </div>
//         </div>`
//     )
//     $(".beers").append(main)
//   }
//   // call main with class names
//   Display(lightBeers, "weak")
//   Display(midBeers, "medium")
//   Display(heavyBeers, "strong")

//   // get fav info
//   $(".beer").one("click", ".favStar", function () {
//     $(this).toggleClass("active-star")
//     let favImg = $(this)
//       .closest(".beerWrapper")
//       .find(".beerImg")
//       .attr("src")
//     let favName = $(this)
//       .closest(".beerWrapper")
//       .find(".beerName")
//       .text()
//     let favTag = $(this)
//       .closest(".beerWrapper")
//       .find(".beerTag")
//       .text()
//     let index = $(".favStar").index(this)
//     let favoriteHTML =
//       `<div class = "favoriteItem" data-index-number = ${index}>
//       <h4>${favName}</h4>
//       <img src = ${favImg}/>
//       <h5>${favTag}</h5>
//       </div>`  

//       $(".favorites").append(favoriteHTML)
//   })
//   $(".favorites").append('<i class = "favWindow favoritesClose" aria-hidden="true"></i>')

//     $(".favorites").on("click", ".favoritesClose", function() {
//     $(".favorites").fadeOut()
//   })

//   $(".favoritesTab").on("click", function() {
//     $(".favorites").fadeIn()
//   })
// //beer pop up info
//   // $(".beerImg").on("click", function() {
//   //   $(this)
//   //     .closest(".beerWrapper")
//   //     .find(".popUp")
//   //     .fadeIn()
//   //   $(".bg").fadeIn()
//   // })
//     // beer pop up - extra info from data
//   $(".beerImg").on("click", function() {
//     $(this)
//       .closest(".beerWrapper")
//       .find(".popUp")
//       .fadeIn()
//     $(".bg").fadeIn()
//   })
//     $(".favWindow").on("click", function() {
//     $(".popUp").fadeOut()
//     $(".bg").fadeOut()
//   })

//     $(".beer").css("display", "none")

//   $(".beers .medium").css("display", "block")

// //filter throughout by alcohol content 
//   $(".tab__item").on("click", function() {
//     $(".tab__item").removeClass("active")
//     $(this).addClass("active")
//   })

//   $(".tab__item.weak").on("click", function() {
//     $(".beers .weak").show()

//     $(".beers .medium").hide()
//     $(".beers .strong").hide()
//   })

//   $(".tab__item.medium").on("click", function() {
//     $(".beers .medium").show()

//     $(".beers .weak").hide()
//     $(".beers .strong").hide()
//   })

//   $(".tab__item.strong").on("click", function() {
//     $(".beers .strong").show()

//     $(".beers .weak").hide()
//     $(".beers .medium").hide()
//   })
// // })
// // $(".tab_item_fav").on("click", function() {
// // })
// })