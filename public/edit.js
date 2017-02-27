
$(document).ready(function () {

  // window.location.search.split("&")
  // window.location = "/edit.html?=querystring"
  // // console.log(querystring)
  // // console.log(window.location);

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
    console.log(returner);
    return returner;
  }
  var id = getUrlParameter('id');
  console.log(id);
  // $.get('/movies/')

})
// Get to data on // ID




//
// // This method targets the id of the <tr> contained the clicked button.
// var clickedId = $(this).closest('tr').attr('id')
//
// var clickedTitle = $('#' + clickedId + ' .titleClass').text()
// var clickedDirector = $('#' + clickedId + ' .directorClass').text()
// var clickedYear = $('#' + clickedId + ' .titleYear').text()
// var clickedRating = $('#' + clickedId + ' .titleRating').text()
