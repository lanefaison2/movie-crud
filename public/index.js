// The count is used to give each movie an id number so they can be targetted later on. The first movie in the list will have id=1 since the count is ++ before movie is appended.
// newId is used to add the same id number as the count to the movie's object so it can be targetted later on.
var count = 0
var newId = 0

$(document).ready(function () {

  // You can only communicate with the server through HTTP requests in here
  // Here we are living on the client's Chrome browser

  //GETTING ALL THE MOVIES
  $.get('/movies', function (data) {
    // console.log(data)
    for (var i=0;i<data.length;i++) {

      count++
      newId = data.length

      $('.movies').append(
        '<tr id=' + count + '>' +
        `<td class="titleClass"><a class="posterClass" href="show.html?id=${count}">` +
        data[i].Title +
        '</a></td>' +
        '<td class="directorClass">' +
        data[i].Director +
        '</td>' +
        '<td class="yearClass">' +
        data[i].Year +
        '</td>' +
        '<td class="ratingClass">' +
        data[i].Rating +
        '</td>' +
        '<td>' +
        '<button type="button" class="delete-btn"><span class="glyphicon glyphicon-trash" aria-hidden="true"></span></button>' +
        '</td>' +
        '<td>' +
        `<a href="edit.html?id=${count}"><button type="button" class="edit-btn"><span class="glyphicon glyphicon-edit" aria-hidden="true"></span></button></a>` +
        '</td>' +
        '</tr>'
      )
    }
  })
})

$(document).on('click', '.add-movie-btn', function (event) {
  event.preventDefault()
  newId++
  var newMovie = {
    Title: $("#movieTitle").val(),
    Director: $("#movieDirector").val(),
    Year: $("#movieYear").val(),
    Rating: $("#movieRating").val(),
    "URL": $("#movieURL").val(),
    id: newId
  }

  $.ajax({
    url: '/movies',
    type: 'POST',
    data: newMovie,
    success: function (results) {
      $('.results').append('<p>' + $('#movieTitle').val() + ' successfully added!</p>')
      $('.results').fadeOut(5000)
    }
  })
})

$(document).on('click','.delete-btn', function () {
  // This method targets the id of the <tr> contained the clicked button.
  var clickedId = $(this).closest('tr').attr('id')

  // DELETING A NEW MOVIE
  $.ajax({
    url: '/movies/' + clickedId,
    type: 'DELETE',
    success: function () {
      console.log("Movie successfully removed")
      $('#' + clickedId).remove()
    }
  })
})

// $(document).on('click','.edit-btn', function () {
//
//   var clickedId = $(this).closest('tr').attr('id')
//   // This method targets the id of the <tr> contained the clicked button.
//   window.location.search.split("&")
//   window.location = "/edit.html?=querystring"
//
// })
