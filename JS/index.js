(function($) {
    "use strict"; // Start of use strict

    /*attach/remove class navChange on scroll*/
    $(window).scroll(function() {
        if ($(window).scrollTop() > 100) {
            $('#contentNav').addClass('navChange');
        } else {
            $('#contentNav').removeClass('navChange');
        }
    });
})(jQuery); // End of use strict