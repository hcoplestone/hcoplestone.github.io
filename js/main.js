$(document).ready(function() {
  $('.scrollup').click(function () {
    $("html, body").animate({
        scrollTop: 0
    }, 600);
    return false;
  });
  
  $('#main-nav').slicknav({
		prependTo:'#mobile-nav'
  });
});