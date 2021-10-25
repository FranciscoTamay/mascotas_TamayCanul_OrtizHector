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
		buscar:'',
		propietarios:[{nombre:'Joel',apellido:'Gomez',edad:21},
			{nombre:'Alfonso',apellido:'Hernandez',edad:32},
			{nombre:'Jack',apellido:'Hanma',edad:28},

			],

	},

//Metodos para asignar a los botones
	methods:{
		//Metodo para agregar a un nuevo propietario
		agregarPropietario:function(){
			if (this.nombre && this.apellido && this.edad){
			//se construye un objeto como el de propietarios para que sea insertado en el array
			var unPropietario={nombre:this.nombre,apellido:this.apellido,edad:this.edad};

			//Agrego un objeto Propietario
			this.propietarios.push(unPropietario);
			this.limpiarCampo();

			//enviamos el foco al primer componente/nombre propietario
			this.$refs.nombre.focus();

			// se envia el mensaje de confirmacion 
			Swal.fire({
  		position: 'top-end',
  		icon: 'success',
  		title: 'EL propietario se agrego correctamente ',
  		showConfirmButton: false,
  		timer: 2000
		})
			}

			else 

				Swal.fire({
  		position: 'top-end',
  		icon: 'error',
  		title: 'Debe de ingresar todos los datos',
  		showConfirmButton: false,
  		timer: 2000
		})

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
			Swal.fire({
  		position: 'top-end',
  		icon: 'info',
  		title: 'Los cambios fueron realizados',
  		showConfirmButton: false,
  		timer: 2000
			})
			// fin de mensaje 
		},

		//Metodo para eliminar propietario
		eliminarPropietario:function(pos){
		Swal.fire({
  		title: 'Esta seguro de eliminar?',
  		text: "No podra deshacer los cambios!",
  		icon: 'warning',
  		showCancelButton: true,
 	 	confirmButtonColor: '#3085d6',
  		cancelButtonColor: '#d33',
  		confirmButtonText: 'Si, eliminalo!'
		}).then((result) => {
  		if (result.isConfirmed) {
  			//eliminamos el propietario seleccionado
  			this.propietarios.splice(pos,1);

    	Swal.fire(
      	'Eliminado!',
      	'El propietario fue eliminado.',
      	'success'
    		)
  		}
	})
		//fin de ventana de sweet alert
		
				
		},


	// Fin de los metodos	
	},

	// Inicio de computed 

	computed:{
		filtroPropietarios:function(){
			return this.propietarios.filter((propietario)=>{
			return propietario.nombre.toLowerCase().match(this.buscar.toLowerCase().trim()) || 
				   propietario.apellido.toLowerCase().match(this.buscar.toLowerCase().trim()) 
			});
		},


		numeroPropietarios:function(){
			var num=0;
			num=this.propietarios.length;
			return num;
		},
	},
	// fin de computed
		



});