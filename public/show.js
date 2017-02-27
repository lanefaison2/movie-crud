var idShow

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

  idShow = getUrlParameter('id')

  $.get(`/movies/${idShow}`, function (movie) {

    $('#movieTitle').val(movie.Title)
    $('#movieDirector').val(movie.Director)
    $('#movieYear').val(movie.Year)
    $('#movieRating').val(movie.Rating)
    $('#movieURL').val(movie.URL)
    $('.previewImg').append('<img src=' + movie.URL + '>')
    $('.page-title').text(movie.Title)
    $('.showPoster').append('<img src=' + movie.URL + '>')
    $('.showInfo').append('<p class="category">Title: ' + movie.Title + '</p><p class="category">Director: ' + movie.Director + '</p><p class="category">Year: ' + movie.Year + '</p><p class="category">Rating: ' + movie.Rating + '</p>')
  })
})
