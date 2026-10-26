<?php

use App\Models\User;
use Laravel\Fortify\Features;

beforeEach(function () {
    $this->skipUnlessFortifyHas(Features::registration());
});

test('registration screen can be rendered', function () {
    $response = $this->get(route('register'));

    $response->assertOk();
});

test('new users can register', function () {
    $response = $this->post(route('register.store'), [
        'name' => 'Test User',
        'last_name' => 'Example',
        'username' => 'test-user',
        'email' => 'test@example.com',
        'password' => 'password',
        'password_confirmation' => 'password',
    ]);

    $this->assertAuthenticated();
    $response->assertRedirect('/home');
    $this->assertDatabaseHas('users', [
        'name' => 'Test User',
        'last_name' => 'Example',
        'username' => 'test-user',
        'email' => 'test@example.com',
    ]);
});

test('usernames must be unique', function () {
    User::factory()->create(['username' => 'taken-name']);

    $response = $this->from(route('register'))->post(route('register.store'), [
        'name' => 'Test User',
        'last_name' => 'Example',
        'username' => 'taken-name',
        'email' => 'test@example.com',
        'password' => 'password',
        'password_confirmation' => 'password',
    ]);

    $response->assertSessionHasErrors('username');
    $this->assertGuest();
});
