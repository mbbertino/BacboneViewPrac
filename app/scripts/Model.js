var Teams = Backbone.Model.extend({
	defaults: {
		'teamName': "",
		'league': "", 
		'teamLogo': ""
	}
});

var TeamCollection = Backbone.Collection.extend({
	model: Team,
	url: 'http://0.0.0.0:3000/collections/teams'
});

var Players = Backbone.Model.extend({
	defaults: {
		'name': "",
		'nickname': "",
		'teamName': "",
		'league': "",
		'position': "" 
	}
});

var PlayerCollection = Backbone.Collection.extend({
	model: Team,
	url: 'http://0.0.0.0:3000/collections/players'
});