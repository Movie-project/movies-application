/**
 * es6 modules and imports
 */
import sayHello from './hello';
sayHello('World');


//jQuery import:
const $ = require("jquery");
// import $ from ("jquery");

/**
 * require style imports
 */
const {getMovies} = require('./api.js');

getMovies().then((movies) => {
  $("#loading").hide();
  console.log('Here are all the movies:');
  movies.forEach(({title, rating, id}) => {
    $("#movie-header").html("Movies");
    $("#movie-list").append(`<li>id#${id} - ${title} - rating: ${rating}</li>`);
    console.log(`id#${id} - ${title} - rating: ${rating}`);
  });
}).catch((error) => {
  alert('Oh no! Something went wrong.\nCheck the console for details.')
  console.log(error);
});


//import our javascript here:






//loading animation js----------------------------------/
 $(document).ready(function(){
    // Animate loader off screen
    $(".se-pre-con").fadeOut("slow");
});
//END loading animation js------------------------------/






// //our javascript here:
// $(window).load(function(){
//     $("#loading").html("LOADING...")
//     $("body").css("background-color", "blue");
// });
//
//
// $(document).ready(function(){
//     $("#loading").html("Movies")
// });

