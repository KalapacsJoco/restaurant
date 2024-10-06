<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;


class AuthController extends Controller
{
    public function register(Request $request)
    {
        $validated = $request->validate([
            'first_name' => 'required|max:255',
            'last_name' => 'required|max:255',
            'email' => 'required|unique:users,email',
            'password' => 'required|confirmed',
            'phone' => 'required|max:255',
            'street' => 'required|max:255',
            'street_number' => 'required|max:255',
        ]);

        $user = User::create($validated);

        $token = $user->createtoken($request->street);

        return response()->json([
            'message' => 'Felhasználó sikeresen létrehozva',
            'user' => $user,
            'token' => $token->plainTextToken

        ]);

        // return 'szia';
    }

    public function login(Request $request)
    {
        $request->validate([
            'email' => 'required',
            'password' => 'required',
        ]);

        $user = User::where('email', $request->email)->first();

        if (!$user || !Hash::check($request->password, $user->password)) {
            return response()->json([
                'message' => 'Email vagy jelszó hibás',

            ]);
        } else {

            $token = $user->createToken('user_token_' . $user->id);

            return response()->json([
                'message' => 'Sikeresen bejelentkezve',
                'user' => $user,
                'token' => $token->plainTextToken
            ]);
        }
    }
    public function logout(Request $request)
    {
        dd('$request->user()');
        $request->user()->token->delete();
        return response()->json([
            'message' => 'Ki vagy jelentkezve',
        ]);
    }
}
