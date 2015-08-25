/* globals io:true */

var socket = io.connect('/');

var cursors = [];
var body;

var socket_id;

function init_cursors(){

	body = document.querySelector("body");
	body.addEventListener("mousemove", moving);

  socket.on('move', function (data) {
  	move(data);
  });

  socket.on('id', function(id) {
  	socket_id = id;
  });

}

function create(obj){
	var img = new Image();
	img.id = obj.id;
	img.src = "img/cursor.png";
	img.style.position = "absolute";
	img.style.top = obj.x + "px";
	img.style.left = obj.y + "px";
	img.style.opacity = 0.3;
	body.insertBefore(img, body.firstChild);
	cursors.push(obj);
}

function moving(e){
	socket.emit("move", {
		id: socket_id,
		x: e.pageX,
		y: e.pageY
	});
}

function move(data){
	var cursor = document.querySelector("#" + data.id);
	if(cursor){
		cursor.style.left = data.x + "px";
		cursor.style.top = data.y + "px";
	}else{
		create(data);
	}
}

module.exports = init_cursors;
