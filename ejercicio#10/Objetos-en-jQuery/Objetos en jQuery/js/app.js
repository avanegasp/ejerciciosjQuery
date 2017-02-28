//var caja = '<input type="text" class="form-control" placeholder="ingrese su nombre">';
//$(".container").append(caja);

$("<input>", {
				type: "text",
				class: "form-control",
				placeholder:"Ingrese su nombre"
})
.appendTo('.container')
	.on("keypress", function(e){
		console.log(e.keyCode)
	});


$("input").css({
	position: "relative",
	top: "200px"
});	
