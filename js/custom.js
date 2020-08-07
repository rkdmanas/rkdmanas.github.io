// $(document).ready(function() {
 
//   $("#owl-demoes").owlCarousel({
 
//       autoplayTimeout: 3000, //Set AutoPlay to 3 seconds
//       autoplay: true,
//       loop:true,
//       items : 6,
//       dots: false,
//       responsive:{
//         0:{
//             items:1,
//             nav:true
//         },
//         600:{
//             items:2,
//             nav:true
//         },
//         1000:{
//             items:5,
//             nav:true
            
//         }
//     }
 
//   });
 
// });
$(document).ready(function() {
    $("#news-slider").owlCarousel({
        items:1,
        itemsDesktop:[1199,2],
        itemsDesktopSmall:[1000,2],
        itemsMobile:[700,1],
        pagination:false,
        navigationText:false,
        autoPlay:true
    });
});
$(function(){
    var header = $(".social");
    // var headnew = $(".dropdown-menu");
  
    $(window).scroll(function() {    
        var scroll = $(window).scrollTop();
        if (scroll >= 200) {
            header.addClass("scrolled");
             // headnew.addClass("menu");
        } else {
            header.removeClass("scrolled");
            // headnew.removeClass("menu");
        }
    });
  
});
// $(function() {
//     var headnew = $(".header");
  
//     $(window).scroll(function() {    
//         var scroll = $(window).scrollTop();
//         if (scroll >= 5) {
//              headnew.addClass("newdown");
//         } else {
//             headnew.removeClass("newdown");
//         }
//     });
  
// });
// $(function() {
//     var headnewup = $(".header");
  
//     $(window).scroll(function() {    
//         var scroll = $(window).scrollDown();
//         if (scroll >= 5) {
//              headnewup.addClass("newdown-up");
//         } else {
//             headnewup.removeClass("newdown-up");
//         }
//     });
  
// });
function isValidUrl(url){

 var myVariable = url;
    if(/^(http|https|ftp):\/\/[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/i.test(myVariable)) {
      return 1;
    } else if(/^[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/i.test(myVariable)) {
      return 1;
    } else {
      return -1;
    }   
}
$("#websubmit").click(function(e){
  if (isValidUrl($("#webURL").val())==1){
            var weburl = $("#webURL").val();
  $("#webURLformpost").val(weburl);
  //alert($("#webURL").val());
  e.preventDefault();
   var jQuerynewEl = $('<div class="outerwht"></div>');
   jQuerynewEl.on("click", function(){$(this).remove();});
   $(this).parents('body').find('.form-contact-us').prepend(jQuerynewEl);
     //var target = $(this).attr('href');
     $('html, body').animate({
       scrollTop: ($('#form-open').offset().top)-50
   }, 2000);
   $(".md-form ").next().slideDown();
   $(".md-form ").addClass('active');
   $('#form-open').focus();   
        }
    else{
      alert("Please enter valid Website URL");
      return false;
    }
  
});

(function ($) {
  $.fn.countTo = function (options) {
    options = options || {};

    return $(this).each(function () {
      // set options for current element
      var settings = $.extend({}, $.fn.countTo.defaults, {
        from:            $(this).data('from'),
        to:              $(this).data('to'),
        speed:           $(this).data('speed'),
        refreshInterval: $(this).data('refresh-interval'),
        decimals:        $(this).data('decimals')
      }, options);

      // how many times to update the value, and how much to increment the value on each update
      var loops = Math.ceil(settings.speed / settings.refreshInterval),
        increment = (settings.to - settings.from) / loops;

      // references & variables that will change with each update
      var self = this,
        $self = $(this),
        loopCount = 0,
        value = settings.from,
        data = $self.data('countTo') || {};

      $self.data('countTo', data);

      // if an existing interval can be found, clear it first
      if (data.interval) {
        clearInterval(data.interval);
      }
      data.interval = setInterval(updateTimer, settings.refreshInterval);

      // initialize the element with the starting value
      render(value);

      function updateTimer() {
        value += increment;
        loopCount++;

        render(value);

        if (typeof(settings.onUpdate) == 'function') {
          settings.onUpdate.call(self, value);
        }

        if (loopCount >= loops) {
          // remove the interval
          $self.removeData('countTo');
          clearInterval(data.interval);
          value = settings.to;

          if (typeof(settings.onComplete) == 'function') {
            settings.onComplete.call(self, value);
          }
        }
      }

      function render(value) {
        var formattedValue = settings.formatter.call(self, value, settings);
        $self.text(formattedValue);
      }
    });
  };

  $.fn.countTo.defaults = {
    from: 0,               // the number the element should start at
    to: 0,                 // the number the element should end at
    speed: 1000,           // how long it should take to count between the target numbers
    refreshInterval: 100,  // how often the element should be updated
    decimals: 0,           // the number of decimal places to show
    formatter: formatter,  // handler for formatting the value before rendering
    onUpdate: null,        // callback method for every time the element is updated
    onComplete: null       // callback method for when the element finishes updating
  };

  function formatter(value, settings) {
    return value.toFixed(settings.decimals);
  }
}(jQuery));

    jQuery(function ($) {
     
      $('.timer').each(count);
      
      $( window ).scroll(function () {($(window).scrollTop());
    if($(window).scrollTop() > 2000 && $(window).scrollTop() < 3000)
    {
       $('.timer').each(count);
     }
      });
      
      function count(options) {
        var $this = $(this);
        options = $.extend({}, options || {}, $this.data('countToOptions') || {});
        $this.countTo(options);
      }
    });