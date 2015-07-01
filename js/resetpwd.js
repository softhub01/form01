/*!
 * Bootstrap v3.3.4 (http://getbootstrap.com)
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 */

$(function() {
 
    Parse.$ = jQuery;
 
    // Replace this line with the one on your Quickstart Guide Page
    Parse.initialize("cawLbOWUk15FFQ9xj7kQOGqEs5jS7QQZ1XurDSWp", "emTwPf0PO6aTvZNubBExHUlbDn6R65Vj2UqaJMF3");
	

	
	var LoginView = Parse.View.extend({
    template: Handlebars.compile($('#login-tpl').html()),
    events: {
        'submit .form-login': 'reset'
    	},
    	reset: function(e) {
 
        	// Prevent Default Submit Event
        	e.preventDefault();
 
        	// Get data from the form and put them into variables
        	//var data = $(e.target).serializeArray(),
            //	email = data[0].value;
			var self=this;
			var email=this.$("[name=email]").val();
			
			// Test script to reset password
			//function resetPassword(){
			   	//var email = document.forms["form-login"]["email"].value;
			if(email==="") return;
			
				Parse.User.requestPasswordReset(email, {
					success:function() {
                    window.alert("Password reset link has been sent to "+ email);
					var welcomeView = new WelcomeView({ model: user });
    				    welcomeView.render();
    				    $('.main-container').html(welcomeView.el);
                    return true;
					},
					error:function(error) {
                    window.alert(error.message);
                    return false;
					}
				});
			
			
			       	
    	},
        	render: function(){
        	this.$el.html(this.template());
			}
	})
	    
		var loginView = new LoginView();
		loginView.render();
		$('.main-container').html(loginView.el);		
		
		
		WelcomeView = Parse.View.extend({
        	template: Handlebars.compile($('#welcome-tpl').html()),
        	events: {
				'click .add-blog': 'add'
			},
			add: function(){
				var addBlogView = new AddBlogView();
    			addBlogView.render();
    			$('.main-container').html(addBlogView.el);
				
			},
			render: function(){
	            var attributes = this.model.toJSON();
    	        this.$el.html(this.template(attributes));
        	}
		});


	var AddBlogView = Parse.View.extend({
    	template: Handlebars.compile($('#add-tpl').html()),
    	events: {
        'submit .form-add': 'submit'
    	},
    	submit: function(e){
        // Prevent Default Submit Event     
    	e.preventDefault();
		// Take the form and put it into a data object
    	var data = $(e.target).serializeArray(),
		            	//title = data[0].value,
            	//content = data[1].value;
    	// Create a new instance of Blog
         blog = new Blog();
    	// Call .create()
    	blog.create(data[0].value, data[1].value);
    	}, 
		render: function(){
        	this.$el.html(this.template());
    	}
	});

	var Blog = Parse.Object.extend('Blog', {
    create: function(task, content) {
        this.save({
            'task': task,
            'content': content,
            'author': Parse.User.current()
    		//'authorName': Parse.User.current().get('username'),
    		//'time': new Date().toDateString(),			
			
        }, {
            success: function(blog) {
                alert('You added a new blog: ' + blog.get('task'));
            },
            error: function(blog, error) {
                console.log(blog);
                console.log(error);
            }
        });
    }
 
	});

});



 