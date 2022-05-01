$('.nav-button').on('click',function(e){
    e.preventDefault;
    $('.dropdown').toggleClass('dropdown_active');   
});

$('.menu-button').on('click',function(e){
    e.preventDefault;
    $('.dropdown_menu').toggleClass('dropdown_active');  
});
$(function() {
    $(window).scroll(function() {
        if($(this).scrollTop() != 0) {
        $('#toTop').fadeIn();    
        } else {
        $('#toTop').fadeOut();
        }
    });
    $('#toTop').click(function() {
    $('body,html').animate({scrollTop:0},800);
    });
});
    