@extends('layaouts.master')
@section('titulo','Interface de Ventas')
@section('contenido')
 <!-- INICIO DE VUE -->
 	<div id="apiVenta">
 		<div class="container">
 			<div class="row">
 				<div class="col-md-4">
					<div class="input-group mb-3">
  						<input type="text" class="form-control" placeholder="Introduzca el codigo del producto" aria-label="Recipient's username" aria-describedby="basic-addon2">
  							<div class="input-group-append">
    					<span class="input-group-text" id="basic-addon2">Buscar</span>
  							</div>
					</div>
				</div>
 					
 			</div>
 				
 		</div>
 			
 	</div>
 		
 	<!-- </div> -->




@endsection
@push('scripts')
	<script type="text/javascript" src="{{asset('js/apis/apiVenta.js')}}"></script>
	<script type="text/javascript" src="{{asset('js/vue-resource.js')}}"></script>
	@endpush

	<input type="hidden" name="route" value="{{url('/')}}">