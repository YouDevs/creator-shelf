<?php

use App\Models\User;
use Laravel\Socialite\Socialite;
use Laravel\Socialite\Two\User as SocialiteUser;

test('users can authenticate with google', function () {
    Socialite::fake('google', SocialiteUser::fake([
        'id' => 'google-123',
        'email' => 'new@example.com',
        'name' => 'New User',
    ]));

    $response = $this->get(route('google.callback'));

    $response->assertRedirect('/home');
    $this->assertAuthenticated();
    $this->assertDatabaseHas('users', [
        'email' => 'new@example.com',
        'google_id' => 'google-123',
        'name' => 'New',
        'last_name' => 'User',
        'username' => 'testuser',
    ]);
});

test('google authentication reuses an existing account with the same email', function () {
    $user = User::factory()->create([
        'email' => 'existing@example.com',
        'google_id' => null,
    ]);

    Socialite::fake('google', SocialiteUser::fake([
        'id' => 'google-456',
        'email' => 'existing@example.com',
        'name' => 'Existing User',
    ]));

    $response = $this->get(route('google.callback'));

    $response->assertRedirect('/home');
    $this->assertAuthenticatedAs($user->fresh());
    $this->assertDatabaseCount('users', 1);
    $this->assertDatabaseHas('users', [
        'id' => $user->id,
        'google_id' => 'google-456',
    ]);
});
