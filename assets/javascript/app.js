//                      /$$                 /$$       /$$                                 /$$             /$$    
//                     | $$                | $$      | $$                                | $$            | $$    
//   /$$$$$$   /$$$$$$ | $$  /$$$$$$       | $$$$$$$ | $$ /$$   /$$  /$$$$$$         /$$$$$$$  /$$$$$$  /$$$$$$  
//  /$$__  $$ |____  $$| $$ /$$__  $$      | $$__  $$| $$| $$  | $$ /$$__  $$       /$$__  $$ /$$__  $$|_  $$_/  
// | $$  \ $$  /$$$$$$$| $$| $$$$$$$$      | $$  \ $$| $$| $$  | $$| $$$$$$$$      | $$  | $$| $$  \ $$  | $$    
// | $$  | $$ /$$__  $$| $$| $$_____/      | $$  | $$| $$| $$  | $$| $$_____/      | $$  | $$| $$  | $$  | $$ /$$
// | $$$$$$$/|  $$$$$$$| $$|  $$$$$$$      | $$$$$$$/| $$|  $$$$$$/|  $$$$$$$      |  $$$$$$$|  $$$$$$/  |  $$$$/
// | $$____/  \_______/|__/ \_______/      |_______/ |__/ \______/  \_______/       \_______/ \______/    \___/  
// | $$                                                                                                          
// | $$                                                                                                          
// |__/ 

// Javascript function to wrap everything
// -----------------------------------------------------------------
$(document).ready(function() {

    // Variables
    // -----------------------------------------------------------------
    
    // Stop Clock 
    var counter = 61;
    // used for stop clock interval
    var intervalId;
    // Used to display the question number
    var questionNumber = 0
    // Stores number of correctly answered questions
    var questionCorrect = 0
    // Stores number of incorrectly answered questions
    var questionWrong = 0

    // Elements will fade into the page upon load
    $(".pageheader").hide();
    $("#subHeader").hide();
    $("#instructions").hide();
    $(".startbutton").hide();
    $(".questionPanel").hide();
    $(".theTimer").hide();
    $(".questionColumn").hide();
    $(".pageheader").delay(1000).fadeIn(1000);
    $("#subHeader").delay(2500).fadeIn(1000);
    $("#instructions").delay(3500).fadeIn(1000);
    $(".startbutton").delay(3700).fadeIn(1000);


    // Clicking the start button hides the welcome screen and starts game
    $(".startbutton").on("click", function() {
        $(".theTimer").show();
        $("#instructions").hide();
        $(".startbutton").hide();
        $(".questionPanel").delay(500).fadeIn(500);
        startGame()
    })

    // game initiate
    function startGame() {
        
        // start the clock when user begins game
        intervalId = setInterval(decrement, 1000);
        function decrement() {
            counter--;
            $("#show-number").html(counter)
                // when the timer hits zero...
            if (counter === 0) {
                //...run the tally function.
                // tally();
                console.log("hit zero")
            }
            
        }

        // show the question div
        $(".questionColumn").fadeIn(500);
        
        // proceed to question 1
        questionOne()
    // startGame Wrap    
    }

    // Question 1
    function questionOne() {
        questionNumber++;
        $("#question-number").html(questionNumber);
        $("#question-text").html("What is the name of the largest ocean on earth?");
        $("#response-a").html("The Pacific Ocean");
        $("#response-b").html("The Atlantic Ocean");
        $("#response-c").html("The Indian Ocean");

        // if option a is clicked
        $("#response-a").on("click", function() {
            questionCorrect++
            questionTwo()
            // console.log("he got it right" + questionCorrect)
        })

        // if option b is clicked
        $("#response-b").on("click", function() {
            questionWrong++
            questionTwo()
        })

        // if option c is clicked
        $("#response-c").on("click", function() {
            questionWrong++
            questionTwo()
        })
    console.log("tally wrong: "+questionWrong)
    console.log("tally right: "+questionCorrect)    
    }

    // Question 2
    function questionTwo() {
        questionNumber++;
        $("#question-number").html(questionNumber);
        $("#question-text").html("Which is hotter, the center of the earth or surface of the sun?");
        $("#response-a").html("surface of the sun");
        $("#response-b").html("center of the earth");
        $(".buttonC").hide();

        // if option a is clicked
        $("#response-a").on("click", function() {
            questionWrong++
            // questionThree()
        })

        // if option b is clicked
        $("#response-b").on("click", function() {
            questionCorrect++
            // questionThree()
        })
    console.log("tally wrong: "+questionWrong)
    console.log("tally right: "+questionCorrect)   
    }

// jQeury Wrap 
});
