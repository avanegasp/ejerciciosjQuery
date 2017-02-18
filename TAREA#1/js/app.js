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

})();