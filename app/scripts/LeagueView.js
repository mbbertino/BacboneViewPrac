var ShivaView = Backbone.View.extend({

	className: "col-lg-12",

	createTemplate: _.template($('#league-shiva-template').text()),

	initialize: function(){
		$('.js-leagues').empty()
		$('.js-leagues').append( this.el )
		this.render()
	},

	render: function(){
		this.$el.html(this.createTemplate(this.model))
	}
})


var JimboView = Backbone.View.extend({

	className: "col-lg-12",

	createTemplate: _.template($('#league-jimbo-template').text()),

	initialize: function(){
		$('.js-leagues').empty()
		$('.js-leagues').append( this.el )
		this.render()
	},

	render: function(){
		this.$el.html(this.createTemplate(this.model))
	}
})

var CarrotView = Backbone.View.extend({

	className: "col-lg-12",

	createTemplate: _.template($('#league-carrot-template').text()),

	initialize: function(){
		$('.js-leagues').empty()
		$('.js-leagues').append( this.el )
		this.render()
	},

	render: function(){
		this.$el.html(this.createTemplate(this.model))
	}
})

var AppleView = Backbone.View.extend({

	className: "col-lg-12",

	createTemplate: _.template($('#league-apple-template').text()),

	initialize: function(){
		$('.js-leagues').empty()
		$('.js-leagues').append( this.el )
		this.render()
	},

	render: function(){
		this.$el.html(this.createTemplate(this.model))
	}
})