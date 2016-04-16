$(document).ready(function () {

    /* To avoid FOUC (flash of unstyled content), js class is being added by the code in head. Remove this class from html element now document is ready */
    $('html').removeClass('js');

    $(".fancybox").fancybox({
        'margin': 0,
        'padding': 0,
        'arrows': true,
        'closeBtn': false,
        'closeClick': true
    });

    $(function() {
        FastClick.attach(document.body);
    });


    /*****************   NAV   *****************/

    $(".menu").click(function(){
        $("nav").slideToggle();
        $("body").toggleClass("freeze");
    });

    /* When you tap the button in the mobile navigation, toggle the child menu */
    $(".parent").click(function(e){
        e.stopPropagation();

        $(this).children("ul").slideToggle();

        /* For some reason the default BC javascript to check the "selected" state of a menu item is removing classes set by jquery.
           Therefore need to get creative. Check the background image currently in use, and if it's "submenu.png" change it to "submenu-close.png" when clicked */
        var backgroundImage = $(this).css("backgroundImage");
        var submenuOpenImage = "submenu.png";

        if(backgroundImage.indexOf(submenuOpenImage) != -1) {
            $(this).css("backgroundImage", "url(/images/icons/submenu-close.png)");
        } else {
            $(this).css("backgroundImage", "url(/images/icons/submenu.png)");
        }
    });

    /* To prevent the click event propogating to the parent li, and starting to drop down the child menu
       just before the link is navigated to - you need to stop propogation/bubbling when that link is clicked */
	$(".parent a").click(function(e) {
       e.stopPropagation();
    })

    /* Show and hide back to top button depending on position on page */
    $(window).scroll(function() {
        if($(window).scrollTop() == 0) {
            $(".back-to-top").fadeOut();
        }else{
            $(".back-to-top").fadeIn();
        }
    });

    /* Scroll smoothly to the top of the page if the button is clicked */
    $(".back-to-top").click(function(){
        $("html, body").animate({
            scrollTop: 0
        },500);
    });

});
