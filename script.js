$(function(){
  //スクロール
  $('.main a').click(function(){
      var speed = 500;
      var href= $(this).attr("href");
      var target = $(href == "#" || href == "" ? 'html' : href);
      var position = target.offset().top;
      $("html, body").animate({scrollTop:position}, speed, "swing");
     return false;
    });
  // });
  
 //文字
  var $allMsg = $('.main h1');
    var $wordList = $('.main h1').html().split("");
    $('.main h1').html("");
    $.each($wordList, function(idx, elem) {
        var newEL = $("<span/>").text(elem).css({ opacity: 0 });
        newEL.appendTo($allMsg);
        newEL.delay(idx * 70);
        newEL.animate({ opacity: 1 }, 1100);
    });
  

  //モーダル
  $('.works-modal').each(function(){
    $(this).click(function(){
        $(".modal__content").append("<img>")
        $(".modal__content img").attr("src",$(this).attr("href"))
        if($(this).attr("href") == "isara摸写（全体）.png"){
          $(".modal__content img").attr("width",80);
        $(".modal__content img").attr("height",500);
        } else {
          $(".modal__content img").attr("width",200);
        $(".modal__content img").attr("height",500);
        }
        
        winScrollTop = $(window).scrollTop();
        var target = $(this).data('target');
        var modal = document.getElementById(target);
        $(".modal").fadeIn();
        return false;
    });
});
$('.js-modal-close').click(function(){
    $('.js-modal').fadeOut(function(){
      $(".modal__content img").remove();
    });
    $('body,html').stop().animate({scrollTop:winScrollTop}, 100);
    return false;
}); 


  //キャプション表示
  $(".works-content li").append('<div class="caption"></div>');
  $(".caption").each(function(){
    $(this).html("<p>" + $(this).parent().find("img").attr("alt") + "</p>");
  });
  $(".works-content li").hover(function(){
    $(this).children(".caption").stop().fadeIn(300);
    $(this).children(".caption").find("p").stop().animate({"top" : "50px"}, 300);
  },function(){
    $(this).children(".caption").stop().fadeOut(300);
    $(this).children(".caption").find("p").stop().animate({"top":"100px"}, 300);
  });


  //タブ
  $('#contents div[id !="tab1"]').hide();

$(".service-container ul li a").click(function(){
  $("#contents div").hide();

  $($(this).attr("href")).show();

  $(".current").removeClass("current");
  $(this).addClass("current");
  return false;
});

//fadein
$(window).scroll(function (){
  $('.fadein').each(function(){
    var position = $(this).offset().top;
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();
    if (scroll > position - windowHeight + 200){
      $(this).addClass('scrollin');
    }
  });
});

//レスポンシブのヘッダー
$(".nav-2-head i").click(function(){
  $(".nav-2 ul").slideToggle(200);
})


});
