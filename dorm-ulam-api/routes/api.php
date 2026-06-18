<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\RecipeController;
use App\Http\Controllers\SavedRecipeController;
use App\Http\Controllers\UserController; // ← Added this new import for your settings!

// Public routes
Route::post('/register', [AuthController::class, 'register']);
Route::post('/login', [AuthController::class, 'login']);
Route::get('/recipes', [RecipeController::class, 'index']);
Route::get('/recipes/trending', [RecipeController::class, 'trending']); // ← before match
Route::post('/recipes/match', [RecipeController::class, 'match']);

// Protected routes
Route::middleware('auth:sanctum')->group(function () {
    Route::post('/logout', [AuthController::class, 'logout']);
    Route::get('/user', [AuthController::class, 'user']);
    
    // NEW: Settings Routes for updating profile and password
    Route::put('/user/profile', [UserController::class, 'updateProfile']);
    Route::put('/user/password', [UserController::class, 'updatePassword']);
    
    Route::get('/saved', [SavedRecipeController::class, 'index']);
    Route::post('/saved/{recipe}', [SavedRecipeController::class, 'store']);
    Route::delete('/saved/{recipe}', [SavedRecipeController::class, 'destroy']);
    Route::post('/recipes/{recipe}/like', [RecipeController::class, 'like']);      
    Route::post('/recipes/{recipe}/unlike', [RecipeController::class, 'unlike']);  
});