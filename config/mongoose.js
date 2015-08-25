module.exports = function(){

	var mongoose = require("mongoose");

	var mongoUri = process.env.MONGO_URL;

	mongoose.connect(mongoUri);

	//var models_path = "../models/";
	//require(models_path + "Model.js")(mongoose);

	return mongoose;

};
