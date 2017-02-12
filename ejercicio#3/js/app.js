// diferentes maneras para acceder a jquery
/*
$(document).ready(function(){
	
});

jQuery('ul').addClass('textBlue');
$('ul').addClass('textBlue')
*/

$(document).ready(function(){
	
	$('h1').addClass('textBlue');
	$('ul').css('color', 'red');
	$('li:first-child').addClass('negrita');
	$('li:last-child').addClass('textBlue');
	
});





