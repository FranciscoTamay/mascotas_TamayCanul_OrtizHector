<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Propietario extends Model
{
    //
    protected $table='id_propietario';
    protected $primaryKey='id_propietario';

    public $incrementing=true;
    public $timestamps=false;


    public $fillable=[
        'id_propietario',
        'nombre',
        'apellidos',
        'edad',
        'direccion',
        'telfono'
    ];
    

}
