$(document).ready(function () {
  $('.go-to-ratings-btn').on('mouseover', function () {
    $(this).addClass('btn-hovered')
  })
  $('.go-to-ratings-btn').on('mouseleave', function () {
    $(this).removeClass('btn-hovered')
  })
})
