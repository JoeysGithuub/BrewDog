const $ = require("jquery")
    
    // beer pop up - extra info from data
    $(".beer__img").on("click", function () {
        $(this)
            .closest(".beer-wrapper")
            .find(".pop-up")
            .fadeIn();
        $(".bg").fadeIn();
    });

    $(".fa-window-close-o").on("click", function () {
        $(".pop-up").fadeOut();
        $(".bg").fadeOut();
    });
    // hide beers apart from medium range

    $(".beer").css("display", "none");

    $(".beers .medium").css("display", "block");
    // filter beers using tabs
    $(".tab__item").on("click", function () {
        $(".tab__item").removeClass("active");
        $(this).addClass("active");
    });

    $(".tab__item.weak").on("click", function () {
        $(".beers .weak").show();

        $(".beers .medium").hide();
        $(".beers .strong").hide();
    });

    $(".tab__item.medium").on("click", function () {
        $(".beers .medium").show();

        $(".beers .weak").hide();
        $(".beers .strong").hide();
    });

    $(".tab__item.strong").on("click", function () {
        $(".beers .strong").show();

        $(".beers .weak").hide();
        $(".beers .medium").hide();
    });