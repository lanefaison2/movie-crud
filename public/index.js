$(document).ready(function () {

  // You can only communicate with the server through HTTP requests in here
  // Here we are living on the client's Chrome browser

  //This route (not file) corresponds to routes.js:9
  $.get('/movies', function (data) {
    console.log(data)
    data.forEach(function (movie) {
      $('.movies').append('<tr>' + '<a href=' + movie.showPage + '><td>' + movie.name + '</td></a>' + '<td>' + movie.director + '</td>' + '<td>' + movie.year + '</td>' + '<td>' + movie.rating + '</td>' + '</tr>')
    })
  })

  //This route (not file) corresponds to routes.js:15
  $.get('/movies/1', function (data) {
    console.log(data);
  })
})
