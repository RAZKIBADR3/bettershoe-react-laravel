<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Brand extends Model
{
    protected $table = 'brands';
    use HasFactory;

    public function shoes(){
        return $this->hasMany(Shoe::class);
    }
}
