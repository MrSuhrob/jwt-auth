<?php

namespace App\Http\Controllers\API\V1\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class LogoutController extends Controller
{

    public function __invoke(Request $request)
    {
        if (auth()->check()) 
        {
            auth()->logout();
            $request->session()->invalidate();
            return response([]);
        }

        return response([]);
    }
}
