
$(document).ready(function($){
      var parPosition = [];

      $('.par').each(function() {
          parPosition.push($(this).offset().top);
          console.log("pre:" + parPosition);
      });

      parPosition[0] += parPosition[1];
      parPosition[1] += (parPosition[2] * 0.9);
      parPosition[2] += (parPosition[1] * 0.6);
      //parPosition[1] += parPosition[2];

      //parPosition[0] = 949;
      //parPosition[1] = 3632;
      //parPosition[2] = 5468;
      console.log("should be 949, 3632, 5468:" + parPosition);
      //parPosition[2] += parPosition[1];
      //parPosition.push(3800);
  $('a').click(function(){
    $('html, body').animate({
      scrollTop: $( $.attr(this, 'href') ).offset().top
    }, 500);
    return false;
  });

      $(document).on('scroll', function() {
          var position = $(document).scrollTop(),
              index;
              console.log("position" + position);
          for (var i=0; i<parPosition.length; i++) {
              if (position <= parPosition[i]) {
                  index = i;
                  console.log("index: " + index + "position: " + position + "parPosition: " + parPosition[i]);
                  break;
              }
          }
//console.log("index: " + index);
          $('.scrollHead ul li a').removeClass('active');
          $('.scrollHead ul li a:eq('+index+')').addClass('active');
      });

      //On click select active-a
      $('.scrollHead ul li a').click(function () {
      $('.scrollHead ul li a').removeClass('active');
      $(this).addClass('active');

  });
});
