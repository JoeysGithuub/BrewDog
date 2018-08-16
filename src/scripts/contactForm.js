const $ = require("jquery")

$('form').submit(function() {
    var c = confirm("Click OK to continue?");
    return c; //you can just return c because it will be true or false
});

