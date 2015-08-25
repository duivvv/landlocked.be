module.exports = function(app){

	var express_handlebars = require("express-handlebars");
	var helpers = require("./helpers.js");

	var handlebars = express_handlebars.create({
		extname: ".hbs",
		defaultLayout: "main",
		helpers: helpers
	});

	app.engine("hbs", handlebars.engine);
	app.set("view engine", "hbs");
	app.set("views", "./views");

	return handlebars;

};
