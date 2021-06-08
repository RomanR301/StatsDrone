let front = {
  hamburger: $('.hamburger'),
  nav: $('.navbar'),
  $body: $('body'),
  init: function () {
      this.events();
      var partnersSlider = new Swiper(".partners-slider", {
        slidesPerView: 6,
        spaceBetween: 60,
        allowTouchMove: false,
        loop: true,
        grabCursor: false,
        pagination: {
          el: ".partners-slider__pagination",
          clickable: true,
        },
        breakpoints: { 
          320: {
            slidesPerView: 2,
            spaceBetween: 30,
            allowTouchMove: true,
            grabCursor: true,
          },
          767: {
            slidesPerView: 3,
            spaceBetween: 30,
            allowTouchMove: true,
            grabCursor: true,
          },
          993: {
            slidesPerView: 6,
            spaceBetween: 30,
            allowTouchMove: false,
          }
        }

      });

      var testimonialsSlider = new Swiper(".testimonials-slider", {
        slidesPerView: 'auto',
        grabCursor: true,
        // loop: true,
        // loopedSlides: 5,
        pagination: {
          el: ".testimonials-slider__pagination",
          clickable: true,
        },
        breakpoints: { 
          320: {
            slidesPerView: 1,
            autoHeight: true,
            spaceBetween: 30,
            allowTouchMove: true,
          },
          767: {
            slidesPerView:'auto',
            spaceBetween: 30,
            centeredSlides: false,
            autoHeight: false,
          },
        }

      });
      // swiper.mousewheel.disable();
  },
  toggleNav: function () {
    if (!this.hamburger.hasClass('open')) {
        this.hamburger.addClass('open');
        this.nav.toggleClass('active');
        this.$body.addClass('active')
        } else {
            this.hamburger.removeClass('open');
            this.nav.toggleClass('active');
            this.$body.removeClass('active')
        }
    },  


  openTab: function (element, tabName, parent) {
      let i, tab_content, tab_links;

      tab_content = $(element).closest(parent).find('.tab-content');

      for (i = 0; i < tab_content.length; i++) {
          tab_content[i].style.display = "none";
      }

      tab_links = $(element).closest('.tabs-ul').find('.tab-links');

      for (i = 0; i < tab_links.length; i++) {
          tab_links[i].className = tab_links[i].className.replace(" active", "");
      }

      document.getElementById(tabName).style.display = "block";
      $(element).addClass('active');
  },

  events: function () {
      let self = this;
      $(document).on('click', '.hamburger', function () {
          self.toggleNav();
      });
      if(window.matchMedia('(max-width: 767px)').matches){
        $(document).on('click', '.menu-item-has-child i', function(){
          $(this).parent().find('.sub-menu').toggle();
          // if ($(this).parent().hasClass('open') ) {
          //   $(this).parent().removeClass('open');
          //   $(this).parent().next('.sub-menu').hide();
     
          // } else {
          //   $(this).parent().addClass('open');
          //   $(this).parent().next('.sub-menu').show();
     
          // }
        })
      }
      $(window).scroll(function () {
        if ($(this).scrollTop() > 5 ) {
          $('.header').addClass("scroll");
        } else {
          $('.header').removeClass("scroll");
        }
      });
      $(document).ready(function() {
        $(".accordion__item .accordion__button").on("click", function(e) {
        e.preventDefault();
            if ($(this).parent().hasClass("active")) {
            $(this).parent().removeClass("active");
            $(this).parent().find(".accordion__content").slideUp(200);
            } else {
            $(".accordion__item").removeClass("active");
            $(this).parent().addClass("active");
            $(".accordion__content").slideUp(200);
            $(this).parent().find(".accordion__content").slideDown(200);
            }
        });
      });
  }
};




jQuery(function () {
  front.init();    
});

