$(document).ready(function() {

    // 메인 네비게이션 드롭다운

    $('#mainNav>li').click(function(e){
        e.preventDefault();
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
        if($(e.target).parents('#mainNav>li').length < 1){
            $('#mainNav>li').removeClass('active');
            $('.dropdown').css('display', 'none');
        }

        if($(e.target).parents('#csBtn').length < 1){
            $('#csBtn').removeClass('active');
            $('.cs_dropdown').css('display', 'none');
        }
    });
    
});