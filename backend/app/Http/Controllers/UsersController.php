<?php

namespace App\Http\Controllers;

use App\Models\Profile;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Date;

class UsersController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return User::where('role', 'user')->where('active', 1)->with('profile')->get();
    }

    public function carts(Request $request){
        return User::find($request->id_user)->carts()->with('cart_det.shoe.brand')->get();
    }


    public function login(Request $request){
        $data = $request->only('email', 'password');

        if(Auth::attempt($data)){
            $user = Auth::user();
            if($user->active){
                $token = $user->createToken('authToken')->plainTextToken;

                $u = User::with('profile')->find($user->id);
                $savedShoes = User::find($user->id)->savedshoes()->with('shoe.brand')->get();
                return response()->json(['success'=>true, 'token' => $token, 'user' => $u, 'savedShoes' => $savedShoes], 200);
            }else{
                return response()->json(['success'=>false]);
            }
        }
        return response()->json(['message' => 'Invalid credentials'], 401);
    }

    public function logout(Request $request){
        // return 'logout';
        if ($request->user()) {
            $request->user()->currentAccessToken()->delete();
        }
        return response()->json(['message' => 'Logged out successfully'], 200);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function register(Request $request)
    {
        $data = $request->only('name', 'birthday', 'email', 'password');
        $user = User::where('email', $data['email'])->first();
        if($user){
            return response()->json(['exists' => true]);
        }else{
            $profile = Profile::create([]);
            $data['birthday'] = Date($data['birthday']);
            $data['password'] = bcrypt($data['password']);
            $data['role'] = 'user';
            $data['active'] = 1;
            $data['profile_id'] = $profile->id;
            User::create($data);
            return response()->json(['exists' => false], 200);
        }
    }

    public function block(User $user){
        $user->update([
            'active' => 0
        ]);
        $users = User::where('role', 'user')->where('active', 1)->with('profile')->get();
        return response()->json(['success'=>true, 'users'=>$users], 200);
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
    public function update(User $user, Request $request)
    {
        $user->update([
            'name' => $request->name
        ]);
        $u = User::find($user->id)->with('profile')->first();
        return response()->json(['success'=>true, 'user'=>$u], 200);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
