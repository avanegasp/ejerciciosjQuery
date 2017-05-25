// diferentes maneras para acceder a jquery
/*
$(document).ready(function(){
	
});


$('ul').addClass('textBlue')
*/




/*
 
$(document).ready(function(){
$( "#input" )
  .keyup(function(value) {
    var value = $( this ).val();
    $( "h1" ).text( "Hola " + value + "!");
  })
 });

*/

/*
$(document).ready(function(){

    var max_chars = 25;

    $('#max').html(max_chars);

    $('#comment').keyup(function() {
        var chars = $(this).val().length;
        var diff = max_chars - chars;
        $('#contador').html(diff);   
    });
});

*/

/*
$(document).ready(function(){

    var max_chars = 0;

    $('#max').html(max_chars);

    $('textarea').keyup(function() {
        var chars = $(this).val().length;
        var diff = max_chars + chars;
        $('.counter').html(diff);
        if(diff > 80){
        	$('textarea').removeCLass('colorBlack');
        	$('textarea').addClass('colorRed');
        }else{
        	return $('textarea').removeCLass('colorBlack');
        	$('textarea').addClass('colorRed');
        };
    });
});
*/

/*
$(document).ready(function(){

    var max_chars = 0;

    $('#max').html(max_chars);

    $('textarea').keyup(function() {
        var chars = $(this).val().length;
        var diff = max_chars + chars;
        $('.counter').html(diff);
        if(diff > 80){
        	$('textarea').css('border-color', 'red');
        	$('textarea').css('border-width','5px');
        	$('.counter').css('color','red');

        }else{
        	$('textarea').css('border','1px solid #B5B5A8');
        	$('.counter').css('color','#666');
        };
    });
});
*/

/*
$('document').ready(function(){

var click = 0;


$('#add').on('click', function(){
	$('ul').addClass('.marked');
});

});

*/



/*
(function(){

	var contador = 0;

	$('#add').on('click', function(){

	contador = (contador * 1) + 1;

	var dinamico = '<li>Elemento ' + contador + '</li>';
		
		//$('body').append(dinamico);
		//$('body').prepend(dinamico);
		$('.elements').append(dinamico);
});
		
	$('ul').on('click', 'li', function(){
		$(this).toggleClass('marked'); 
		
	});

})();
*/

/*

$('.list').on('click', 'li', function(){
	$(this).appendTo('.done');

	$('.done').on('click', 'li', function(){
		$(this).appendTo('.todo');
	});
});

*/
$(document).ready(function(){  
    $("#formulario").submit(function () {  
        if($("#nombre").val().length < 4) {  
            alert("El nombre debe tener más de 3 caracteres");  
            return false;  
        }  
        if($("#apellidos").val().length < 4) {  
            alert("Los apellidos deben tener más de 3 caracteres");  
            return false;  
        }  
        if($("#telefono").val().length < 4 || isNaN($("#telefono").val())) {  
            alert("El teléfono debe tener más de 3 caracteres y solo números");  
            return false;  
        }  
        if($("#email").val().length < 1) {  
            alert("La dirección e-mail es obligatoria");  
            return false;  
        }  
        if($("#email").val().indexOf('@', 0) == -1 || $("#email").val().indexOf('.', 0) == -1) {  
            alert("La dirección parece incorrecta");  
            return false;  
        }  
        if($("#localidad").val().length < 1) {  
            alert("La localidad es obligatoria");  
            return false;  
        }  
        if($("#provincia option:selected").val() == "") {  
            alert("La provincia es obligatoria");  
            return false;  
        }  
        if($("#localidad").val().length < 1) {  
            alert("La localidad es obligatoria");  
            return false;  
        }  
        if($("#boletin").is(':checked')) { } else {  
            alert("Indique si desea apuntarse al boletín de noticias");  
            return false;  
        }  
        if($("#visitas").is(':checked')) { } else {  
            alert("Indique cada cuanto nos visitas");  
            return false;  
        }  
        return false;  
    });  
});












 $('form').submit(function (e) {
      e.preventDefault();
        if($('#password').val().length < 4) {  
            alert("la contraseña debe tener menos de 4 caracteres");  
            return false;  
     }; 
});
