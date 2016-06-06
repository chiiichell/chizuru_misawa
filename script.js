
$(function(){
  $('header a').click(function(){
    $("html,body").animate({scrollTop:$($(this).attr('href')).offset().top}, 500);
    return false;
  })

  // more
  $('#read-more').click(function(){
    if($(this).hasClass("active")){
      $('#more-text').fadeOut();
      $('#read-more').removeClass('active').text("more");
    } else {
    $('#more-text').fadeIn();
    $('#read-more').addClass('active').text("close");
   }

  });

  // profile
  $('.profile-box').hover(
   function(){
    $(this).find('p').fadeIn(500);
    },
   function(){
    $(this).find('p').fadeOut(500);
    }
  );

// works
  $('.icon-image').hover(
   function(){
    $(this).find('p').fadeIn(500);
    },
   function(){
    $(this).find('p').fadeOut(500);
    }
  );

  // crousel
  $('.carousel').carousel({
    interval: 2500
  })

  // // icon zoom
  // $('.icon-image').hover(
  //    function(){
  //      $(this).addClass('zoom');
  //      $(this).children('.zoom-black').fadeIn(300);
  //     },
  //     function(){
  //      $(this).removeClass('zoom');
  //      $(this).children('.zoom-black').fadeOut(300);
  //     }
  // );

    // contact
  $('.contact-form form').submit(function(){
    // ”error_flag = false”はエラーを知らせる旗が寝ている状態
    var error_flag = false;
    // each　それぞれのオブジェクトをループ
    $(this).children('input, textarea').each(function(){
      var body = $(this).val();  
      if(!body){
      // エラーを表示
        $(this).prev('.error-message').text('error');
        error_flag = true;
      } else {
　　　   $(this).prev('.error-message').text('');
      }
    });

    if(!error_flag){
      $('.contact-form').html('<h4>thank you !</h4>');
    }
    return false;
  });

});