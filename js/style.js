// JavaScript File


//スライドショー
$(window).load(function(){
  $("#list_img img").click(function(){
    var img_src = $(this).attr("src");
    $("#display_img img").attr("src", img_src);
  });
});


// ハンバーガー
$(document).ready(function(){
  $("#menu").click(function(){
    $(".sp_menu_toggle").slideToggle();
  });
});

$(document).ready(function(){
  $(".sb_menu").click(function(){
    $(".menu_toggle").slideToggle();
  });
});

$(document).ready(function(){
  $(".sb_menu2").click(function(){
    $(".menu_toggle2").slideToggle();
  });
});

// カルーセル
$(document).ready(function(){
    $('.owl-carousel').owlCarousel(
        {
          items: 1,
            loop: true,
            nav: false,
            dots: true,
            autoplay: true,
            autoplayTimeout:3000,
            itemsScaleUp : true,
        }
    );
});