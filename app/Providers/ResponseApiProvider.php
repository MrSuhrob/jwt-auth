<?php

namespace App\Providers;

use Illuminate\Support\Facades\Response;
use Illuminate\Support\ServiceProvider;

class ResponseApiProvider extends ServiceProvider
{

    public function register()
    {
        
    }

    public function boot()
    {
        Response::macro('success', function ($data = [], $message = "Successfuly!", $status = 200) {
            return Response::json([
                'errors'  => false,
                'data' => $data,
                'message' => $message
            ], $status);
        });

        Response::macro('error', function ($message = "Error!", $status = 400) {
            return Response::json([
                'errors'  => true,
                'data' => [],
                'message' => $message,
            ], $status);
        });
    }
}
