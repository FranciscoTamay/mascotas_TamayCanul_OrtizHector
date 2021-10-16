<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Raza extends Model
{
    //
    protected $tabla='raza';
    protected $primaryKey='id_raza';

    public $incrementing=true;

    public $timestamps=false;

    protected $fillable=[
        'id_raza',
        'raza'

    ];
}
