
$(document).ready(function() {
// smaller way to call document.ready
// $(function(){
// })
	router = new MainRouter();
	// sometimes you do really need to store is so 90% of the time this is fine:
	//  new MainRouter();

	// at the end of the router instance need to call backbone.history.start
	Backbone.history.start();

	$('.jumbotron').on('click', '.js-shiva', function(){
		new ShivaView()
	}),
	$('.jumbotron').on('click', '.js-jimbo', function(){
		new JimboView()
	}),
	$('.jumbotron').on('click', '.js-carrot', function(){
		new CarrotView()
	}),
	$('.jumbotron').on('click', '.js-apple', function(){
		new AppleView()
	})

})