var Enums = Backbone.Model.extend({
	url: "/assets/json/enums.json",
	parse: function (response) {
//        console.log(response);
		return response.itemEnums;
	}
});