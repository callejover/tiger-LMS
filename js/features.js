$(document).ready(function($){
      var parPosition = [];
      $('.par').each(function() {
          parPosition.push($(this).offset().top);
      });

  $('a').click(function(){
    $('html, body').animate({
      scrollTop: $( $.attr(this, 'href') ).offset().top
    }, 500);
    return false;
  });

      $(document).on('scroll', function() {
          var position = $(document).scrollTop(),
              index;

          for (var i=0; i<parPosition.length; i++) {
              if (position <= parPosition[i]) {
                  index = i;
                  break;
              }
          }

          $('.scrollHead ul li a').removeClass('active');
          $('.scrollHead ul li a:eq('+index+')').addClass('active');
      });

        $('.scrollHead ul li a').click(function () {
    $('.scrollHead ul li a').removeClass('active');
      $(this).addClass('active');
  });
});
