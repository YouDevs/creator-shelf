import { Head } from '@inertiajs/react';

import { MetricCard } from '@/components/creator-dashboard/metric-card';
import { StoreStatusCard } from '@/components/creator-dashboard/store-status-card';
import { Badge } from '@/components/marketplace/badge';
import { IconButton } from '@/components/marketplace/icon-button';
import { SectionHeading } from '@/components/marketplace/section-heading';
import { cn } from '@/lib/utils';
import type { StoreSummary } from '@/types/store';

const metrics = [
    {
        label: 'Revenue',
        value: '$12,450',
        description: '+14% vs last period',
        icon: 'trending_up',
        badgeTone: 'primary',
        variant: 'primary',
    },
    {
        label: 'Total Sales',
        value: '342',
        description: '+22 new orders',
        icon: 'shopping_bag',
        badgeTone: 'secondary',
        variant: 'neutral',
    },
    {
        label: 'Active Products',
        value: '18',
        description: '2 drafts pending',
        icon: 'inventory',
        badgeTone: 'tertiary',
        variant: 'neutral',
    },
] as const;

const products = [
    {
        name: 'Neon Synth Pack Vol. 1',
        category: 'Audio Presets',
        status: 'Live',
        price: '$29.99',
        sales: '142',
        imageAlt: 'Futuristic digital synth keyboard with neon accents',
        imageSrc:
            'https://lh3.googleusercontent.com/aida-public/AB6AXuAzAduPvd_TaNNwFi3YL17iyBqnL5yj2VwowqPx-Mcmbzz7WxUMgmVcLeJs1ZDGlafosWFH8iJH_rbavSZi4m4tdrwpDNbE_fGjwgcENJuqbIEsVwwg7apTe_qHk4Nxg5mA1kgwmsyIjbdqoLoAbbzoBXCkNMaoM9yR_eeOVRfiw79XoSnhvdYmjBuyLw0-Pdp-rrEzS6gvIfRKuOn7lXwxCeGJfcdvHCE2ZcasWN4pRES6LO8NS7vV',
        isDraft: false,
    },
    {
        name: 'Cyberpunk UI Kit',
        category: 'Figma Assets',
        status: 'Live',
        price: '$49.00',
        sales: '89',
        imageAlt: 'Wireframe globe with electric blue and acid green accents',
        imageSrc:
            'https://lh3.googleusercontent.com/aida-public/AB6AXuDgLs6RBxEDxY3v4voA1jj9NIMu2t14Ql73G-P0w-o5qbNeigs_TIpbRqCUYdVcC8Pt2TU4GS7hGNbL2vocEz9q1qNc3KqvAyhK6C9XAh8f195AcAnSXvExx2qQgwtEq2RN0p2IkX77WHdsNIAY9qjgAER_n6_uRxDRHQ_w_RRRzGv9X02qu2-X49g01MlZ0SAavNrVo8ynhU8Rb67HrXC8M6O5vurJ-du6PiUd16qa24j4OEKNoUxU',
        isDraft: false,
    },
    {
        name: 'Untitled Project 03',
        category: '3D Models',
        status: 'Draft',
        price: '--',
        sales: '0',
        imageAlt: '',
        imageSrc: null,
        isDraft: true,
    },
] as const;

export default function Dashboard({ store }: { store: StoreSummary | null }) {
    return (
        <>
            <Head title="Creator Dashboard" />

            <header className="mb-lg flex flex-col items-start justify-between gap-md sm:flex-row sm:items-end">
                <div>
                    <h1 className="font-headline-xl text-headline-lg-mobile text-on-background uppercase sm:text-headline-xl">
                        Overview
                    </h1>
                    <p className="mt-xs max-w-2xl font-body-lg text-body-lg text-on-surface-variant">
                        Welcome back. Here is how your store is performing
                        today.
                    </p>
                </div>

                <button
                    type="button"
                    className="flex items-center gap-xs border-[3px] border-on-background bg-surface px-sm py-xs font-label-mono text-label-mono hard-shadow-sm"
                >
                    <span
                        aria-hidden="true"
                        className="material-symbols-outlined"
                    >
                        calendar_today
                    </span>
                    Last 30 Days
                    <span
                        aria-hidden="true"
                        className="material-symbols-outlined"
                    >
                        arrow_drop_down
                    </span>
                </button>
            </header>

            <StoreStatusCard store={store} />

            <section
                aria-label="Store performance"
                className="mb-xl grid grid-cols-1 gap-md md:grid-cols-3"
            >
                {metrics.map((metric) => (
                    <MetricCard key={metric.label} {...metric} />
                ))}
            </section>

            <section className="mb-xl">
                <div className="mb-md flex flex-col items-start justify-between gap-xs sm:flex-row sm:items-center">
                    <SectionHeading className="normal-case">
                        Recent Products
                    </SectionHeading>
                    <button
                        type="button"
                        className="font-label-mono text-label-mono underline transition-colors hover:text-primary"
                    >
                        View All Inventory
                    </button>
                </div>

                <div className="overflow-hidden border-[3px] border-on-background bg-surface shadow-[8px_8px_0_0_#000]">
                    <div className="grid grid-cols-12 gap-xs border-b-[3px] border-on-background bg-on-background p-sm font-label-mono text-label-mono tracking-wider text-on-primary uppercase sm:gap-sm">
                        <div className="col-span-6 md:col-span-5">
                            Product Details
                        </div>
                        <div className="col-span-2 hidden text-center md:block">
                            Status
                        </div>
                        <div className="col-span-3 text-right md:col-span-2 md:text-center">
                            Price
                        </div>
                        <div className="col-span-1 hidden text-center md:block">
                            Sales
                        </div>
                        <div className="col-span-3 text-right md:col-span-2">
                            Actions
                        </div>
                    </div>

                    <div className="flex flex-col">
                        {products.map((product, index) => (
                            <div
                                key={product.name}
                                className={cn(
                                    'group grid grid-cols-12 items-center gap-xs p-sm transition-colors sm:gap-sm',
                                    index < products.length - 1 &&
                                        'border-b-[2px] border-on-background',
                                    product.isDraft
                                        ? 'opacity-80 hover:bg-surface-variant hover:opacity-100'
                                        : 'hover:bg-secondary-fixed hover:text-on-secondary-fixed',
                                )}
                            >
                                <div className="col-span-6 flex min-w-0 items-center gap-xs md:col-span-5 md:gap-sm">
                                    {product.imageSrc ? (
                                        <div className="h-12 w-12 shrink-0 overflow-hidden border-[2px] border-on-background bg-surface-container-high">
                                            <img
                                                className="h-full w-full object-cover grayscale transition-all group-hover:grayscale-0"
                                                src={product.imageSrc}
                                                alt={product.imageAlt}
                                                loading="lazy"
                                            />
                                        </div>
                                    ) : (
                                        <div className="flex h-12 w-12 shrink-0 items-center justify-center border-[2px] border-dashed border-outline bg-surface-container-high text-outline">
                                            <span
                                                aria-hidden="true"
                                                className="material-symbols-outlined"
                                            >
                                                image
                                            </span>
                                        </div>
                                    )}
                                    <div className="min-w-0">
                                        <p
                                            className={cn(
                                                'truncate font-headline-md text-[18px]',
                                                product.isDraft && 'italic',
                                            )}
                                        >
                                            {product.name}
                                        </p>
                                        <p className="truncate font-body-md text-[14px] text-outline opacity-80 group-hover:text-current group-hover:opacity-100">
                                            {product.category}
                                        </p>
                                    </div>
                                </div>

                                <div className="col-span-2 hidden justify-center md:flex">
                                    <Badge
                                        className={cn(
                                            'border-[2px] border-on-background px-2 py-1 text-[12px] uppercase',
                                            product.isDraft
                                                ? 'border-dashed bg-surface-dim text-on-surface'
                                                : 'bg-secondary-fixed text-on-secondary-fixed group-hover:bg-on-background group-hover:text-on-primary',
                                        )}
                                    >
                                        {product.status}
                                    </Badge>
                                </div>

                                <div
                                    className={cn(
                                        'col-span-3 text-right font-label-mono text-label-mono font-bold md:col-span-2 md:text-center',
                                        product.isDraft &&
                                            'font-medium text-outline',
                                    )}
                                >
                                    {product.price}
                                </div>

                                <div
                                    className={cn(
                                        'col-span-1 hidden text-center font-body-md text-body-md md:block',
                                        product.isDraft && 'text-outline',
                                    )}
                                >
                                    {product.sales}
                                </div>

                                <div className="col-span-3 flex justify-end gap-xs md:col-span-2">
                                    <IconButton
                                        type="button"
                                        variant="compact"
                                        aria-label={`Edit ${product.name}`}
                                        className="bg-surface text-on-surface hover:bg-primary hover:text-on-primary"
                                    >
                                        <span
                                            aria-hidden="true"
                                            className="material-symbols-outlined text-[20px]"
                                        >
                                            edit
                                        </span>
                                    </IconButton>
                                    <IconButton
                                        type="button"
                                        variant="compact"
                                        aria-label={`Delete ${product.name}`}
                                        className="bg-surface text-on-surface hover:bg-error hover:text-on-error"
                                    >
                                        <span
                                            aria-hidden="true"
                                            className="material-symbols-outlined text-[20px]"
                                        >
                                            delete
                                        </span>
                                    </IconButton>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}
