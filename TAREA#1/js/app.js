(function(){

	var contador = 0;

	$("body").on("click","h3",function(){

	contador = contador + 1;

	var h3Dinamico = "<h3 id='h3-"+ contador +"'>hola h3 dinamico!"+ contador + "</h3> <hr>";

	
		//$('body').append(dinamico);
		//$('body').prepend(dinamico);
		$('.container').append(h3Dinamico);

		if (contador === 2){
				$('#h3-2').bind("click", function(){
			console.log("hiciste click en el segundo h3")
		});
	};

});

})();