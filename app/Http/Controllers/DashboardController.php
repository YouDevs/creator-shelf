<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class DashboardController extends Controller
{
    /**
     * Show the seller dashboard with the authenticated user's store.
     */
    public function __invoke(Request $request): Response
    {
        $store = $request->user()->store;

        return Inertia::render('dashboard', [
            'store' => $store ? [
                'id' => $store->id,
                'title' => $store->title,
                'description' => $store->description,
                'subdomain' => $store->subdomain,
                'profileImageUrl' => $store->profile_image
                    ? asset('storage/'.$store->profile_image)
                    : null,
                'publicUrl' => route('stores.public', $store->subdomain),
            ] : null,
        ]);
    }
}
