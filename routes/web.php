<?php

use App\Http\Controllers\Auth\GoogleAuthController;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\StoreController;
use Illuminate\Support\Facades\Route;

Route::inertia('/', 'welcome')->name('home');

Route::inertia('/home', 'home')->name('marketplace.home');

Route::inertia('/preview', 'marketplace-preview')->name('marketplace.preview');

Route::get('/auth/google/redirect', [GoogleAuthController::class, 'redirect'])
    ->name('google.redirect');
Route::get('/auth/google/callback', [GoogleAuthController::class, 'callback'])
    ->name('google.callback');

Route::middleware('auth')->group(function () {
    Route::get('dashboard', DashboardController::class)->name('dashboard');

    Route::get('stores/create', [StoreController::class, 'create'])->name('stores.create');
    Route::post('stores', [StoreController::class, 'store'])->name('stores.store');
    Route::get('stores/{store}/edit', [StoreController::class, 'edit'])->name('stores.edit');
    Route::patch('stores/{store}', [StoreController::class, 'update'])->name('stores.update');
});

Route::get('stores/{store:subdomain}', [StoreController::class, 'show'])->name('stores.public');

Route::domain('{subdomain}.'.parse_url(config('app.url'), PHP_URL_HOST))
    ->get('/', [StoreController::class, 'publicBySubdomain'])
    ->name('stores.domain');

require __DIR__.'/settings.php';
