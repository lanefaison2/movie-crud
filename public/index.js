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
        '<button type="button" class="delete-btn">Delete Movie</button>' +
        '</td>' +
        '<td>' +
        '<button type="button" class="edit-btn">Edit</button>' +
        '</td>' +
        '</tr>'
      )
    })
  })

  // //This route (not file) corresponds to routes.js:15
  // $.get('/movies/1', function (data) {
  //   console.log(data)
  // })

  $('#new-movie-form').on('submit', function (event) {
    event.preventDefault()
    var newMovie = {
      "Title": $("#movieTitle").val(),
      "Director": $("#movieDirector").val(),
      "Year": $("#movieYear").val(),
      "Rating": $("#movieRating").val(),
      "URL": $("#movieURL").val()
    }

    console.log(newMovie)

    var jsonMovie = $('#new-movie-form').serialize()

    console.log(jsonMovie)

    console.log($(this).serialize());

    //This route corresponds to routes.js:22
    $.post('/movies', jsonMovie, function (result) {
      console.log(result)
    })
  })

  $('.delete-btn').on('click', function (event) {
    $.delete
  })
})
