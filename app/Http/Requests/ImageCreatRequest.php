<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class ImageCreatRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return auth()->check();
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            "image" => "required|mimes:jpeg,jpg,png,svg|max:10000",
            "image_type" => "required|string"
        ];
    }
}
