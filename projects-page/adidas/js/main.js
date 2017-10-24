$(document).ready(function () {

    // ===========================
    // Mobile Nav
    // ===========================

    $('.hamburger').click(function () {
        if ($('.mobile-nav').hasClass('hidden')) {
            $('.fa').removeClass('fa-bars').addClass('fa-times');
            $('.mobile-nav').slideDown("slow", function () {
                $('.mobile-nav').removeClass('hidden');
            });
        } 
        
        else {
            $('.fa').removeClass('fa-times').addClass('fa-bars');
            $('.mobile-nav').slideUp("slow", function () {
                $('.mobile-nav').addClass('hidden');
            });
        }
    });


    // ===========================
    // Nav Active Links
    // ===========================

    $('.nav-link').on('click', function(){
        $('.nav-link').removeClass('nav-link-active');
        $(this).addClass('nav-link-active');
    });


    // ===========================
    // Date Active Links
    // ===========================

    $('.date').on('click', function(){
        $('.date').removeClass('date-active');
        $(this).addClass('date-active');
    });

});