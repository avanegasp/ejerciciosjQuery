	// Manejo de las imagenes 
	$("img")
		.attr("src","img/profesor.jpg") // Cambia el src
		.addClass('img-circle img-thumbnail');

	$(".col-sm-5")
	.find("p")
	//.text("Saludos, <u>soy Angie Front-End</u>")
	.html("Saludos, <u>soy Angie Front-End</u>");	

	$("ul li")
	.eq(0).addClass("blue").end()
	.eq(1).addClass("red").end()
	.eq(2).addClass("green").end()
	.eq(3).addClass("pink").end()
	.eq(4).addClass("orange").end();