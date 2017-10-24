$(document).ready(function(){
    var randomQuote;
    var randomNum;
    var author;
    getQuote();
    function getQuote(){

        var quotes = ["None of you seem to understand. I'm not locked in here with you. You're locked in here with *ME*!", "On Mars, you taught me the value of life. If we hope to preserve it here, we must remain silent.", "I feel fear, for the last time."];
        var author1 = ["-Rorschach", "-Jon Osterman", "-Dr. Manhattan"];

        randomNum = Math.floor((Math.random()*quotes.length));
        randomQuote = quotes[randomNum];
        author = author1[randomNum];

        $(".quote").text(randomQuote);
        $(".author").text(author);
    }

    $("#newQuote").on("click", function(){
        getQuote();
    });

    $("#tweet-btn").on("click", function(){
        window.open("https://twitter.com/intent/tweet?text=" + randomQuote + " " + author);
    });

});
