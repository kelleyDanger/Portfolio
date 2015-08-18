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
        $(e.target)
            .prev('.panel-heading')
            .find(".indicator")
            .toggleClass('fa-chevron-down fa-chevron-up');
    }
    
    // togggle chevrons listener
    $(document).on('hidden.bs.collapse', '.collapse', toggleChevron);
    $(document).on('shown.bs.collapse', '.collapse', toggleChevron);
    
})(jQuery);