// 페이지 업 버튼

function pageUp(){
    window.scrollTo({ top: 0, behavior: 'smooth' });
};


$(document).ready(function() {


    // 알림 컨텐츠 토글

    $('#notiBtn').click(function(){
        $(this).next('.noti_content').toggle();
    });

    $('html').click(function(e){
        if($(e.target).parents('.notification').length < 1){
            $('.noti_content').hide();
        }
    });

    // 프로필 컨텐츠 토글

    $('#userMenuBtn').click(function(){
        $(this).next('.profile_content').toggle();
    });

    $('html').click(function(e){
        if($(e.target).parents('.profile').length < 1){
            $('.profile_content').hide();
        }
    });

    // 단지고객 탑메뉴 확장

    $('#listExtend').click(function(){
        if ($('#topList').height() <= 90){
            $('#topList').css('height', 'auto');
            $(this).addClass('active');
        } else {
            $('#topList').css('height', '90px');
            $(this).removeClass('active');
        }
    });

    // 단지고객 컨텍스트 메뉴

    $(function(){
        $.contextMenu({
            selector: '#complexTable td', 
            trigger: 'left',
            callback: function(key, options) {
                var m = "clicked: " + key;
                window.console && console.log(m) || alert(m); 
            },
            items: $.contextMenu.fromMenu($('#complexMenu'))
        });
    });

    // 단지고객 스크롤 상단고정

    $(window).scroll(function(){
        let num = $(window).scrollTop();

        if (num > 90) {
            $('#complexNav').hide();
            $('#stickyNav').show();
        } else {
            $('#complexNav').show();
            $('#stickyNav').hide();
        }

    });

    // 단지고객 리스트목록 테이블 헤더 드롭다운

    $('#thMenuBtn_1,#thMenuBtn_2,#thMenuBtn_3,#thMenuBtn_4').click(function(){

        if ($(this).hasClass('active')){
            $(this).removeClass('active');
        } else {
            $(this).addClass('active');
        }

        $(this).next('.th_dropdown').toggle();
    });

    $('html').click(function(e){
        if($(e.target).parents('.has_menu').length < 1){
            $('.th_dropdown').hide();
            $('#thMenuBtn_1,#thMenuBtn_2,#thMenuBtn_3,#thMenuBtn_4').removeClass('active');
        }
    });

    // 모바일 안내 확인사항 폴드

    $('#foldBtn').click(function(){

        if ($('#foldContent').is(':visible')){
            $(this).html('<img src="/web/img/fold_btn_arrow_down.svg">상세설명 열기');
            $('#foldContent').slideUp();
        } else {
            $(this).html('<img src="/web/img/fold_btn_arrow_up.svg">상세설명 닫기');
            $('#foldContent').slideDown();
        }
    })



    // 충전금 결제관리 탭메뉴

    $( function() {
        $( "#tabs" ).tabs();
      } );

    // 환불 정산 안내 버튼 노출

    $('#tabsBtn1').click(function(){
        $('#refundInfo').removeClass('show');
    });

    $('#tabsBtn2').click(function(){
        $('#refundInfo').addClass('show');
    });
});

