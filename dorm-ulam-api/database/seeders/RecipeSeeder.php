<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Recipe;

class RecipeSeeder extends Seeder
{
    public function run(): void
    {
        Recipe::create([
            'name' => 'Sizzling Hotdog',
            'image' => 'sizzling-hotdog.jpg',
            'cook_time' => 8,
            'instructions' => 'Slice hotdogs. Saute in pan until browned. Add sauce and stir.',
            'ingredients' => ['hotdog', 'palm oil', 'onion', 'soy sauce'],
            'equipment' => ['Frying Pan', 'Spatula'],
            'likes' => 10,
        ]);

        Recipe::create([
            'name' => 'Hotdog Fried Rice',
            'image' => 'hotdog-friedrice.jpg',
            'cook_time' => 6,
            'instructions' => 'Fry rice with hotdog slices. Add soy sauce and egg.',
            'ingredients' => ['hotdog', 'rice', 'egg', 'soy sauce'],
            'equipment' => ['Frying Pan', 'Spatula'],
            'likes' => 5,
        ]);

        Recipe::create([
            'name' => 'Hotsilog',
            'image' => 'hotsilog.jpg',
            'cook_time' => 10,
            'instructions' => 'Fry hotdog. Serve with sinangag and itlog.',
            'ingredients' => ['hotdog', 'rice', 'egg', 'garlic'],
            'equipment' => ['Frying Pan', 'Spatula', 'Plate'],
            'likes' => 8,
        ]);
    }
}