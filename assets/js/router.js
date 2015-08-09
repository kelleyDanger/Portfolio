$(document).ready(function() {  
    
    var Router = Backbone.Router.extend({

        //greeting: null,
        navigation: null,
        container: null,
        index: null,
        projects: null,
        resume: null,
        contact: null,

        initialize: function() {
            // enables back button to work properly
            console.log("inside intialize");
            Backbone.history.start();  
        },

    //    initialize: function() {
    //        //this.greeting = new GreetModel({ Message: "Hello world" });
    //        this.navigation = new NavigationModel();
    //        this.container = new ContainerView({ el: $("#rAppContainer"), model: this.greeting });
    //    },

        routes: {
            // "url_hash" : "function"
            "projects": "projects",
            "resume": "resume",
            "contact": "contact",
            "": "index"
        },

        index: function () {
            console.log("inside index router function!");
            $("#content").html("INDEX");
            this.index = new IndexView();
    //        if (this.index == null) {
    //            this.index = new View1({ model: this.greeting });
    //        }
    //
    //        this.container.myChildView = this.index;
    //        this.container.render();
        },

        projects: function () {
            console.log("inside projects router function!");
            $("#content").html("PROJECTS");
//            if (this.projects == null) {
                this.projects = new ProjectsView();
//            }
    //
    //        this.container.myChildView = this.projects;
    //        this.container.render();
        },

        resume: function () {
            console.log("inside resume router function!");
            $("#content").html("RESUME");
    //        if (this.resume == null) {
    //            this.resume = new View3({ model: this.greeting });
    //        }
    //
    //        this.container.myChildView = this.resume;
    //        this.container.render();
        },

        contact: function () {
            console.log("inside contact router function!");
            $("#content").html("CONTACT");
    //        if (this.resume == null) {
    //            this.resume = new View3({ model: this.greeting });
    //        }
    //
    //        this.container.myChildView = this.resume;
    //        this.container.render();
        }
    });
    
    var router = new Router();
});