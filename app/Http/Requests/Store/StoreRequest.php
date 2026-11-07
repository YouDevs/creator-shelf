<?php

namespace App\Http\Requests\Store;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class StoreRequest extends FormRequest
{
    public function authorize(): bool
    {
        return $this->user() !== null;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, array<int, mixed>>
     */
    public function rules(): array
    {
        return [
            'title' => ['required', 'string', 'min:1', 'max:120'],
            'description' => ['required', 'string', 'min:1', 'max:2000'],
            'subdomain' => [
                'required',
                'string',
                'min:3',
                'max:63',
                'regex:/^[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?$/',
                Rule::notIn(['www', 'app', 'api', 'admin', 'dashboard', 'login', 'register', 'home', 'settings', 'preview']),
                Rule::unique('stores', 'subdomain')->where(
                    fn ($query) => $query->whereRaw('LOWER(subdomain) = LOWER(?)', [$this->input('subdomain')]),
                ),
            ],
            'profile_image' => ['nullable', 'image', 'max:5120'],
        ];
    }

    protected function prepareForValidation(): void
    {
        $this->merge(['subdomain' => strtolower(trim((string) $this->input('subdomain')))]);
    }
}
