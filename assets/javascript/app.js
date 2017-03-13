// Javascript function to wrap everything
$(document).ready(function() {

    // Elements will fade into the page upon load
    $(".pageheader").hide();
    $("#subHeader").hide();
    $("#instructions").hide();
    $(".startbutton").hide();
    $(".questionPanel").hide();
    $(".pageheader").delay(1000).fadeIn(1000);
    $("#subHeader").delay(3000).fadeIn(1000);
    $("#instructions").delay(5000).fadeIn(1000);
    $(".startbutton").delay(6000).fadeIn(1000);


    // Clicking the start button hides the welcome screen 
    $(".startbutton").on("click", function() {
        $("#instructions").hide();
        $(".startbutton").hide();
        $(".questionPanel").delay(500).fadeIn(1000);

    })



});
