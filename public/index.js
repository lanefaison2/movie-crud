$(document).ready(function () {

  // You can only communicate with the server through HTTP requests in here
  // Here we are living on the client's Chrome browser
  var count = 0
  var newId
  //This route (not file) corresponds to routes.js:9
  $.get('/movies', function (data) {
    // console.log(data)
    for (var i=0;i<data.length;i++) {
      count++
      newId = data.length
      console.log(newId)

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

  $('.delete-btn').on('click', function (event) {
    $.ajax({
      url: '/movies/Title',
      type: 'DELETE',
      success: function (result) {
        console.log(result);
        console.log("working?");
        $(this).remove()
      }
    })
    // $.delete('/movies/:id', function () {
    //   $(this).remove()
    // })
  })
})
