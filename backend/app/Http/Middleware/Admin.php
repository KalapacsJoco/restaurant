<?php
namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;
use Illuminate\Support\Facades\Auth;
use App\Models\User;


class Admin
{
    public function handle(Request $request, Closure $next): Response
    {
        $user = Auth::user();
        // dd($user);

        if (Auth::user() && Auth::user()->is_admin) {
            return $next($request);
        }

        // Itt kezelheted a nem admin felhasználók átirányítását vagy hibakezelését
        return redirect('/'); // Példa: Átirányítás a főoldalra
    }
}