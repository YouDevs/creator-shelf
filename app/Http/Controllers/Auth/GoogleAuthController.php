<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Str;
use Laravel\Socialite\Socialite;
use Laravel\Socialite\Two\User as SocialiteUser;
use Symfony\Component\HttpFoundation\RedirectResponse as SymfonyRedirectResponse;

class GoogleAuthController extends Controller
{
    public function redirect(): SymfonyRedirectResponse
    {
        return Socialite::driver('google')->redirect();
    }

    public function callback(): RedirectResponse
    {
        /** @var SocialiteUser $googleUser */
        $googleUser = Socialite::driver('google')->user();

        abort_if($googleUser->getEmail() === null, 422, 'Google did not return an email address.');

        $user = User::query()
            ->where('google_id', $googleUser->getId())
            ->orWhere('email', $googleUser->getEmail())
            ->first();

        if ($user === null) {
            [$name, $lastName] = $this->profileName($googleUser);

            $user = User::create([
                'name' => $name,
                'last_name' => $lastName,
                'username' => $this->uniqueUsername($googleUser),
                'email' => $googleUser->getEmail(),
                'google_id' => $googleUser->getId(),
                'password' => Str::random(64),
            ]);
        } else {
            $user->forceFill(['google_id' => $googleUser->getId()])->save();
        }

        Auth::login($user);
        request()->session()->regenerate();

        return redirect()->intended(config('fortify.home'));
    }

    /**
     * Split Google's display name into the profile fields required by the
     * application.
     *
     * @return array{0: string, 1: string}
     */
    private function profileName(SocialiteUser $googleUser): array
    {
        $parts = Str::of($googleUser->getName() ?: 'Google user')
            ->squish()
            ->explode(' ')
            ->values();

        return [
            $parts->shift() ?: 'Google user',
            $parts->implode(' '),
        ];
    }

    private function uniqueUsername(SocialiteUser $googleUser): string
    {
        $baseUsername = Str::of($googleUser->getNickname() ?: $googleUser->getEmail())
            ->before('@')
            ->lower()
            ->replaceMatches('/[^a-z0-9_-]+/', '-')
            ->trim('-_')
            ->substr(0, 240)
            ->toString() ?: 'google-user';

        $username = $baseUsername;
        $suffix = 1;

        while (User::where('username', $username)->exists()) {
            $username = "{$baseUsername}-{$suffix}";
            $suffix++;
        }

        return $username;
    }
}
