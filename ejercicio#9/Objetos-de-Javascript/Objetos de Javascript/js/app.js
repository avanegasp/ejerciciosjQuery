

var carro = {
	encendido: false,
	llantas: 4,
	puertas: 5,
	marca:"Toyota",
	fabricante: {
		creador:"Toyota",
		telefono: "Direccion",
		direccion: "Bogota"
	}, 

	colores:['rojo', 'verde', 'azul', 'negro'],


	arrancar: function(){

		if(carro.encendido ){

		console.log("el carro estaba encendido");
		}else{
			
		console.log("encendiendo el carro");
		}
			this.encendido = true;
	},

	apagar: function(){
		if(carro.encendido ){

		console.log("el carro estaba apagado");
		}else{
			
		console.log("apagando el carro");
		}
			this.encendido = false;

	}

	};




		$('#botEncender').on('click',function(){

			carro.arrancar()
		});


		$('#botApagar').on('click',function(){

			carro.apagar()
		});



