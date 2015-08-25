var express = require('express');
var app = express();
var server = require('http').Server(app);

/** CONFIG **/
require("./config/middleware.js")(app, express);
require("./config/handlebars.js")(app);
//IMPORTANT: CHANGE THE MONGO_URL PATH in .env FIRST BEFORE UNCOMMENTING THIS LINE
//var mongoose = require("./config/mongoose.js")();

/** CONTROLLERS **/
require('./controllers/pages.js')(app);

/** MODULES **/
require('./modules/cursors.js')(server);

var port = 3000;

server.listen(port, function() {
	console.log('Server listening at port', port, 'in', process.env.NODE_ENV, 'mode');
});
