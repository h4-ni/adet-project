<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Recipe extends Model
{
    protected $fillable = [
        'name',
        'image',
        'cook_time',
        'instructions',
        'ingredients',
        'equipment',
        'likes',
    ];

    protected $casts = [
        'ingredients' => 'array',  // converts JSON to array automatically
        'equipment' => 'array',
        'instructions' => 'array',
    ];
}