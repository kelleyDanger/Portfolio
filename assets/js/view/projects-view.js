$(document).ready(function() {
    var ProjectsView = Backbone.View.extend({
        el: "#projects",
        initialize: function() {
            this.model = new Projects();
            this.model.fetch();
            this.model.bind('change', this.render, this);
            this.nodeTemplate = $("#projects-template").html();
        },
        render: function() {
            var template = _.template( this.nodeTemplate, this.model.toJSON() );
            console.log(this.model.toJSON());
            this.$el.html(template);
        }
    });

    var ProjectsView = new ProjectsView();
});