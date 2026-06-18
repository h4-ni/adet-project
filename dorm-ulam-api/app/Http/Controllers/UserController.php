<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\ValidationException;

class UserController extends Controller
{
    // 1. Update Profile (Name & Email)
    public function updateProfile(Request $request)
    {
        $user = $request->user(); // Get the currently logged-in user

        // Validate the incoming data
        $request->validate([
            'name' => 'required|string|max:255',
            // Ensure email is unique, but ignore the current user's email so they can keep it!
            'email' => 'required|string|email|max:255|unique:users,email,' . $user->id,
        ]);

        // Update and save
        $user->name = $request->name;
        $user->email = $request->email;
        $user->save();

        return response()->json([
            'message' => 'Profile updated successfully!',
            'user' => $user
        ], 200);
    }

    // 2. Update Password
    public function updatePassword(Request $request)
    {
        $user = $request->user();

        // Validate the incoming passwords
        $request->validate([
            'current_password' => 'required|string',
            'new_password' => 'required|string|min:8', // Require at least 8 characters
        ]);

        // Check if the current password matches the one in the database
        if (!Hash::check($request->current_password, $user->password)) {
            return response()->json([
                'message' => 'The provided current password does not match our records.'
            ], 400); // 400 Bad Request triggers the error message in your React app
        }

        // Hash and save the new password
        $user->password = Hash::make($request->new_password);
        $user->save();

        return response()->json([
            'message' => 'Password changed successfully!'
        ], 200); // 200 OK triggers the green success message in React
    }
}