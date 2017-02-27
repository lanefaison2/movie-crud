
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
  var id = getUrlParameter('id')

  $.get(`/movies/${id}`, function (movie) {
    console.log(movie)

    $('#movieTitle').val(movie.Title)
    $('#movieDirector').val(movie.Director)
    $('#movieYear').val(movie.Year)
    $('#movieRating').val(movie.Rating)
    $('#movieURL').val(movie.URL)

  })

  $(document).on('click', '.edit-movie-btn', function (event) {
    event.preventDefault()
    var editedMovie = {
      Title: $("#movieTitle").val(),
      Director: $("#movieDirector").val(),
      Year: $("#movieYear").val(),
      Rating: $("#movieRating").val(),
      "URL": $("#movieURL").val(),
      id: id
    }

    $.ajax({
      url: '/movies',
      type: 'PUT',
      data: newMovie,
      success: function (results) {
        console.log(results)
      }
    })
  })
})

// window.location.search.split("&")
// window.location = "/edit.html?=querystring"
// // console.log(querystring)
// // console.log(window.location);




//
// // This method targets the id of the <tr> contained the clicked button.
