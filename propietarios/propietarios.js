new Vue({

	//zona de actuacion de Vue
	el:"#propietarios",

	//seccion de variables y constantes
	data:{

		mensaje:'Zona de propietarios',
		nombre:'',
		apellido:'',
		edad:null,
		editando:0,
		indice:0,
		propietarios:[{nombre:'Joel',apellido:'Gomez',edad:21},
			{nombre:'Alfonso',apellido:'Hernandez',edad:32},
			{nombre:'Jack',apellido:'Hanma',edad:28},

			],

	},

//Metodos para asignar a los botones
	methods:{
		//Metodo para agregar a un nuevo propietario
		agregarPropietario:function(){
			//se construye un objeto como el de propietarios para que sea insertado en el array
			var unPropietario={nombre:this.nombre,apellido:this.apellido,edad:this.edad};

			//Agrego un objeto Propietario
			this.propietarios.push(unPropietario);
			this.limpiarCampo();

			//enviamos el foco al primer componente/nombre propietario
			this.$refs.nombre.focus();
		},

		//Metodo para limpiar los campos en donde se escribe para agregar a un propietario
		limpiarCampo:function(){
			this.nombre='';
			this.apellido='';
			this.edad='';
		},

		//Metodo para cancelar cuando se quiera agregar mascota
		cancelar:function(){
			this.limpiarCampo();
		},

		//Metodo para editar a los propietarios
		editarPropietario:function(pos){
			this.nombre=this.propietarios[pos].nombre;
			this.apellido=this.propietarios[pos].apellido;
			this.edad=this.propietarios[pos].edad;
			this.editando=1;
			this.indice=pos;
		},

		//Metodo para guardar la edicion
		guardarEdicion:function(){
			//Modifico los valores 
			this.propietarios[this.indice].nombre=this.nombre;
			this.propietarios[this.indice].apellido=this.apellido;
			this.propietarios[this.indice].edad=this.edad;

			//Limpiamos los componentes del HTML
			this.limpiarCampo();
			//indicamos que terminamos de editar al darle al boton de agregar
			this.editando=0;
		},

		//Metodo para eliminar propietario
		eliminarPropietario:function(pos){
		var pregunta=confirm('Esta seguro de eliminar?');

			if(pregunta)
				console.Log('Voy a eliminar');

		this.mascotas.splice(pos,1);
				
		},

	},

		



});