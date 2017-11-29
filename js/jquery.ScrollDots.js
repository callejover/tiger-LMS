$(document).ready(function($){
      var parPosition = [];

      $('.par').each(function() {
          parPosition.push($(this).offset().top);
      });

      parPosition[0] += parPosition[1];
      parPosition[1] += (parPosition[2] * 0.9);
      parPosition[2] += (parPosition[1] * 0.6);

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

      //On click select active-a
      $('.scrollHead ul li a').click(function () {
      $('.scrollHead ul li a').removeClass('active');
      $(this).addClass('active');

  });
});
