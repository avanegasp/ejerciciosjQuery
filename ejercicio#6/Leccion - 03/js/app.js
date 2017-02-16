$(".btn").on("click", function(){
	alert("hiciste click")
});

$(".green").on("click", function(){
	alert("hiciste click")
});

$(".img").on("mousedown", function(){
	console.info("hiciste mousedown")
});

$(".img").on("mouseover", function(){
	$(this).attr('src', 'img/nophoto.jpg')
});

$(".img").on("mouseleave", function(){
	$(this).attr('src', 'img/profesor.jpg')
});

$("#portafolio").on("click", function(e){
	e.preventDefault();
	console.log("click en el link")

	var link = $(this).attr('href')
	console.log(link);

	window.location = link;
});
	
	$(document).ready(function(){
		console.log("la página esta lista")
	});