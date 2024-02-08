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

      // Mainpage Menu
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
      // Burger menu toggle
      $('.fa-bars').click(function (event){
        event.preventDefault();
        $('body').toggleClass("showBurger");
      })

      // produce page
      $('.proCategories li').click(function(event){
        event.preventDefault();
        $(this).siblings().find('a').removeClass('active');
        $(this).find('a').addClass('active');
      });

      $('.liked').click(function (event) { 
        event.preventDefault();
        $(this).toggleClass('favorite');
       });

       $('.addToCart').click(function (event){
        let inCart = parseInt($('.inCart').text()) + 1;
        $('.inCart').html(inCart);
       });

       $('#register').click(function(event){
        event.preventDefault();
        $('.login').css('display', 'none');
        $('.register').css('display', 'block');
       });

       $('#haveAcc').click(function(event){
        event.preventDefault();
        $('.register').css('display', 'none');
        $('.login').css('display', 'flex');
       });

    });