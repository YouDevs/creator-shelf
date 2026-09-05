<?php

use Illuminate\Support\Facades\Route;

Route::view('/home', 'home')->name('reference');

Route::inertia('/', 'welcome')->name('home');

Route::inertia('/preview', 'marketplace-preview')->name('marketplace.preview');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::inertia('dashboard', 'dashboard')->name('dashboard');
});

require __DIR__.'/settings.php';
