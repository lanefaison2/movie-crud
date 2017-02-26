$(document).ready(function () {

  $.get('/movies', function (data) {
    console.log(data)
    data.forEach(function (movie) {
      $('.movies').append('<div>' + movie.name + '</div>')
    })
  })

  $.get('/movies/1', function (data) {
    console.log(data);
  })
})
