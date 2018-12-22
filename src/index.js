/**
 * es6 modules and imports
 */
//import our javascript here:
import sayHello from './hello';
sayHello('World');


//jQuery import:
const $ = require("jquery");
// import $ from ("jquery");

/**
 * require style imports
 */
const {getMovies, addMovie, editMovie, deleteMovie} = require('./api.js');

//appends to html
function appendMovie(movie){
  const {id, title, rating} = movie;
  $("#movie-list").append(`<div>id#${id} - ${title} - rating: ${rating} <button class="edit" value="${title}">Edit</button> <button type="button" value="${id}" class="delete">delete</button></div>`);
}

//reloading list
function readAndRenderMovies() {
    getMovies().then((movies) => {
        $("#loading").hide();
        console.log('Here are all the movies:');
        movies.forEach(({title, rating, id}) => {
            $("#movie-header").html("Movies");
            $("#movie-list").append(`<div id="${id}"> ${title} - rating: ${rating} <button class="edit" value="${title}">Edit</button> <button type="button" value="${id}" class="delete">delete</button></div>`);
            console.log(`id#${id} - ${title} - rating: ${rating}`);
            $(".hidden-on-load").css("display", "inline-block");
        });
    }).catch((error) => {
        alert('Oh no! Something went wrong.\nCheck the console for details.')
        console.log(error);
    });
}
readAndRenderMovies();

//delete button click function:
$("#movie-list").on('click', '.delete', function(event){
    var id = $(event.target).val();
    $("#loading").show();
    deleteMovie(id).then(function(){
        $("#movie-list").html("");
        readAndRenderMovies();
    });
});

//edit button and function:

$(document).on('click', '.edit', function(event){
  var id = $(event.target).val();
  console.log(id);
  $(".edit-form").show();
  $("#edit-input").val(id);
  // var titleEdit = $("#edit-input").val();
  // console.log(titleEdit);
  $("#save-movie").click(function () {
  id = $("#edit-input").val();
  const editedMovie = {title: id, rating: rating};
    console.log(editedMovie);
    editMovie(editedMovie)
      .then(function(){
      $("#movie-list").html("");
      readAndRenderMovies();
    });
  })
});



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

  //adds to JSON file
const newMovie = {title: movieTitle, rating: rating};
console.log(newMovie);
addMovie(newMovie)
  .then(function (movie) {
    appendMovie(movie)

   $('#movie-title').val("");
  //  add something in here to clear out the stars after submit is clicked
  })
});


//End of api for adding movies------------------------/






