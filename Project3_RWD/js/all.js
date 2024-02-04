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

      $('.fa-bars').click(function (event){
        event.preventDefault();
        $('body').toggleClass("showBurger");
      })
    });