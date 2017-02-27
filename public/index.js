// The count is used to give each movie an id number so they can be targetted later on. The first movie in the list will have id=1 since the count is ++ before movie is appended.
// newId is used to add the same id number as the count to the movie's object so it can be targetted later on.
var count = 0
var newId

$(document).ready(function () {

  // You can only communicate with the server through HTTP requests in here
  // Here we are living on the client's Chrome browser

  //This route (not file) corresponds to routes.js:9
  $.get('/movies', function (data) {
    // console.log(data)
    for (var i=0;i<data.length;i++) {

      count++
      newId = data.length

      $('.movies').append(
        '<tr id=' + count + '>' +
        '<td><a href="' +
        data[i].URL +
        '">' +
        data[i].Title +
        '</a></td>' +
        '<td>' +
        data[i].Director +
        '</td>' +
        '<td>' +
        data[i].Year +
        '</td>' +
        '<td>' +
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

    //This route corresponds to routes.js:22
  // $.post('/movies', movieString, function (result) {
  //   console.log(result)
  // })
  $.ajax({
    url: '/movies',
    type: 'POST',
    data: movieString,
    success: function (result) {
      console.log('I think it worked')
      console.log(result)
    }
  })
})

$(document).on('click','.delete-btn', function (event) {
  // This method targets the id of the <tr> contained the clicked button.
  var clickedId = $(this).closest('tr').attr('id')

  $.ajax({
    url: '/movies/' + clickedId,
    type: 'DELETE',
    success: function () {
      console.log("Movie successfully removed")
      $('#' + clickedId).remove()
    }
  })
})
