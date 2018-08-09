const $ = require("jquery")
const beerBuild = require("./beerFavBuild")
const beerFav = require("./beerFav")
const CommentData = require("./CommentFavData")
const beersFavoriteData = require("./beerFavDatabase")

$.getJSON("http://localhost:3000/beers", function (data) {

console.log(data)

  //filter data 
  let weakBeers = data.filter(beer => beer.abv <= 4.5)
  let medBeers = data.filter(beer => beer.abv > 4.5 && beer.abv <= 7.5)
  let strongBeers = data.filter(beer => beer.abv > 7.5 && beer.abv <= 50)
  //pass in data and class
  function Display(range, percent) {
    //build html
    let beerHtml = range.map(
      item =>
        `
        <div data-beer-id="${item.id}" class = "beer-wrapper">
        <div class = "beer ${percent}">
        <p class = "beer__Id">${item.id}</p>
          <i class="fa fa-star" aria-hidden="true"></i>
          <h3 id="${item.id}_name" class="beer__name">${item.name}</h3>
          <img id="${item.id}_img" class ="beer__img" src = "${item.image_url}">
          <h4 id="${item.id}_tagline" class ="beer__tagline">${item.tagline}</h4>

         
      
         <div class ="pop-up">
          <i class="fa fa-window-close-o" aria-hidden="true"></i>
            <h3 class ="title">Description</h3>
            <p>${item.description}</p>
            <h3 class ="title">Food Pairing</h3>
              <ul>
       
               ${item.food_pairing
          .map(ingredient => `<li>${ingredient}</li>`)
          .join("")}

              </ul>
          </div>
        </div>
       
            `
    );
    $(".beer__Id").hide()

    $(".beers").append(beerHtml)
  }
  //call html with class names
  Display(weakBeers, "weak")
  Display(medBeers, "medium")
  Display(strongBeers, "strong")

  //get fav 
  $(".beer").one("click", ".fa-star", function () {
    $(this).toggleClass("active-star")
    let favoriteImg = $(this)
      .closest(".beer-wrapper")
      .find(".beer__img")
      .attr("src")
    let favoriteName = $(this)
      .closest(".beer-wrapper")
      .find(".beer__name")
      .text()
    let favoriteTagline = $(this)
      .closest(".beer-wrapper")
      .find(".beer__tagline")
      .text()
    let index = $(".fa-star").index(this)   
    let favoriteBeerId = $(this)
    .closest(".beer-wrapper")
    .find(".beer__Id")
    .text()
    let favoriteHTML = `
            <div id= "${favoriteBeerId}favBeerComment" class ="favorites__item beer-wrapper" data-beer-id="${favoriteBeerId}" data-index-number = ${index}>
              <h4 id="fav_${favoriteBeerId}_name" class="favName">${favoriteName}</h4>
              <img id="fav_${favoriteBeerId}_img"  class="favImg" src="${favoriteImg}" />
              <h5  id="fav_${favoriteBeerId}_tagline" class="favTag">${favoriteTagline}</h5>
              <input class="favBeerId" type="hidden" value = "${favoriteBeerId}"></input>
              <input id="fav_${favoriteBeerId}_comment"  class="favComments-input" placeholder="What Did You Think?"></input>
              <button class = "addComment">Post</button>
              <button class ="removeFavorite">Delete</button>
              <button class="updateComment">Edit</button>
            </div>
      `;

      
    $(".favorites").append(favoriteHTML)
  })

  $(".favorites").append(
    '<i class="fa fa-window-close-o favorites__close" aria-hidden="true"></i>'
  )

  $(".favorites ").on("click", ".favorites__close", function () {
    $(".favorites").fadeOut()
  })

  $(".favorites__title").on("click", function () {
    $(".favorites").fadeIn()
  })

  $(document).on("click", ".fa-star", function (event) {
      const beerWrapper = $(event.target).closest('.beer-wrapper');
      const beerId = beerWrapper.data('beer-id');
      const favoriteName = $('#' + beerId + '_name').text();
      const favoriteImg = $('#' + beerId + '_img').attr('src');
      const favoriteTagline = $('#' + beerId + '_tagline').text();
      const newBeer = {
        name: favoriteName,
        image: favoriteImg,
        tagline: favoriteTagline,
        id: beerId
      }
      beersFavoriteData.postBeer(newBeer)
    })
 

      $(document).on("click", ".removeFavorite", (event) => {
        const beerWrapper = $(event.target).closest('.beer-wrapper');
        const beerId = beerWrapper.data('beer-id');
        let thing = "beerId"
        let beerCard = ($(`#${beerId}favBeerComment`))
        console.log("beerCard", beerCard)
        console.log("beerId", beerId)
        beersFavoriteData.deleteBeer(beerId)
        .then(response => {
          console.log("deleteRun", response)
          beerCard.remove()
        })

      })
  
    $(document).on("click", ".updateComment", (event) => {
      console.log("hello")
      console.log("event", event)
      const favUpdate = event.target.parentElement.children[0].id
      console.log("fav", favUpdate)
      const beerInput = $(".favComments-input").val()
      console.log(beerInput)
      const stuff = $("#" + favUpdate)
      console.log(stuff)
      stuff.empty()
      stuff.append()
      $("<p>").text(beerInput).appendTo(stuff)
      beersFavoriteData.patchFavorite(beerInput, favUpdate)
    })

  //beer pop up
  $(".beer img").on("click", function () {
    $(this)
      .closest(".beer-wrapper")
      .find(".pop-up")
      .fadeIn()
  })

  $(".fa-window-close-o").on("click", function () {
    $(".pop-up").fadeOut()
  })
  // If an event gets to the body
// $("body").click(function(){
//   $(".pop-up").fadeOut();
// });

  //display only medium range beers

  $(".beer").css("display", "none")

  $(".beers .medium").css("display", "block")
  //filter with tabs
  $(".tab__item").on("click", function () {
    $(".tab__item").removeClass("active")
    $(this).addClass("active")
  })

  $(".tab__item.weak").on("click", function () {
    $(".beers .weak").show()

    $(".beers .medium").hide()
    $(".beers .strong").hide()
  })

  $(".tab__item.medium").on("click", function () {
    console.log("hello")
    $(".beers .medium").show()

    $(".beers .weak").hide()
    $(".beers .strong").hide()
  })

  $(".tab__item.strong").on("click", function () {
    $(".beers .strong").show()

    $(".beers .weak").hide()
    $(".beers .medium").hide()
  })
})