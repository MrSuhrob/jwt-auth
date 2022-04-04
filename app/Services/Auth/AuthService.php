<?php

namespace App\Services\Auth;

use App\Services\Auth\AuthServiceInterface;

class AuthService implements AuthServiceInterface
{

    public function login($request)
    {
        if (!$token = auth()->attempt($request->validated())) 
        {
            return response()->error();
        }

        return $this->getToken($token);
    }

    public function me()
    {
        try 
        {
            return auth()->user();
        } 
        catch (\Tymon\JWTAuth\Exceptions\UserNotDefinedException $e) 
        {
            return $e->getMessage();
        }
        
    }

    public function refresh_token()
    {
        return $this->getToken(auth()->refresh());
    }

    protected function getToken($token)
    {
        return [
            'access_token' => $token,
            'refresh_token' => "",
            'token_type' => 'Bearer ',
            'expires_in' => auth()->factory()->getTTL() * 60
        ];
    }
}
