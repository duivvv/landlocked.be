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
