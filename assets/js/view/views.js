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
    events: {
        // set click listener on the Send button
        "click #sendButton": "sendMessage"    
    },
    render: function() {
        var template = _.template( this.template );
        this.$el.html(template(this.model.toJSON()));
    },
    sendMessage: function(e) {
        
        
        // remove errors as soon as form is submitted again
        $('.form-group').removeClass('has-error');
        
        // get message form attributes
        var data = {
            'submit':   $('#sendButton').val(),
            'email':    $('#input-email').val(),
            'message':  $('#input-message').val()
        };
        
        console.log(data);
        
//        // check for non-null values
//        var validData = true;
//        
//        for(var key in data) {
//            if(!data[key]) {
//                $('#'+key).addClass('has-error');
//                $('#'+key+'-help').show();
//                validData = false;
//            }
//        }
//        
//        // add submit to data for form click validation
//        data['submit'] = $('#sendButton').val();
        
//        if (validData) {
            // process the form
            $.ajax({
                dataType:   'json',
                type:       'POST',
                url:        '/assets/php/email.php',
                data:       data,
    //            encode:     true,
                success: function(response) {
                    console.log(response);
                    
                    //  if errors, display error message
                    if( response.errors ) {
                        
                        //  loop through errors and display error message
                        for(var error in response.errors) {
                            console.log(error); 
                            console.log(response.errors[error]);
                            $('#'+error+'-help').text(response.errors[error]);
                        }
                        
                    } else {
                        console.log(response.success);
                        
                        // show success alert
                        sweetAlert({   
                            title: "Kapow!",   
                            text: "Email Sent",   
                            timer: 1500,   
                            showConfirmButton: false,
                            type: "success" 
                        });
                        
                        // clear form fields
                        $('.input').val('');
                    }
                    
                },
                error: function() {
                    console.log('there was a problem checking the fields');
                }
            });    
//        }
        
    } // sendMessage
});
