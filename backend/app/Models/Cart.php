<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Cart extends Model
{
    protected $table = 'carts';
    use HasFactory;

    protected $fillable = [
        'fullname',
        'adresse',
        'phone',
        'paymentMethod',
        'total',
        'user_id'
    ];

    public function cart_det(){
        return $this->hasMany(Cart_Det::class);
    }

    public function user(){
        return $this->belongsTo(User::class);
    }
}
