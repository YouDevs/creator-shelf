import { Head } from '@inertiajs/react';

import { ExploreCategoriesSection } from '@/components/marketplace/explore-categories-section';
import { FeaturedStoresSection } from '@/components/marketplace/featured-stores-section';
import { HeroSection } from '@/components/marketplace/hero-section';
import { MarketplaceFilters } from '@/components/marketplace/marketplace-filters';
import { TrendingNowSection } from '@/components/marketplace/trending-now-section';
import { MainLayout } from '@/layouts/main-layout';

export default function Home() {
    return (
        <>
            <Head title="NEO-MARKET" />
            <MainLayout>
                <HeroSection />
                <div className="mx-auto grid max-w-content grid-cols-1 gap-lg px-md py-xl md:grid-cols-12 md:px-lg">
                    <MarketplaceFilters />
                    <div
                        data-slot="marketplace-main-feed"
                        className="flex flex-col gap-xl md:col-span-9"
                    >
                        <ExploreCategoriesSection />
                        <TrendingNowSection />
                        <FeaturedStoresSection />
                    </div>
                </div>
            </MainLayout>
        </>
    );
}
