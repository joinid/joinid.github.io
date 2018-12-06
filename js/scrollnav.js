(function($) {          
          $(document).ready(function(){                    
              $(window).scroll(function(){                          
                  if ($(this).scrollTop() > 170) {
                      $('nav').fadeIn(130);
                  } else {
                      $('nav').fadeOut(110);
                  }
              });
          });
})(jQuery);