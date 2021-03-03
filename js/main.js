$(document).ready(function(){
    //메뉴 버튼
    $('.menu_btn').click(function(){
        $('.navi').stop().animate({
            left:0
        },500);
    });
    //닫기 버튼
    $('.close').click(function(){
        $('.navi').stop().animate({
            left:'-100vw'
        },500);
    });
    //내비게이션
    //모든 서브메뉴 안보임
    $('.sub').hide();
    //첫번째 메뉴의 서브메뉴만 보임
    $('nav ul li:first-child .sub').show();
    //첫번째 메뉴에 active설정
    $('nav ul li:first > a').addClass('active');
    //주메뉴 클릭하면 각 메뉴에 해당하는 서브메뉴 나타남.
    $('nav ul li a').click(function(){
    $('nav ul li a').removeClass('active');
    $(this).addClass('active');
    $('.sub').hide();
    $(this).next().show();
});
    
    //swiper slide(매인)
    var swiper = new Swiper('.swiper-container', {
    
          autoplay:{
              delay:4000,
          },
          loop:true,
          pagination: {
            el: '.swiper-pagination',
            clickable:true
      }
    });
//family site
    var sw=0;
    $('.family_btn').click(function(){
        if(sw==0){
            sw=1;
            $('.site').addClass('active');
            $('.family_btn span').addClass('active');
        }else{
            sw=0;
            
            $('.site').removeClass('active');
            $('.family_btn span').removeClass('active');
        }
    });




});