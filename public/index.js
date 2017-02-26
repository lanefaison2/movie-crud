$(document).ready(function () {

  // You can only communicate with the server through HTTP requests in here
  // Here we are living on the client's Chrome browser

  //This route (not file) corresponds to routes.js:9
  $.get('/movies', function (data) {
    // console.log(data)
    data.forEach(function (movie) {
      $('.movies').append(
        '<tr>' +
        '<td><a href="' +
        movie.URL +
        '">' +
        movie.Title +
        '</a></td>' +
        '<td>' +
        movie.Director +
        '</td>' +
        '<td>' +
        movie.Year +
        '</td>' +
        '<td>' +
        movie.Rating +
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

  // //This route (not file) corresponds to routes.js:15
  // $.get('/movies/1', function (data) {
  //   console.log(data)
  // })

  $('.add-movie-btn').on('click', function (event) {
    event.preventDefault()
    var addedMovie = {
      Title: $('#movieTitle').txt(),
      Director: $('#movieDirector').txt(),
      Year: $('#movieYear').txt(),
      Rating: $('#movieRating').txt(),
      "URL": $('#movieURL').txt()
    }
    //This route corresponds to routes.js:22
    $.post('/movies', addedMovie, function () {

    })
  })
})
