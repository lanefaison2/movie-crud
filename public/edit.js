
$(document).on('click','.edit-btn', function () {



  // This method targets the id of the <tr> contained the clicked button.
  var clickedId = $(this).closest('tr').attr('id')

  var clickedTitle = $('#' + clickedId + ' .titleClass').text()
  var clickedDirector = $('#' + clickedId + ' .directorClass').text()
  var clickedYear = $('#' + clickedId + ' .titleYear').text()
  var clickedRating = $('#' + clickedId + ' .titleRating').text()

})
