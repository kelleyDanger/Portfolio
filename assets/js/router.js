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
            this.index = new IndexView();
        },

        projects: function () {
            this.projects = new ProjectsView();
        },

        resume: function () {
            this.resume = new ResumeView();
        },

        contact: function () {
            this.contact = new ContactView();    
        }
    });
    
    var router = new Router();
});