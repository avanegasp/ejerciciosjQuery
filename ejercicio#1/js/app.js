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


$("#new-task").keyup(function(e) {
   		if(e.which == 13) {
      		var value = $( this ).val();

      // Acciones a realizar, por ej: enviar formulario.
      $('.todo').append(function(){
      			
      			return "<li>"  + value +"";

      });	
      			$(this).val('');
  };

});




