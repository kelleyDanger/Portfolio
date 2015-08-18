var url = "/assets/json/data.json";

var Index = Backbone.Model.extend({
	url: url,
	parse: function (response) {
		return response.index
	}
});

var Projects = Backbone.Model.extend({
	url: url,
	parse: function (response) {
		return response.projects
	}
});

var Resume = Backbone.Model.extend({
	url: url,
	parse: function (response) {
		return response.resume
	}
});

var Contact = Backbone.Model.extend({
	url: url,
	parse: function (response) {
		return response.contact
	}
});
