$(document).ready(function() {

    // 서브 네비게이션 드롭다운

    $('#mainNav>li').click(function(e){
        $('#mainNav>li').removeClass('active');
        $(this).addClass('active');
        $('.dropdown').not($(this).find('.dropdown').css('display', 'flex')).css('display', 'none');
    });

    $('#csBtn').click(function(e){
        e.preventDefault();
        $('#csBtn').removeClass('active');
        $(this).addClass('active');
        $('.cs_dropdown').not($(this).find('.cs_dropdown').css('display', 'flex')).css('display', 'none');
    });
    
    $('html').click(function(e){
        if($(e.target).parents('#csBtn').length < 1){
            $('#csBtn').removeClass('active');
            $('.cs_dropdown').css('display', 'none');
        }
    });

    // 스크롤 다운시 드롭다운 하이드 처리

    $(window).scroll(function(){
        let num = $(window).scrollTop();

        if (num > 90) {
            $('.dropdown').css('display', 'none');
            $('#mainNav>li').removeClass('active');
        } else {
            $('.dropdown').css('display', 'flex');
        }

    });
    
});