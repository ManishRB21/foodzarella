$(document).ready(function() {
    
    
    /* For the sticky navigation */
    $('.js-about').waypoint(function(direction) {
        if (direction == "down") {
            $('nav').addClass('sticky');
        } else {
            $('nav').removeClass('sticky');
        }
    }, {
      offset: '60px;'
    });
});
/*----------buttn-------*/
 $('.js-hungry').click(function () {
       $('html, body').animate({scrollTop: $('.js-plan').offset().top}, 1000); 
    });
    
    $('.js-show').click(function () {
       $('html, body').animate({scrollTop: $('.js-about').offset().top}, 1000); 
    });
/*----------smooth scrolling for nav*/
$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });
/*------------animation to sec----*/
$('.animate1').waypoint(function(direction) {
        $('.animate1').addClass('animated fadeIn');
    }, {
        offset: '50%'
    });
    
    $('.animate2').waypoint(function(direction) {
        $('.animate2').addClass('animated fadeInUp');
    }, {
        offset: '50%'
    });
    
    $('.animate3').waypoint(function(direction) {
        $('.animate3').addClass('animated fadeIn');
    }, {
        offset: '50%'
    });
    
    $('.animate4').waypoint(function(direction) {
        $('.animate4').addClass('animated pulse');
    }, {
        offset: '50%'
    });

/* Mobile navigation */
    $('.js--nav-icon').click(function() {
        var nav = $('.js-nav');
        var icon = $('.js--nav-icon i');
        
        nav.slideToggle(200);
        
        if (icon.hasClass('ion-navicon-round')) {
            icon.addClass('ion-close-round');
            icon.removeClass('ion-navicon-round');
        } else {
            icon.addClass('ion-navicon-round');
            icon.removeClass('ion-close-round');
        }        
    });