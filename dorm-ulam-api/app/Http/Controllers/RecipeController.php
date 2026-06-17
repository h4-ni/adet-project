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

            // partial match — checks if user ingredient is contained in recipe ingredient
            $matched = array_filter($recipeIngredients, function($recipeIngredient) use ($userIngredients) {
                foreach ($userIngredients as $userIngredient) {
                    if (str_contains($recipeIngredient, $userIngredient) || 
                        str_contains($userIngredient, $recipeIngredient)) {
                        return true;
                    }
                }
                return false;
            });

            $missing = array_filter($recipeIngredients, function($recipeIngredient) use ($userIngredients) {
                foreach ($userIngredients as $userIngredient) {
                    if (str_contains($recipeIngredient, $userIngredient) || 
                        str_contains($userIngredient, $recipeIngredient)) {
                        return false;
                    }
                }
                return true;
            });

            return [
                'id' => $recipe->id,
                'name' => $recipe->name,
                'image' => $recipe->image,
                'cook_time' => $recipe->cook_time,
                'ingredients' => $recipe->ingredients,
                'equipment' => $recipe->equipment,
                'instructions' => $recipe->instructions,
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

    // GET /api/recipes/trending — sorted by likes
    public function trending()
{
    $recipes = Recipe::orderBy('likes', 'desc')->get();
    return response()->json($recipes);
}

    // POST /api/recipes/{recipe}/like
    public function like(Recipe $recipe)
    {
        $recipe->increment('likes');
        return response()->json(['likes' => $recipe->likes]);
    }

    // POST /api/recipes/{recipe}/unlike
    public function unlike(Recipe $recipe)
    {
        if ($recipe->likes > 0) {
            $recipe->decrement('likes');
        }
        return response()->json(['likes' => $recipe->likes]);
    }
}