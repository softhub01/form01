/*!
 * Bootstrap v3.3.4 (http://getbootstrap.com)
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 */

$(function() {
 
    Parse.$ = jQuery;
 
    // Replace this line with the one on your Quickstart Guide Page
    Parse.initialize("cawLbOWUk15FFQ9xj7kQOGqEs5jS7QQZ1XurDSWp", "emTwPf0PO6aTvZNubBExHUlbDn6R65Vj2UqaJMF3");
 
    var Form01 = Parse.Object.extend("Form01");
	var Form01s = Parse.Collection.extend({
    	model: Form01
	});
	
	var form01s = new Form01s();
	
	var Form01sView =  Parse.View.extend({
    template: Handlebars.compile($('#blogs-tpl').html()),
    render: function(){ 
        var collection = { form01: this.collection.toJSON() };
        this.$el.html(this.template(collection));
    }
	});

	
	form01s.fetch({
	success: function(form01s) {
		var form01sView = new Form01sView({ collection: form01s });
    	form01sView.render();
    	$('.main-container').html(form01sView.el);
	},
	error: function(form01s, error) {
		console.log(error);
	}
	});
	
});
 