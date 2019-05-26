  $(function () {
    $('.arrow').click(function(){
      var attr = $(this).attr('id');

      if (attr == 'th1') {
          $("html,body").animate({
            scrollTop: $('#thread1').offset().top
          },1000);
      }

      if (attr == 'th2') {
          $("html,body").animate({
            scrollTop: $('#thread4').offset().top
          },1000);
      }

      if (attr == 'th3') {
          $("html,body").animate({
            scrollTop: $('#thread3').offset().top
          },1000);
      }
    });

        $('.button-menu').on("click",function(event){
            event.preventDefault();
            console.log($(this).attr('id'));
            var id = $(this).attr('id');
            console.log(id);
            if(id == 'about_me'){
                console.log('znalazłem about_me')

            $('html,body').animate({
            scrollTop: $('#thread1').offset().top
            });
            }

            switch (id) {
                case 'skills':
                $('html,body').animate({
                scrollTop: $('#thread2').offset().top
                });
                    break;
                case  'galery':
                $('html,body').animate({
                  scrollTop: $('#thread4').offset().top
                });
                    break;
                case  'form':
                $('html,body').animate({
                  scrollTop: $('#thread3').offset().top
                });
                    break;
            }
         });

          $(window).scroll(function(){
              if($(this).scrollTop() >800 )
              {
                $("#toTop").fadeIn();
              }
              else
              {
                $("#toTop").fadeOut();
              }
            });
            $("#toTop").click(function(){
              $("html,body").animate( {scrollTop : 0},1000 );
          });

// $(function(){    <!---Pokazywanie się tekstu pod strzałką po hoverze--->

       $('.greeting-section').hide();
    $('.arrow').hover(function(){
      $('.greeting-section').toggle();

    });
  });
