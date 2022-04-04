<?php

use Illuminate\Support\Facades\Route;

Route::group(['namespace' => 'App\Http\Controllers\API\V1'], function()
    {
        Route::controller(
            Auth\RegisterController::class)
                ->group(function () 
                {
                    Route::post('register', 'register')->name('register');
                    Route::get("verify_email/{token}")->name("verify_email");
                }
        );

        Route::controller(
            Auth\LoginController::class)
                ->group(function () 
                {
                    Route::post('login', 'login')->name('login');
                    Route::post('refresh_token', 'refresh_token')->name('refresh_token');
                    Route::get('token', 'token')->name('token');
                }
        );

        Route::middleware("api")
            ->group(function()
            {
                Route::post('logout', Auth\LogoutController::class)->name('logout');
            }
        );
    }
);
