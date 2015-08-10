var IndexView = Backbone.View.extend({
        el: "#content",
        initialize: function() {
            console.log("inside IndexView initialize");
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
                introduction: this.model.toJSON().introduction, 
                skills: this.model.toJSON().skills
            }));
        }
    });


    var ProjectsView = Backbone.View.extend({
        el: "#content",
        initialize: function() {
            console.log("inside ProjectsView initialize");
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
