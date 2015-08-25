module.exports = function(app){

	app.get("/", function(req, res){
		res.render("index");
	});

	app.get("/sale", function(req, res){
		res.render("sale");
	});

	/*app.get("/archive", function(req, res){

		var Pinboard = require('node-pinboard');
		var pinboard = new Pinboard(process.env.PINBOARD_API);

		pinboard.all({tags: 'a'}, function(data){

			res.render("archive", {bookmarks: data});
		});

	});*/

};
