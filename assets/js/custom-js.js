(function($) {
    var $window = $(window),
        $html = $('html');

    function resize() {
        var width = $window.width(),
            education = $('#education-div'),
            jobs = $('#jobs-seeking-div');
        
        if (width >767 && width < 992) {
            education.removeClass();
            education.addClass('mobile');
        }
    }

    $window
        .resize(resize)
        .trigger('resize');
    
    
    // toggle up and down chevron on Projects accordion
    function toggleChevron(e) {
        console.log("toggling chevron");
//        $(e.target)
//            .prev('.panel-heading')
//            .find("i.indicator")
//            .toggleClass('fa fa-chevron-down, fa fa-chevron-up');
    }
    
    $('#accordion').on('hidden.bs.collapse', toggleChevron);
    $('#accordion').on('shown.bs.collapse', toggleChevron);
    
})(jQuery);