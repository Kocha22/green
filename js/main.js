jQuery(document).ready(function() { 
jQuery((function(){
    jQuery(".header__slider").slick({
        infinite:true,
        fade:true,
        dots: true,
        speed: 1000,
        slidesToShow: 1,
        adaptiveHeight: true,
        prevArrow: '<span id="left-arrow" class="slider__arrows slider__arrows-left">&lsaquo;</span>',
        nextArrow: '<span id="right-arrow" class="slider__arrows slider__arrows-right">&rsaquo;</span>',
    });
	
	 jQuery('.news__inner').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        prevArrow: '<span id="left-arrow" class="slider__arrows slider__arrows-newsleft">&lsaquo;</span>',
        nextArrow: '<span id="right-arrow" class="slider__arrows slider__arrows-newsright">&rsaquo;</span>',
        responsive: [
          {
          breakpoint: 1240,
          settings: {
              slidesToShow: 2
              }
          },
          {
            breakpoint: 828,
            settings: {
                slidesToShow: 1,
                }
            }
      ]
    });

    jQuery('.surf-slider').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        prevArrow: '<img src="images/arrow-left.svg" class="slider-arrows slider-arrows__left" alt=""></img>',
        nextArrow: '<img src="images/arrow-right.svg" class="slider-arrows slider-arrows__right" alt=""></img>',
        asNavFor: '.slider-map',
        responsive: [
            {
            breakpoint: 1210,
            settings: {
                slidesToShow: 3
                }
            },
            {
            breakpoint: 900,
            settings: {
                slidesToShow: 2
                }
            },
            {
            breakpoint: 720,
            settings: {
                slidesToShow: 1,
                centerMode: true
                }
            },
            {
            breakpoint: 426,
            settings: {
                slidesToShow: 1,
                centerMode: false
                }
            }
        ]
    });

    jQuery('.slider-map').slick({
        slidesToShow: 8,
        slidesToScroll: 1,
        arrows: false,
        asNavFor: '.surf-slider',
        focusOnSelect: true,
        responsive: [
            {
            breakpoint: 1103,
            settings: {
                slidesToShow: 3
                }
            },
            {
            breakpoint: 1064,
            settings: {
                slidesToShow: 2,
                centerMode: true
                }
            },
            {
            breakpoint: 720,
            settings: {
                slidesToShow: 1,
                centerMode: true
                }
            }
        ]
    });

    jQuery(".travel__slider, .shop__slider").slick({
        infinite:true,
        fade:true,
        prevArrow: '<img src="images/arrow-left.svg" class="slider-arrows slider-arrows__left" alt=""></img>',
        nextArrow: '<img src="images/arrow-right.svg" class="slider-arrows slider-arrows__right" alt=""></img>',
        asNavFor: '.slider-dots'
    });

    jQuery('<div class="quantity-nav"><div class="quantity-button quantity-up"><img src="images/plus.svg" alt=""></div><div class="quantity-button quantity-down"><img src="images/minus.svg" alt=""></div></div>').insertAfter('.quantity input');
    jQuery('.quantity').each(function() {
      var spinner = jQuery(this),
        input = spinner.find('input[type="number"]'),
        btnUp = spinner.find('.quantity-up'),
        btnDown = spinner.find('.quantity-down'),
        min = input.attr('min'),
        max = input.attr('max');

      btnUp.click(function() {
        var oldValue = parseFloat(input.val());
        if (oldValue >= max) {
          var newVal = oldValue;
        } else {
          var newVal = oldValue + 1;
        }
        spinner.find("input").val(newVal);
        spinner.find("input").trigger("change");
      });

      btnDown.click(function() {
        var oldValue = parseFloat(input.val());
        if (oldValue <= min) {
          var newVal = oldValue;
        } else {
          var newVal = oldValue - 1;
        }
        spinner.find("input").val(newVal);
        spinner.find("input").trigger("change");
      });

    });

     jQuery('.quantity-button').on('click', function() {
        let summ = $('.nights').val() * jQuery('.summ').data('nights') + (jQuery('.guests').val()-1)*jQuery('.summ').data('guests');
        jQuery('.summ').html('$' + summ);
     });

     let summ = jQuery('.nights').val() * jQuery('.summ').data('nights') + (jQuery('.guests').val()-1)*jQuery('.summ').data('guests');
     jQuery('.summ').html('$' + summ);

     jQuery('.surfboard-box__circle').on('click', function() {
        jQuery(this).toggleClass('active')
     });

     jQuery('.menu-btn').on('click', function() {
        jQuery('.menu').toggleClass('active');
     });

     var swiper = new Swiper(".mySwiper", {
		  slidesPerView: 3,
		  spaceBetween: 30,
		  pagination: {
			el: ".swiper-pagination",
			clickable: true,
		  },
		  navigation: {
			  nextEl: ".swiper-button-next",
			  prevEl: ".swiper-button-prev"
		  }
     });

      var swiper2 = new Swiper(".trustSwiper", {
        effect: "coverflow",
        grabCursor: true,
        centeredSlides: true,
        loop: true,
        slidesPerView: 'auto',
        coverflowEffect: {
            rotate: 5,
            stretch: 10,
            depth: 200,
            modifier: 3, // 2,3
            slideShadows : true,
              },
              pagination: {
                el: ".swiper-pagination",
                clickable: true,
              },
          navigation: {
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev"
          }
      });
	
	  var ww = document.body.clientWidth;

      jQuery(".menu__list li a").each(function() {
        if (jQuery(this).next().length > 0) {
          jQuery(this).addClass("parent");
        };
      })
      
      jQuery(".hamburger").click(function(e) {
        e.preventDefault();
        jQuery(this).toggleClass("active");
        jQuery(".menu__list").toggle();
      });
      adjustMenu();

      jQuery(window).bind('resize orientationchange', function() {
        ww = document.body.clientWidth;
        adjustMenu();
      });

      function adjustMenu() {
        if (ww < 1020) {
          jQuery(".hamburger").css("display", "block");
          if (!jQuery(".hamburger").hasClass("active")) {
            jQuery(".menu__list").hide();
          } else {
            jQuery(".menu__list").show();
          }
          jQuery(".menu__list li").unbind('mouseenter mouseleave');
          jQuery(".menu__list li a.parent").unbind('click').bind('click', function(e) {
            // must be attached to anchor element to prevent bubbling
            e.preventDefault();
            jQuery(this).parent("li").toggleClass("hover");
          });
        } 
        else if (ww >= 1020) {
          jQuery(".hamburger").css("display", "none");
          jQuery(".menu__list").show();
          jQuery(".menu__list li").removeClass("hover");
          jQuery(".menu__list li a").unbind('click');
          jQuery(".menu__list li").unbind('mouseenter mouseleave').bind('mouseenter mouseleave', function() {
            // must be attached to li so that mouseleave is not triggered when hover over submenu
            jQuery(this).toggleClass('hover');
          });
        }
      }  
   

      new WOW().init();
}));
	});