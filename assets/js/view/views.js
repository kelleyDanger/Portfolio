var IndexView = Backbone.View.extend({
    el: "#content",
    initialize: function() {
        this.model = new Index();
        this.model.fetch();
        this.model.bind('change', this.render, this);
        this.template = $("#index_template").html();
    },
    render: function() {
        var template = _.template( this.template );
        console.log(this.model.toJSON());
        console.log(this.model.toJSON().skills.text);
        this.$el.html(template({
            quote: this.model.toJSON().quote,
            introduction: this.model.toJSON().introduction, 
            skills: this.model.toJSON().skills
        }));
    }
});


var ProjectsView = Backbone.View.extend({
    el: "#content",
    initialize: function() {
        this.model = new Projects();
        this.model.fetch();
        this.model.bind('change', this.render, this);
        this.template = $("#projects_template").html();
    },
    render: function() {
        var template = _.template( this.template );
        console.log(this.model.toJSON());
        this.$el.html(template(this.model.toJSON()));
    }
});

var ResumeView = Backbone.View.extend({
    el: "#content",
    initialize: function() {
        this.model = new Resume();
        this.model.fetch();
        this.model.bind('change', this.render, this);
        this.template = $("#resume_template").html();
    },
    render: function() {
        var template = _.template( this.template );
        console.log(this.model.toJSON());
        this.$el.html(template(this.model.toJSON()));
    }
});

var ContactView = Backbone.View.extend({
    el: "#content",
    initialize: function() {
        this.model = new Contact();
        this.model.fetch();
        this.model.bind('change', this.render, this);
        this.template = $("#contact_template").html();
    },
    render: function() {
        var template = _.template( this.template );
        console.log(this.model.toJSON());
        this.$el.html(template(this.model.toJSON()));
    }
});
