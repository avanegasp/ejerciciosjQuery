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





	$(document).ready(function(){
   	$("#input").keypress(function(){
    		return ()
	});
});



	<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Saludo</title>

  <link href="style.css" rel="stylesheet">
</head>
<body>
  <h1>¿Cómo te llamas?</h1>
  <input id="input" type="text">
    
  <script src="https://code.jquery.com/jquery-3.1.1.js"   integrity="sha256-16cdPddA6VdVInumRGo6IbivbERE8p7CQR3HzTBuELA="   crossorigin="anonymous"></script>
  <script src="app.js"></script>
</body>
</html>