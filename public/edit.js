
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
    console.log(returner);
    return returner;

  }
})



//
// // This method targets the id of the <tr> contained the clicked button.
// var clickedId = $(this).closest('tr').attr('id')
//
// var clickedTitle = $('#' + clickedId + ' .titleClass').text()
// var clickedDirector = $('#' + clickedId + ' .directorClass').text()
// var clickedYear = $('#' + clickedId + ' .titleYear').text()
// var clickedRating = $('#' + clickedId + ' .titleRating').text()
