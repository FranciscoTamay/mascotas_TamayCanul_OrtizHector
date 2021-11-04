function init(){

var apiEspecie='http://localhost/Pruebas/public/apiEspecie'

new Vue({
	el:'#apiEspecie',

	data:{
		mensaje:'Hola Mundo',
		especies:[],

	},


	//se ejecuta automaticamente cuando la pagina se crea
	created:function(){
		this.getEspecies();
	},

	methods:{
		getEspecies:function(){
			this.$http.get(apiEspecie).then(function(json){
				this.especies=json.data;

			})
		}

	},


})


} window.onload = init;