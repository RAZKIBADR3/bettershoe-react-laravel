<?php

namespace App\Http\Controllers;

use App\Models\SavedShoe;
use App\Models\Shoe;
use App\Models\User;
use Illuminate\Http\Request;

class SavedShoesController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        // return SavedShoes::all();
    }

    public function savedShoesUser(Request $request){
        return User::find($request->id_user)->savedshoes()->with('shoe.brand')->get();
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $data = $request->only('user_id', 'shoe_id');
        SavedShoe::create($data);

        $savedShoes = User::find($request->user_id)->savedshoes()->with('shoe.brand')->get();
        return response()->json(['success' => true, 'savedShoes' => $savedShoes], 200);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Request $request)
    {
        $savedShoe = SavedShoe::where(['shoe_id' => $request->shoe_id])->first();
        $savedShoe->delete();

        $savedShoes = User::find($request->user_id)->savedshoes()->with('shoe.brand')->get();
        return response()->json(['success' => true , 'savedShoes' => $savedShoes]);
    }
}
