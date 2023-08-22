<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Cart_Det extends Model
{
    protected $table = 'cart_det';
    use HasFactory;

    protected $fillable = [
        'total',
        'qt',
        'shoe_id',
        'cart_id'
    ];

    public function cart(){
        return $this->belongsTo(Cart::class);
    }

    public function shoe(){
        return $this->belongsTo(Shoe::class);
    }
}
