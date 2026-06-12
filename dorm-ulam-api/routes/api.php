<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\RecipeController;
use App\Http\Controllers\SavedRecipeController;

// Public routes
Route::post('/register', [AuthController::class, 'register']);
Route::post('/login', [AuthController::class, 'login']);
Route::get('/recipes', [RecipeController::class, 'index']);
Route::post('/recipes/match', [RecipeController::class, 'match']);

// Protected routes (need to be logged in)
Route::middleware('auth:sanctum')->group(function () {
    Route::post('/logout', [AuthController::class, 'logout']);
    Route::get('/user', [AuthController::class, 'user']);
    Route::middleware('auth:sanctum')->group(function () {
    Route::post('/logout', [AuthController::class, 'logout']);
    Route::get('/user', [AuthController::class, 'user']);

    // Saved recipes
    Route::get('/saved', [SavedRecipeController::class, 'index']);
    Route::post('/saved/{recipe}', [SavedRecipeController::class, 'store']);
    Route::delete('/saved/{recipe}', [SavedRecipeController::class, 'destroy']);
});
});