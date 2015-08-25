(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"./_js/app.js":[function(require,module,exports){
var cursors = require('./modules/cursors.js');
var rollovers  = require('./modules/rollovers.js');

(function(){

	function init(){

		rollovers();
		cursors();

	}

	init();

})();

},{"./modules/cursors.js":"/Users/duivvv/Documents/dev/projects/landlocked.be/_js/modules/cursors.js","./modules/rollovers.js":"/Users/duivvv/Documents/dev/projects/landlocked.be/_js/modules/rollovers.js"}],"/Users/duivvv/Documents/dev/projects/landlocked.be/_js/modules/cursors.js":[function(require,module,exports){
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

},{}],"/Users/duivvv/Documents/dev/projects/landlocked.be/_js/modules/rollovers.js":[function(require,module,exports){
var container, body, links;

function init_rollovers(){

	var images = [
		"nineteeneigthyfour",
		"code",
		"devine",
		"ghent",
		"kortrijk",
		"me"
	];

	for(var i = 0;i < images.length;i++){
		var image = new Image();
		image.src = "img/" + images[i] + ".gif";
	}

	links = document.querySelectorAll("a");

	container = document.querySelector(".container");
	body = document.querySelector("body");

	for(var j = 0;j < links.length;j++){
		links[j].addEventListener("mouseover", over);
		links[j].addEventListener("mouseleave", leave);
	}

}

function over(e){
	var img = e.currentTarget.getAttribute("data-bg");
	if(img){
		body.setAttribute("style","background-image: url('img/"+ img +".gif');");
		container.classList.add("shadow");
	}
}

function leave(e){
	var img = e.currentTarget.getAttribute("data-bg");
	if(img){
		body.removeAttribute("style");
		container.classList.remove("shadow");
	}
}

module.exports = init_rollovers;

},{}]},{},["./_js/app.js"]);
