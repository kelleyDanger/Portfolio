var Index = Backbone.Model.extend({
	url: "/assets/json/data.json",
	parse: function (response) {
		return response.index
	}
});

var Projects = Backbone.Model.extend({
	url: "/assets/json/data.json",
	parse: function (response) {
		return response.projects
	}
});
