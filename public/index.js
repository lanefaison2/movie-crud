// The count is used to give each movie an id number so they can be targetted later on. The first movie in the list will have id=1 since the count is ++ before movie is appended.
// newId is used to add the same id number as the count to the movie's object so it can be targetted later on.
var count = 0
var newId

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
        '<td class="titleClass"><a class="posterClass" href="' +
        data[i].URL +
        '">' +
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
        '<button type="button" class="delete-btn">Delete Movie</button>' +
        '</td>' +
        '<td>' +
        '<a href="edit.html"><button type="button" class="edit-btn">Edit</button></a>' +
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
  console.log("newMovie: " + newMovie)

  var movieString = JSON.stringify(newMovie)

  console.log("movieString: " + movieString)

  // ADDING A NEW MOVIE
  $.post('/movies/', movieString, function (result) {
    console.log(result)
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

$(document).on('click','.edit-btn', function () {
  // This method targets the id of the <tr> contained the clicked button.
  var clickedId = $(this).closest('tr').attr('id')

  var clickedTitle = $('#' + clickedId + ' .titleClass').html()
  var clickedDirector = $('#' + clickedId + ' .directorClass').text()
  var clickedYear = $('#' + clickedId + ' .titleYear').text()
  var clickedRating = $('#' + clickedId + ' .titleRating').text()

  var new = window.open(this.parent().href)
  $(new.document.body).html(clickedTitle)

  return false;

})
