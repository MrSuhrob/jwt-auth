<?php

namespace App\Http\Requests\Auth;

use Illuminate\Foundation\Http\FormRequest;

class RegisterRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return false;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            "name" => "required|string|min:2|max:25",
            "email" => "required|email|unique:users,email",
            "password" => "required|string|min:8|max:25|required_with:password_confirmation",
            "password_confirmation" => "required|string|min:8|max:25"
        ];
    }
}
