<?php

namespace App\Http\Controllers;

use App\Models\SavedRecipe;
use App\Models\Recipe;
use Illuminate\Http\Request;

class SavedRecipeController extends Controller
{
    // GET /api/saved — get all saved recipes of logged in user
    public function index(Request $request)
    {
        $saved = $request->user()->savedRecipes;
        return response()->json($saved);
    }

    // POST /api/saved/{recipe} — save a recipe
    public function store(Request $request, Recipe $recipe)
    {
        $existing = SavedRecipe::where('user_id', $request->user()->id)
            ->where('recipe_id', $recipe->id)
            ->first();

        if ($existing) {
            return response()->json(['message' => 'Already saved']);
        }

        SavedRecipe::create([
            'user_id' => $request->user()->id,
            'recipe_id' => $recipe->id,
        ]);

        return response()->json(['message' => 'Recipe saved!']);
    }

    // DELETE /api/saved/{recipe} — unsave a recipe
    public function destroy(Request $request, Recipe $recipe)
    {
        SavedRecipe::where('user_id', $request->user()->id)
            ->where('recipe_id', $recipe->id)
            ->delete();

        return response()->json(['message' => 'Recipe unsaved!']);
    }
}