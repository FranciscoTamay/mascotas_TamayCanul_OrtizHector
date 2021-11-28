function init(){

var apiVenta='http://localhost/Pruebas/public/apiProducto'

new Vue({

// le asignamos el token 
	 http: {
            headers: {
               'X-CSRF-TOKEN': document.querySelector('#token').getAttribute('value')
            }
        },

	el:'#apiVenta',

	data:{
		mensaje:'Hola Mundo',
		sku:'',
		ventas:[],
		cantidades:[1,1,1,1,1,1,1,1,1,1],
		cant:1,


	},


	//se ejecuta automaticamente cuando la pagina se crea
	created:function(){
		
	},
 	
 	//INICIO DE METHODS
	methods:{

		buscarProducto:function(){
			if(this.sku)
			{
			var producto = {};
			this.$http.get(apiVenta + '/' + this.sku).then(function(json){
				producto = {
					sku:json.data.sku,
					nombre:json.data.nombre,
					precio:json.data.precio,
					cantidad:1,
					total:json.data.precio
				};

				
				this.ventas.push(producto);
				this.cantidades.push(1);
				this.sku='';

			});
		  }	
		}


	},
 //FIN DE METHODS

 	computed:{
 		totalProducto(){
 			return (id)=>{
 				var total = 0;
 				if (this.cantidades[id]!=null)
 				total=this.ventas[id].precio*this.cantidades[id];
 				return total.toFixed(1);
 			}
 		},
 	},
	


});


} window.onload = init;