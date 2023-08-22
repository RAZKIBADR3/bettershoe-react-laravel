<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class SavedShoe extends Model
{
    use HasFactory;
    protected $fillable = [
        'user_id',
        'shoe_id'
    ];

    public function shoe(){
        return $this->belongsTo(Shoe::class);
    }

    public function user(){
        return $this->belongsTo(User::class);
    }
}
