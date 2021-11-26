@extends('layaouts.master')
@section('titulo','Interface de Ventas')
@section('contenido')
 <!-- INICIO DE VUE -->
 	<div id="apiVenta">
 		<div class="container">
 			<div class="row">
 				<div class="col-md-4">
					<div class="input-group mb-3">
  						<input type="text" class="form-control" placeholder="Introduzca el codigo del producto" aria-label="Recipient's username" aria-describedby="basic-addon2" v-model="sku" v-on:keyup.enter="buscarProducto()">
  							<div class="input-group-append">
    					<button class="btn btn-outline-secondary" type="button" @click="buscarProducto()">Buscar</button >
  							</div>
					</div>
				</div>
 					
 			</div> <!--Fin de div row-->

 			<div class="row">

 				<div class="col-md-12">

 					<table class="table table-bordered">
 						<thead>
 							<th>SKU</th>
 							<th>NOMBRE</th>
 							<th>PRECIO</th>
 							<th>CANTIDAD</th>
 							<th>TOTAL</th>
 						</thead>

 						<tbody>
 							<tr v-for="venta in ventas">
 								<td>@{{venta.sku}}</td>
 								<td>@{{venta.nombre}}</td>
 								<td>@{{venta.precio}}</td>
 								<td>@{{venta.cantidad}}</td>
 								<td>@{{venta.total}}</td>
 								
 							</tr>
 						</tbody>
 						
 					</table>
 					
 				</div>
 				
 			</div>
 				
 		</div> <!--Fin de div container-->
 			
 	</div><!--Fin de VUE-->





@endsection
@push('scripts')
	<script type="text/javascript" src="{{asset('js/apis/apiVenta.js')}}"></script>
	<script type="text/javascript" src="{{asset('js/vue-resource.js')}}"></script>
	@endpush

	<input type="hidden" name="route" value="{{url('/')}}">