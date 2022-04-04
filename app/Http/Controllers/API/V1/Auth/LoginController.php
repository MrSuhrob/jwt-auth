<?php

namespace App\Http\Controllers\API\V1\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Foundation\Auth\AuthenticatesUsers;
use Illuminate\Support\Facades\Auth;
use Illuminate\Validation\ValidationException;
use App\Models\User;
use App\Http\Requests\Auth\LoginRequest;

class LoginController extends Controller
{
    use AuthenticatesUsers;


    public function authentication($user)
    {
        if (!$user->status !== User::STATUS_ACTIVE) {
            $this->guard()->logout();
            return back()->with("error", "You need to confirm your account. Please check your email");
        }

        return redirect()->intended($this->redirectPath());
    }

    public function login(LoginRequest $request)
    {
        if ($this->hasTooManyLoginAttempts($request)) 
        {
            $this->fireLockoutEvent($request);
            $this->sendLockoutResponse($request);
        }

        if (Auth::attempt($request->validated(), true)) 
        {
            $request->session()->regenerate();
            $this->clearLoginAttempts($request);
            return $this->authentication(Auth::user());
        }

        $this->incrementLoginAttempts($request);

        throw ValidationException::withMessages(["email" => [trans("auth.failed")]]);
    }

    public function refresh_token()
    {
        return "refresh_token";
    }

    public function token()
    {
        return "token";
    }
}
