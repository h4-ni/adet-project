<?php

namespace App\Http\Controllers;

use App\Models\Recipe;
use Illuminate\Http\Request;

class RecipeController extends Controller
{
    // GET /api/recipes — return all recipes
    public function index()
    {
        $recipes = Recipe::all();
        return response()->json($recipes);
    }

   public function match(Request $request)
{
    $userIngredients = array_map('strtolower', $request->ingredients);

    $recipes = Recipe::all()->map(function ($recipe) use ($userIngredients) {
        $recipeIngredients = array_map('strtolower', $recipe->ingredients);

        $matched = array_intersect($userIngredients, $recipeIngredients);
        $missing = array_diff($recipeIngredients, $userIngredients);

        return [
            'id' => $recipe->id,
            'name' => $recipe->name,
            'image' => $recipe->image,
            'cook_time' => $recipe->cook_time,
            'ingredients' => $recipe->ingredients,
            'equipment' => $recipe->equipment,
            'instructions' => $recipe->instructions,  // ← add this!
            'likes' => $recipe->likes,
            'matched_count' => count($matched),
            'missing_ingredients' => array_values($missing),
        ];
    })
    ->filter(fn($r) => $r['matched_count'] > 0)
    ->sortByDesc('matched_count')
    ->values();

    return response()->json($recipes);

    }
}