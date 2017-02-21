/*

(function(){

	var contador = 0;

	$('button').on("click",function(){

	contador = (contador * 1) + 1;

	var base = $('#cmbBase').val();

	var linea = "";

	linea += '<tr>';
	linea += '<td>';
	linea += 	'<td>' + base + '</td>';
	linea += 	'<td> * </td>';
	linea += 	'<td>' + contador + '</td>';
	linea += 	'<td> = </td>';
	linea += 	'<td>' + (contador * base) + '</td>';
	linea += '<tr>';

	$('table').append( linea );

});

	// Función que detecta el cambio de la base

	$("#cmbBase").on("change", function(){
		$('tr').not(":eq(0)").remove();
			contador=0;
	});

})();

*/

$(document).ready(function(){ 
    $('.alternar-respuesta').on('click',function(e){
        $(this).parent().next().toggle();
        e.preventDefault();
    });
    $('#alternar-todo').on('click',function(e){
        $('.respuesta').toggle('slow');
        e.preventDefault();
    });
});