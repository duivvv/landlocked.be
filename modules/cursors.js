module.exports = function(server){

	var io = require('socket.io')(server);

	var counter = 0;

	io.on('connection', function(socket){

		counter ++;

		socket.emit("id", "cursor" + counter);

		socket.on("move", function(obj){
			socket.broadcast.emit("move", obj);
		});

	  /*socket.on('disconnect', function() {
			socket.broadcast.emit("destroy", "cursor" + counter);
	  });*/

	});

};
