<?php

namespace App\Http\Controllers;

use App\Http\Requests\Store\StoreRequest;
use App\Http\Requests\Store\UpdateStoreRequest;
use App\Models\Store;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Gate;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;
use Inertia\Response;

class StoreController extends Controller
{
    /**
     * Show the store creation form or redirect an existing seller.
     */
    public function create(Request $request): Response|RedirectResponse
    {
        if ($request->user()->store()->exists()) {
            return to_route('dashboard');
        }

        return Inertia::render('stores/create');
    }

    /**
     * Create the authenticated user's store.
     */
    public function store(StoreRequest $request): RedirectResponse
    {
        if ($request->user()->store()->exists()) {
            return to_route('dashboard');
        }

        $store = $request->user()->store()->create([
            ...$request->safe()->except('profile_image'),
            'profile_image' => $request->file('profile_image')?->store('stores', 'public'),
        ]);

        return to_route('dashboard')->with('success', "Store {$store->title} created.");
    }

    /**
     * Show the authenticated seller's store settings.
     */
    public function edit(Store $store): Response
    {
        Gate::authorize('view', $store);

        return Inertia::render('stores/edit', [
            'store' => $this->storeData($store),
        ]);
    }

    /**
     * Update the authenticated seller's store settings.
     */
    public function update(UpdateStoreRequest $request, Store $store): RedirectResponse
    {
        $oldProfileImage = $store->profile_image;
        $newProfileImage = $request->file('profile_image')?->store('stores', 'public');

        $store->update([
            ...$request->safe()->except('profile_image'),
            ...($newProfileImage ? ['profile_image' => $newProfileImage] : []),
        ]);

        if ($newProfileImage && $oldProfileImage) {
            Storage::disk('public')->delete($oldProfileImage);
        }

        return to_route('stores.edit', $store)->with('success', 'Store updated.');
    }

    /**
     * Show a store's public identity through the path fallback.
     */
    public function show(Store $store): Response
    {
        return Inertia::render('stores/show', [
            'store' => $this->storeData($store),
        ]);
    }

    /**
     * Show a store's public identity through its configured subdomain.
     */
    public function publicBySubdomain(string $subdomain): Response
    {
        $store = Store::query()
            ->where('subdomain', strtolower($subdomain))
            ->firstOrFail();

        return Inertia::render('stores/show', [
            'store' => $this->storeData($store),
        ]);
    }

    /**
     * @return array{id: int, title: string, description: string, subdomain: string, profileImageUrl: string|null, publicUrl: string}
     */
    private function storeData(Store $store): array
    {
        return [
            'id' => $store->id,
            'title' => $store->title,
            'description' => $store->description,
            'subdomain' => $store->subdomain,
            'profileImageUrl' => $store->profile_image
                ? asset('storage/'.$store->profile_image)
                : null,
            'publicUrl' => route('stores.public', $store->subdomain),
        ];
    }
}
