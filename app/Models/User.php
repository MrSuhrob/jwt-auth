<?php

namespace App\Models;

use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Tymon\JWTAuth\Contracts\JWTSubject;
use Spatie\Permission\Traits\HasRoles;
use Spatie\Permission\Traits\HasPermissions;

class User extends Authenticatable implements JWTSubject, MustVerifyEmail
{
    use HasFactory, Notifiable, HasRoles, HasPermissions;

    public const STATUS_ACTIVE = "active";
    public const STATUS_WAIT = "wait";
    public const STATUS_BANNED = "banned";

    protected $fillable = [
        'name',
        'email',
        'password',
    ];

    protected $hidden = [
        'password',
        'remember_token',
    ];

    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

    public function getJWTIdentifier()
    {
        return $this->getKey();
    }

    public function getJWTCustomClaims()
    {
        return [];
    }

    public function images()
    {
        return $this->hasMany(Images::class);
    }

}
