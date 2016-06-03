
$(function(){
  $('header a').click(function(){
    $("html,body").animate({scrollTop:$($(this).attr('href')).offset().top}, 500);
    return false;
  })

  // もっと詳しく
  $('#read-more').click(function(){
    if($(this).hasClass("active")){
      $('#more-text').fadeOut();
      $('#read-more').removeClass('active').text("history");
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
  $('.works-box').hover(
   function(){
    $(this).find('p').fadeIn(500);
    },
   function(){
    $(this).find('p').fadeOut(500);
    }
  );

  // カルーセルスライダー部分
  $('.carousel').carousel({
    interval: 2500
  })

  // コラム画像
  $('.column-image').hover(
     function(){
       $(this).addClass('zoom');
       $(this).children('.zoom-black').fadeIn(300);
      },
      function(){
       $(this).removeClass('zoom');
       $(this).children('.zoom-black').fadeOut(300);
      }
  );

    // コラム整理
  $('.filter-item').click(function(){
    $('.filter-item').removeClass('active');
    $(this).addClass('active');
    var id = $(this).attr('id');
    if (id === 'all'){
    $('.column-box').fadeIn();
    } else {
      $('.column-box-wrapper').children('.' + id).fadeIn();
      $('.column-box').not('.' + id).fadeOut();
    }
  });

    // お問い合わせフォーム
  $('.contact-form form').submit(function(){
    // ”error_flag = false”はエラーを知らせる旗が寝ている状態
    var error_flag = false;
    // each　それぞれのオブジェクトをループ
    $(this).children('input, textarea').each(function(){
      var body = $(this).val();  
      if(!body){
      // エラーを表示
        $(this).prev('.error-message').text('入力してください');
        error_flag = true;
      } else {
　　　   $(this).prev('.error-message').text('');
      }
    });

    if(!error_flag){
      $('.contact-form').html('<h4>お問い合わせありがとうございます</h4>');
    }
    return false;
  });

});