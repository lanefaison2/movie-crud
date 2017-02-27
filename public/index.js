$(document).ready(function () {

  // You can only communicate with the server through HTTP requests in here
  // Here we are living on the client's Chrome browser
  // The count is used to give each movie an id number so they can be targetted later on. The first movie in the list will have id=1 since the count is ++ before movie is appended.
  // newId is used to add the same id number as the count to the movie's object so it can be targetted later on.

  var count = 0
  var newId
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



  // //This route (not file) corresponds to routes.js:15
  // $.get('/movies/1', function (data) {
  //   console.log(data)
  // })
  $('#new-movie-form').on('submit', function (event) {
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
    console.log(newMovie)

    var jsonMovie = $('#new-movie-form').serialize()
    //
    // console.log(jsonMovie)
    //
    // console.log($(this).serialize());

    //This route corresponds to routes.js:22
    $.post('/movies', newMovie, function (result) {
      console.log(result)
    })
  })
})

$(document).on('click','.delete-btn', function (event) {
  var clickedId = $(this).closest('tr').attr('id')
  console.log(clickedId)

  $.ajax({
    url: '/movies/:id',
    type: 'DELETE',
    success: function () {
      console.log("working?")
      $('#' + '/movies/:id').remove()
    }
  })
  $.get('movies', function (data) {
    console.log(data);
  })
  // $.delete('/movies/:id', function () {
  //   $(this).remove()
  // })
})
