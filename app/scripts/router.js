var MainRouter = Backbone.Router.extend({

	routes: {
		// make sure this is routes not routers
		"shiva"		: "shivaleague",
		"jimbo"		: "jimboleague",
		"carrot"	: "carrotleague",
		"apple"		: "appleleague"

		// # and / are assumed in backbone
	},

	initialize: function(){
		console.log('Hey guys this started!')
	},

	aboutPage: function(name){
		if(name){
			console.log('here is a page about', name)
		} 
		else {
			console.log('your at the about page')
		}
	}

})