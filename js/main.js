$(function(){
  var w = $(window).width();
  var x = 576;
  if(w < x)
  {
  $(function() {
    $('#page-top a').click(function(e) {
      e.preventDefault();
      var position = 0;
      var speed = 500;
      $('html, body').animate({
        scrollTop: position,
      }, speed, 'swing');
      return false;
    });
  });
  }
  else
  {
  $('#page-top').hide();
  }
});
