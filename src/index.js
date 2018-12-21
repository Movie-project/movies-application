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
const {getMovies, addMovie} = require('./api.js');

function appendMovie(movie){
  const {id, title, rating} = movie;
  $("#movie-list").append(`<li>id#${id} - ${title} - rating: ${rating}</li>`);

}

getMovies().then((movies) => {
  $("#loading").hide();
  console.log('Here are all the movies:');
  movies.forEach(({title, rating, id}) => {
    $("#movie-header").html("Movies");
    $("#movie-list").append(`<li id=`${id}`>id#${id} - ${title} - rating: ${rating}</li>`);
    console.log(`id#${id} - ${title} - rating: ${rating}`);
    $(".hidden-on-load").css("display", "inline-block");
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

//API Post for adding Movies ---------------------------/

$(':radio').click(function() {
    console.log (this.value);
    $('#rating').val(this.value);
  });
$('#add-movie-btn').click(function () {
  console.log('hello!');
let movieTitle = $('#movie-title').val();
let rating = $('#rating').val();
  console.log(movieTitle);
  console.log(rating);

const newMovie = {title: movieTitle, rating: rating};
console.log(newMovie);
addMovie(newMovie)
  .then(function (movie) {
    appendMovie(movie)


  })
})


//End of api for adding movies------------------------/






