<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class SavedRecipe extends Model
{
    protected $fillable = [
        'user_id',
        'recipe_id',
    ];

    public function savedByUsers()
{
    return $this->belongsToMany(User::class, 'saved_recipes');
}
}