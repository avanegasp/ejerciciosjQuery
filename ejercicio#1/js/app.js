// diferentes maneras para acceder a jquery
/*
$(document).ready(function(){
	
});


$('ul').addClass('textBlue')
*/





 
$(document).ready(function(){
$( "#input" )
  .keyup(function(value) {
    var value = $( this ).val();
    $( "h1" ).text( "Hola " + value + "!");
  })
 });


