/* If you're feeling fancy you can add interactivity 
    to your site with Javascript */

// prints "hi" in the browser's dev tools console
console.log('hi');

//$(document).ready(function() { 

  //newQuote = function(){
    //$.getJSON(
    //"https://api.icndb.com/jokes/random",
    //function(data) {
      // $("#myquote").html(data.value.joke);
    //}
//);
 // };
  
$(document).ready(function() { 
$myquote = $("#myquote");
$myauthor = $("#myauthor");

  newQuote = function(){
    $.getJSON(
    "https://api.icndb.com/jokes/random",
    function(data) {
      $("#myquote").html(data.value.joke);
      $("#myauthor").html("");
        $("#tweetmea").attr("href", "https://www.twitter.com/?status=" + data.value.joke)
    }
);
  };
  
var quotes = ["Two birds with one stone", 
             "Early bird catches the worm", 
             "Hawks eat squirrels"];


putNewQuote = function(){
  var quotes = [["Carl Sagan", "For small creatures such as we the vastness is bearable only through love."], 
             ["Carl Sagan", "Extinction is the rule. Survival is the exception."], 
             ["Carl Sagan", "Science is a way of thinking much more than it is a body of knowledge."], 
               ["Albert Einstein", "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe"], 
               ["Isaac Asimov", "The saddest aspect of life right now is that science gathers knowledge faster than society gathers wisdom."], 
               ["Stephen Hawking", "One, remember to look up at the stars and not down at your feet. Two, never give up work. Work gives you meaning and purpose and life is empty without it. Three, if you are lucky enough to find love, remember it is there and don't throw it away."], 
               ["Douglas Adams", "The fact that we live at the bottom of a deep gravity well, on the surface of a gas covered planet going around a nuclear fireball 90 million miles away and think this to be normal is obviously some indication of how skewed our perspective tends to be."], 
               ["Niels Bohr", "An expert is a person who has made all the mistakes that can be made in a very narrow field."], 
               ["Christopher Hitchens", "That which can be asserted without evidence, can be dismissed without evidence."]];
  var selection = quotes[Math.floor((Math.random() * quotes.length))];
  var selQuote = selection[1];
 var selAuthor = selection[0];
  $myquote.html(selQuote);
  $myauthor.html("- " + selAuthor);
  $("#tweetmea").attr("href", "https://www.twitter.com/?status=" + selQuote + " - " + selAuthor)
}
putNewQuote();

$("#newquotepls").click(putNewQuote);
$("#chuckpls").click(newQuote);
 });

