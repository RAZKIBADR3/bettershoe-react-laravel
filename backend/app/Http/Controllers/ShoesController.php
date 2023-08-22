<?php

namespace App\Http\Controllers;

use App\Models\Comment;
use App\Models\Shoe;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class ShoesController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Shoe::with('category', 'brand')->get();
        // return response()->json(['success' => true, 'title' => 'shoes', 'data' => $shoes]);
    }

    public function genderShoes(Request $request){
        return Shoe::where('gender', $request->title)->get();
    }

    public function search(Request $request){
        return $shoes = Shoe::where('title', 'like', '%'.$request->text.'%')
                ->orWhere('gender', 'like', '%'.$request->text.'%')
                ->get();
        return $shoes;
    }

    public function show(Request $request){
        return Shoe::with('brand', 'category')->find($request->id);
    }

    public function comments(Request $request){
        $shoe = Shoe::find($request->shoe_id);
        $comments = Comment::where('shoe_id', $shoe->id)->with('user.profile')->get();
        return $comments;
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
    public function destroy(Shoe $shoe)
    {
        $shoe->delete();
        $shoes = Shoe::with('category', 'brand')->get();
        return response()->json(['success' => true, 'shoes' => $shoes]);
    }
}
