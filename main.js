$( document ).ready(function() {
    var $animation_elements = $('.animation-element');
    var $window = $(window);

    $window.on('scroll', check_if_in_view);

    $window.trigger('scroll');

    function check_if_in_view() {
        var window_height = $window.height();
        var window_top_position = $window.scrollTop();
        var window_bottom_position = (window_top_position + window_height);

        $.each($animation_elements, function() {
            var $element = $(this);
            var element_height = $element.outerHeight();
            var element_top_position = $element.offset().top;
            var element_bottom_position = (element_top_position + element_height);

            //check to see if this current container is within viewport
            if ((element_bottom_position >= window_top_position) &&
                (element_top_position <= window_bottom_position)) {
                $element.find('h1').addClass('animated fadeInUp');
            } else {
                $element.find('h1').removeClass('animated fadeInUp');
            }
        });
    }
});