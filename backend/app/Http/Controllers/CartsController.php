<?php

namespace App\Http\Controllers;

use App\Models\Cart;
use App\Models\Cart_Det;
use App\Models\User;
use Illuminate\Http\Request;

class CartsController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
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
        $data = $request->only('cart','cart_det');
        $cart = Cart::create($data['cart']);

        foreach($data['cart_det'] as $cart_det){
            Cart_Det::create([
                'total' => $cart_det['total'],
                'qt' => $cart_det['quantity'],
                'shoe_id' => $cart_det['id'],
                'cart_id' => $cart->id
            ]);
        }
        return response()->json(['success' => true], 200);
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
    public function destroy(string $id)
    {
        //
    }
}
