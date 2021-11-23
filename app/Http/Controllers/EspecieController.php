<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Especie;

class EspecieController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return $especies=Especie::all();
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return view('especies');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $especies=new Especie();

        $especies->id_especie=19;
        $especies->especie=$request->get('especie');

        $especies->save();
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        return $especies=Especie::find($id);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {

    }

   

    public function update(Request $request, $id)
    {
        $especies=Especie::find($id);

        $especies->id_especie=$request->get('id_especie');
        $especies->especie=$request->get('especie');

        $especies->update();
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $especie=Especie::find($id);
        $especie->delete();
    }
}
