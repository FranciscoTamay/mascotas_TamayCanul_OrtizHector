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
		propietarios:[{id:1,nombre:'Joel',apellido:'Gomez',edad:21},
			{id:2,nombre:'Alphonse',apellido:'Hernandez',edad:32},
			{id:3,nombre:'Jack',apellido:'Hanma',edad:28}

			],

	},

});