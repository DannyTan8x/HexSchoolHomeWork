$(document).ready(function(){
    $('.button').click(function (e) { 
        e.preventDefault();

        // $('.text').toggle();
        $('.text').fadeToggle();
    });

    $('.top').click(function(event){
        event.preventDefault();
        $('html,body').animate({
          scrollTop: 0
        },1);
        $('#pageTop').addClass('active').siblings().removeClass('active');
      });




      $('.menu').click(function(event){
        // event.preventDefault();
            $(this).addClass('active').siblings().removeClass('active');
            $(this).find('.dropdown').toggleClass('active');
            $(this).siblings().find('.dropdown').removeClass('active');
      });
      

      $('#showMenu').click(function(event){
        event.preventDefault();
        $('.homeMenu').css("transform", "translateX(0%)");
        $('#hideMenu').css("display", "block");
        $(this).css("display", "none");
      });

      $('#hideMenu').click(function(event){
        event.preventDefault();
        $('.homeMenu').css("transform", "translateX(-80%)");
        $('#showMenu').css("display", "block");
        $(this).css("display", "none");
      });

      lightbox.option({
        'resizeDuration': 200,
        'wrapAround': true,
        'fitImagesInViewport': true,
        'maxHeight': 500,
      })


    })


    const swiper = new Swiper('.swiper', {
      // autoplay
      autoplay: {
        delay: 3000,
      },
      // Optional parameters
      // direction: 'vertical',
      loop: true,
    
      // If we need pagination
      pagination: {
        el: '.swiper-pagination',
      },
    
      // Navigation arrows
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    
      // And if we need scrollbar
      scrollbar: {
        el: '.swiper-scrollbar',
      },
    });