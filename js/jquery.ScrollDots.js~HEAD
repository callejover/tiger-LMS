


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

      $.fn.isInViewport = function() {
          var elementTop = $(this).offset().top;
          var elementBottom = elementTop + $(this).outerHeight();

          var viewportTop = $(window).scrollTop();
          var viewportBottom = viewportTop + $(window).height();

          return elementBottom > viewportTop && elementTop < viewportBottom;
      };

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

          $(window).on('scroll', function() {
              if ($('#selection1').isInViewport()) {
                $('.scrollHead ul li a #dot1:eq('+index+')').addClass('active');
              } else if ($('#selection2').isInViewport()) {
                $('.scrollHead ul li a #dot2:eq('+index+')').addClass('active');
              } else if ($('#selection3').isInViewport()) {
                $('.scrollHead ul li a #dot3:eq('+index+')').addClass('active');
              } else if ($('#selection4').isInViewport()) {
                  $('.scrollHead ul li a #dot4:eq('+index+')').addClass('active');
              } else {
                  $('.scrollHead ul li a:eq('+index+')').addClass('active');
              }
      });

        $('.scrollHead ul li a').click(function () {
        $('.scrollHead ul li a').removeClass('active');
        $(this).addClass('active');
  });

});
});

/*
 error message says that isInViewport is not defined. Check with kristian what to do.

*/
