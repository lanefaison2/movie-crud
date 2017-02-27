
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

    // var clickedId = $(this).closest('tr').attr('id')

    var clickedTitle = $('#' + id + ' .titleClass').text()
    var clickedDirector = $('#' + id + ' .directorClass').text()
    var clickedYear = $('#' + id + ' .titleYear').text()
    var clickedRating = $('#' + id + ' .titleRating').text()
    console.log(clickedTitle)
    console.log(clickedDirector)
    console.log(clickedYear)
    console.log(clickedRating)


  })

})
// window.location.search.split("&")
// window.location = "/edit.html?=querystring"
// // console.log(querystring)
// // console.log(window.location);




//
// // This method targets the id of the <tr> contained the clicked button.
