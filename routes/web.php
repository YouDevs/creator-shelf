<?php

use App\Http\Controllers\Auth\GoogleAuthController;
use Illuminate\Support\Facades\Route;

Route::inertia('/', 'welcome')->name('home');

Route::inertia('/home', 'home')->name('marketplace.home');

Route::inertia('/preview', 'marketplace-preview')->name('marketplace.preview');

Route::get('/auth/google/redirect', [GoogleAuthController::class, 'redirect'])
    ->name('google.redirect');
Route::get('/auth/google/callback', [GoogleAuthController::class, 'callback'])
    ->name('google.callback');

Route::middleware('auth')->group(function () {
    Route::inertia('dashboard', 'dashboard')->name('dashboard');
});

require __DIR__.'/settings.php';
