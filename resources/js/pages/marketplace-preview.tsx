import { Head } from '@inertiajs/react';

import { Badge } from '@/components/marketplace/badge';
import { Button } from '@/components/marketplace/button';
import { CategoryCard } from '@/components/marketplace/category-card';
import { Checkbox } from '@/components/marketplace/checkbox';
import { IconButton } from '@/components/marketplace/icon-button';
import { NumberInput, TextInput } from '@/components/marketplace/input';
import { ProductCard } from '@/components/marketplace/product-card';
import { SectionHeading } from '@/components/marketplace/section-heading';
import { StoreCard } from '@/components/marketplace/store-card';

export default function MarketplacePreview() {
    return (
        <>
            <Head title="Marketplace Preview" />
            <main className="min-h-screen bg-grid-pattern px-md py-xl text-on-background md:px-lg">
                <div className="mx-auto flex max-w-content flex-col gap-xl">
                    <section className="border-[3px] border-on-background bg-surface p-lg hard-shadow">
                        <p className="mb-xs font-label-mono text-label-mono text-primary">
                            COMPONENT PREVIEW
                        </p>
                        <h1 className="font-headline-xl text-headline-xl tracking-tighter uppercase">
                            Marketplace UI
                        </h1>
                    </section>

                    <section>
                        <div className="mb-lg border-b-[3px] border-on-background pb-sm">
                            <SectionHeading>Primitives</SectionHeading>
                        </div>
                        <div className="grid gap-lg lg:grid-cols-2">
                            <div className="flex flex-wrap items-center gap-sm border-[3px] border-on-background bg-surface p-md hard-shadow">
                                <Button
                                    type="button"
                                    className="px-lg py-sm font-headline-md text-headline-md"
                                >
                                    Start Selling
                                </Button>
                                <Button
                                    type="button"
                                    variant="secondary"
                                    className="px-lg py-sm font-headline-md text-headline-md"
                                >
                                    Browse All
                                </Button>
                                <Button
                                    type="button"
                                    variant="compact"
                                    className="px-sm py-xs"
                                >
                                    Add to Cart
                                </Button>
                                <Button
                                    type="button"
                                    variant="inverse"
                                    className="px-sm py-xs"
                                >
                                    Apply
                                </Button>
                                <IconButton
                                    type="button"
                                    aria-label="Shopping cart"
                                    className="bg-secondary-fixed text-on-background"
                                >
                                    <span className="material-symbols-outlined">
                                        shopping_cart
                                    </span>
                                </IconButton>
                                <IconButton
                                    type="button"
                                    aria-label="Account"
                                    className="bg-surface text-on-background"
                                >
                                    <span className="material-symbols-outlined">
                                        account_circle
                                    </span>
                                </IconButton>
                            </div>
                            <div className="flex flex-col gap-md border-[3px] border-on-background bg-secondary-fixed p-md hard-shadow">
                                <div className="flex flex-wrap gap-sm">
                                    <Badge className="bg-on-background px-2 py-1 text-surface">
                                        7.2K Assets
                                    </Badge>
                                    <Badge className="border-[2px] border-on-background bg-surface px-2 py-1 text-on-background">
                                        $49
                                    </Badge>
                                </div>
                                <TextInput
                                    placeholder="Search assets..."
                                    className="px-sm py-xs hard-shadow-sm"
                                />
                                <div className="flex items-center gap-2">
                                    <NumberInput placeholder="Min" />
                                    <span className="font-bold">-</span>
                                    <NumberInput placeholder="Max" />
                                </div>
                                <label className="group flex items-center gap-xs font-label-mono text-label-mono">
                                    <Checkbox defaultChecked />
                                    <span className="transition-all group-hover:pl-1 group-hover:text-primary">
                                        UI Kits
                                    </span>
                                </label>
                            </div>
                        </div>
                    </section>

                    <section>
                        <div className="mb-lg border-b-[3px] border-on-background pb-sm">
                            <SectionHeading>Category Cards</SectionHeading>
                        </div>
                        <div className="grid auto-rows-[160px] gap-md sm:grid-cols-2 lg:grid-cols-4">
                            <CategoryCard
                                href="#"
                                variant="featured"
                                title="UI Kits"
                                assetCount="7.2K Assets"
                                imageAlt="Abstract digital design assets"
                                imageUrl="https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?auto=format&fit=crop&w=1200&q=80"
                            />
                            <CategoryCard
                                href="#"
                                variant="standard"
                                title="3D Models"
                                assetCount="4.1K Assets"
                                imageAlt="Abstract 3D models"
                                imageUrl="https://images.unsplash.com/photo-1618172193763-c511deb635ca?auto=format&fit=crop&w=800&q=80"
                            />
                            <CategoryCard
                                href="#"
                                variant="typography"
                                title="Fonts"
                                assetCount="1.8K Assets"
                                typeMark="Aa"
                            />
                            <CategoryCard
                                href="#"
                                variant="preset"
                                title="Lightroom Presets"
                                subtitle="Professional color grading"
                                icon="camera"
                            />
                        </div>
                    </section>

                    <section>
                        <div className="mb-lg border-b-[3px] border-on-background pb-sm">
                            <SectionHeading>Product Cards</SectionHeading>
                        </div>
                        <div className="grid gap-md sm:grid-cols-2 lg:grid-cols-3">
                            <ProductCard
                                title="Neo Admin Dashboard Kit"
                                price="$49"
                                authorName="Studio B"
                                authorHref="#"
                                imageTone="neutral"
                                imageAlt="Dashboard UI kit preview"
                                imageSrc="https://images.unsplash.com/photo-1558655146-9f40138edfeb?auto=format&fit=crop&w=900&q=80"
                            />
                            <ProductCard
                                title="Brutal Display Font Family"
                                price="$24"
                                authorName="TypeFoundry X"
                                authorHref="#"
                                imageTone="tertiary"
                                imageAlt="Typography poster preview"
                                imageSrc="https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=900&q=80"
                            />
                            <ProductCard
                                title="Essential 3D Icon Pack"
                                price="$19"
                                authorName="Polygons"
                                authorHref="#"
                                imageTone="primary"
                                imageAlt="3D icon pack preview"
                                imageSrc="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=900&q=80"
                            />
                        </div>
                    </section>

                    <section>
                        <div className="mb-lg border-b-[3px] border-on-background pb-sm">
                            <SectionHeading>Store Cards</SectionHeading>
                        </div>
                        <div className="grid gap-md sm:grid-cols-3">
                            <StoreCard
                                name="Studio B"
                                specialty="UI / UX Kits"
                                avatarTone="primary"
                                avatarAlt="Studio B avatar"
                                avatarSrc="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=160&q=80"
                            />
                            <StoreCard
                                name="TypeFoundry X"
                                specialty="Typography"
                                avatarTone="tertiary"
                                avatarAlt="TypeFoundry X avatar"
                                avatarSrc="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=160&q=80"
                            />
                            <StoreCard
                                name="Polygons"
                                specialty="3D Assets"
                                avatarTone="secondary"
                                avatarAlt="Polygons avatar"
                                avatarSrc="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=160&q=80"
                            />
                        </div>
                    </section>
                </div>
            </main>
        </>
    );
}
