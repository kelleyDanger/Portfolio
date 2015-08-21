(function($) {
    var $window = $(window),
        $html = $('html');

    // close navigation on link click
    $('.navbar a').on('click', function(){
        console.log("clicked!");
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