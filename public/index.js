$(document).ready(function () {

  // You can only communicate with the server through HTTP requests in here
  // Here we are living on the client's Chrome browser

  //This route (not file) corresponds to routes.js:9
  $.get('/movies', function (data) {
    console.log(data)
    data.forEach(function (movie) {
      $('.movies').append(
        '<tr>' +
        '<td><a href="' +
        movie.showPage +
        '">' +
        movie.name +
        '</a></td>' +
        '<td>' +
        movie.director +
        '</td>' +
        '<td>' +
        movie.year +
        '</td>' +
        '<td>' +
        movie.rating +
        '</td>' +
        '<td>' +
        '<button type="button">Delete Movie</button>' +
        '</td>' +
        '<td>' +
        '<button type="button">Edit</button>' +
        '</td>' +
        '</tr>'
      )
    })
  })

  //This route (not file) corresponds to routes.js:15
  $.get('/movies/1', function (data) {
    console.log(data)
  })

  $('.add-movie-btn').on('click', function (event) {
    event.preventDefault()
    var addedMovie = {
      Title: $('#movieTitle').val(),
      Director: $('#movieDirector').val(),
      Year: $('#movieYear').val(),
      Rating: $('#movieRating').val(),
      "URL": $('#movieURL').val()
    }
    console.log(addedMovie);
    //This route corresponds to routes.js:22
    // $.post('/movies', function () {
    //
    // })
  })
})
