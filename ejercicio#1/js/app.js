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



$(document).ready(function(){

    var max_chars = 0;

    $('#max').html(max_chars);

    $('textarea').keyup(function() {
        var chars = $(this).val().length;
        var diff = max_chars + chars;
        $('.counter').html(diff);
        if(diff > 80){
        	$('textarea').addClass('colorRed');
        }else{
        	return $('textarea').addClass('colorBlack');
        };
    });
});

