(function($) {
    var $window = $(window),
        $html = $('html');

    $('.nav a').on('click', function(){
        $(".navbar-toggle").click() 
    });
  
    
    
    // toggle up and down chevron on Projects accordion
    function toggleChevron(e) {
        $(e.target)
            .prev('.panel-heading')
            .find(".indicator")
            .toggleClass('fa-chevron-down fa-chevron-up');
    }
    
    // togggle chevrons listener
    $(document).on('hidden.bs.collapse', '.collapse', toggleChevron);
    $(document).on('shown.bs.collapse', '.collapse', toggleChevron);
    
})(jQuery);