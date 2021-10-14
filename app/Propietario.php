<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Propietario extends Model
{
    //
    protected $table='id_propietario';
    protected $primaryKey='id_propietario';
    public $with=['mascotas'];

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

    public function mascotas(){
        return $this->hasMany(Mascota::class,'id_propietario','id_propietario');
    }

}
