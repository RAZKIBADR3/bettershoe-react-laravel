<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Shoe extends Model
{
    use HasFactory;

    public function category(){
        return $this->belongsTo(Category::class);
    }

    public function brand(){
        return $this->belongsTo(Brand::class);
    }

    public function savedShoes(){
        return $this->hasMany(SavedShoe::class);
    }

    public function cart_dets(){
        return $this->hasMany(Cart_Det::class);
    }

    public function comments(){
        return $this->hasMany(Comment::class);
    }
}
