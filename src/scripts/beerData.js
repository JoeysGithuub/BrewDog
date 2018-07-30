const $ = require("jquery")

// beers by strength

$.getJSON( "https://api.punkapi.com/v2/beers", function (data) {
    console.log(data)

    // filter 
    let weakBeers = data.filter(beer => beer.abv <= 4.5);
    let medBeers = data.filter(beer => beer.abv > 4.5 && beer.abv <= 7.5);
    let strongBeers = data.filter(beer => beer.abv > 7.5 && beer.abv <= 100);
    console.log("strong", strongBeers)

    // pass in filtered data  and class
    function Display(range, percent) {
        // build html with filtered data
        let beerHtml = range.map(
            item =>
         ` <div class = "beer-wrapper">
        <div class = "beer ${percent}">
          <i class="fa fa-star" aria-hidden="true"></i>
          <h3 class="beer__name">${item.name}</h3>
          <img class ="beer__img" src = "${item.image_url}">
          <h4 class ="beer__tagline">${item.tagline}</h4>
         </div>
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
        </div> `
        )
        $(".beers").append(beerHtml);
    }
    // call filtered html with class names
    Display(weakBeers, "weak");
    Display(medBeers, "medium");
    Display(strongBeers, "strong");
})

