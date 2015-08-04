var Projects = Backbone.Model.extend({
	url: "/assets/json/data.json",
	parse: function (response) {
		return response
	}
});
