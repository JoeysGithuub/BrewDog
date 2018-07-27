const $ = require("jquery")

$.ajax({
    url: "https://api.punkapi.com/v2/beers",
    dataType: "json",
    success: function(results){
        console.log(results);
    }
});