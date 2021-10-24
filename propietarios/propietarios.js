new Vue({

	//zona de actuacion de Vue
	el:"#propietarios",

	//seccion de variables y constantes
	data:{

		mensaje:'Zona de propietarios',
		id:null,
		nombre:'',
		apellido:'',
		edad:null,
		indice:0,
		propietarios:[{nombre:'Joel',apellido:'Gomez',edad:21},
			{nombre:'Alfonso',apellido:'Hernandez',edad:32},
			{nombre:'Jack',apellido:'Hanma',edad:28},

			],

	},

});