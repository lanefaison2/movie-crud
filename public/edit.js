var idEdit

$(document).ready(function () {

  function getUrlParameter(sParam) {
    const sPageURL = decodeURIComponent(window.location.search.substring(1));
    const sURLVariables = sPageURL.split('&');
    let returner;

    sURLVariables.forEach((paraName) => {
      const sParameterName = paraName.split('=');
      if (sParameterName[0] === sParam) {
        returner = sParameterName[1] === undefined ? true : sParameterName[1];
      }
    });
    return returner;
  }

  idEdit = getUrlParameter('id')

  $.get(`/movies/${idEdit}`, function (movie) {

    $('#movieTitle').val(movie.Title)
    $('#movieDirector').val(movie.Director)
    $('#movieYear').val(movie.Year)
    $('#movieRating').val(movie.Rating)
    $('#movieURL').val(movie.URL)
    $('.previewImg').append('<img src=' + movie.URL + '>')
  })
})

// EDITING A MOVIE
$(document).on('click', '.edit-movie-btn', function (event) {
  event.preventDefault()
  var editedMovie = {
    Title: $("#movieTitle").val(),
    Director: $("#movieDirector").val(),
    Year: $("#movieYear").val(),
    Rating: $("#movieRating").val(),
    "URL": $("#movieURL").val(),
    id: idEdit
  }

  $.ajax({
    url: `/movies/${idEdit}`,
    type: 'PUT',
    data: editedMovie,
    success: function (results) {
      console.log('Successfully edited!')
      $('.results').append('<p>' + $('#movieTitle').val() + ' successfully edited!</p>')
      $('.results').fadeOut(5000)
    }
  })
})
