module.exports = function(app, express){

	var compression = require("compression");
	var body_parser = require('body-parser');
	var express_session = require('express-session');
	var method_override = require('method-override');

	app.use(compression());
	app.use(body_parser.urlencoded({extended: true}));
	app.use(body_parser.json());
	app.use(method_override());
	app.use(express_session({secret: 'y01khbur06xvquxr',
														saveUninitialized: true,
														resave: true}));

	app.use(express.static('./public'));

};
