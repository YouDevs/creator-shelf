<?php

use App\Models\Store;
use App\Models\User;
use Illuminate\Http\UploadedFile;
use Illuminate\Support\Facades\Storage;
use Inertia\Testing\AssertableInertia as Assert;

it('redirects guests to login when they try to create a store', function () {
    $response = $this->get(route('stores.create'));

    $response->assertRedirect(route('login'));
});

it('renders the store form for an authenticated user without a store', function () {
    $user = User::factory()->create();

    $response = $this->actingAs($user)->get(route('stores.create'));

    $response->assertInertia(fn (Assert $page) => $page
        ->component('stores/create'),
    );
});

it('creates a store without a profile image and normalizes its subdomain', function () {
    $user = User::factory()->create();

    $response = $this->actingAs($user)->post(route('stores.store'), [
        'title' => 'Studio North',
        'description' => 'Digital assets for bold creators.',
        'subdomain' => '  Studio-North  ',
    ]);

    $response->assertRedirect(route('dashboard'));
    $this->assertDatabaseHas('stores', [
        'user_id' => $user->id,
        'title' => 'Studio North',
        'subdomain' => 'studio-north',
        'profile_image' => null,
    ]);
});

it('rejects an occupied subdomain', function () {
    Store::factory()->create(['subdomain' => 'studio-north']);
    $user = User::factory()->create();

    $response = $this->actingAs($user)
        ->from(route('stores.create'))
        ->post(route('stores.store'), [
            'title' => 'Another Studio',
            'description' => 'Another description.',
            'subdomain' => 'STUDIO-NORTH',
        ]);

    $response->assertRedirect(route('stores.create'));
    $response->assertSessionHasErrors('subdomain');
});

it('redirects a user with a store to their dashboard instead of creating another one', function () {
    $user = User::factory()->create();
    $store = Store::factory()->for($user)->create();

    $response = $this->actingAs($user)->get(route('stores.create'));

    $response->assertRedirect(route('dashboard'));
    expect($user->fresh()->store->is($store))->toBeTrue();
});

it('updates only the authenticated users store', function () {
    Storage::fake('public');
    $user = User::factory()->create();
    $store = Store::factory()->for($user)->create();
    $otherStore = Store::factory()->create();

    $response = $this->actingAs($user)->patch(route('stores.update', $store), [
        'title' => 'Updated Studio',
        'description' => 'Updated description.',
        'profile_image' => UploadedFile::fake()->image('profile.jpg'),
    ]);

    $response->assertRedirect(route('stores.edit', $store));
    $this->assertDatabaseHas('stores', [
        'id' => $store->id,
        'title' => 'Updated Studio',
        'description' => 'Updated description.',
    ]);

    $forbidden = $this->actingAs($user)->get(route('stores.edit', $otherStore));

    $forbidden->assertForbidden();
});

it('renders the dashboard with the authenticated users store', function () {
    $user = User::factory()->create();
    $store = Store::factory()->for($user)->create();

    $response = $this->actingAs($user)->get(route('dashboard'));

    $response->assertInertia(fn (Assert $page) => $page
        ->component('dashboard')
        ->where('store.id', $store->id)
        ->where('store.subdomain', $store->subdomain),
    );
});

it('renders a stores public identity by subdomain', function () {
    $store = Store::factory()->create();

    $response = $this->get(route('stores.public', $store->subdomain));

    $response->assertInertia(fn (Assert $page) => $page
        ->component('stores/show')
        ->where('store.title', $store->title)
        ->where('store.subdomain', $store->subdomain),
    );
});
