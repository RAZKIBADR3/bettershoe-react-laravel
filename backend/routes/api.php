<?php

use App\Http\Controllers\Brandscontroller;
use App\Http\Controllers\CartsController;
use App\Http\Controllers\CategoriesController;
use App\Http\Controllers\CommentsController;
use App\Http\Controllers\SavedShoesController;
use App\Http\Controllers\ShoesController;
use App\Http\Controllers\UsersController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('/shoes', [ShoesController::class, 'index']);
Route::get('/brands', [Brandscontroller::class, 'index']);
Route::get('/brands/{title}', [Brandscontroller::class, 'brandShoes']);
Route::get('/genders/{title}', [ShoesController::class, 'genderShoes']);
Route::get('/categories/{title}', [CategoriesController::class, 'categoryShoes']);
Route::get('/shoes/search/{text}', [ShoesController::class, 'search']);
Route::get('/shoes/show/{id}', [ShoesController::class, 'show']);
Route::get('/users', [UsersController::class, 'index']);

// savedShoes
Route::get('/savedShoes/{id_user}', [SavedShoesController::class, 'savedShoesUser']);
Route::post('/savedShoes/store', [SavedShoesController::class, 'store']);
Route::delete('/savedShoes/destroy/{shoe_id}/{user_id}', [SavedShoesController::class, 'destroy']);

// carts
Route::get('/users/carts/{id_user}', [UsersController::class, 'carts']);
Route::post('/carts/store', [CartsController::class, 'store']);

// Register &&login && logout
Route::post('/users/login', [UsersController::class, 'login']);
Route::post('/users/logout', [UsersController::class, 'logout']);
Route::post('/users/register', [UsersController::class, 'register']);

// comments
Route::get('/comments/{shoe_id}', [ShoesController::class, 'comments']);
Route:: post('/comments/store', [CommentsController::class, 'store']);

// dashboard
Route::put('/users/block/{user}', [UsersController::class, 'block']);
Route::delete('/shoes/destroy/{shoe}', [ShoesController::class, 'destroy']);

//account
Route::put('/users/update/{user}/{name}', [UsersController::class, 'update']);

