$(document).ready(function () {
  $('.grid').isotope({
    itemSelector: '.item',
  });

  $('.filter-button-group').on('click', 'li', function () {
    var filterValue = $(this).attr('data-filter');
    $('.grid').isotope({
      filter: filterValue
    });
    $('.filter-button-group li').removeClass('active');
    $(this).addClass('active');
  });

})
