import { Link, usePage } from '@inertiajs/react';
import type { ReactNode } from 'react';

import StoreController from '@/actions/App/Http/Controllers/StoreController';
import { Badge } from '@/components/marketplace/badge';
import { cn } from '@/lib/utils';
import { dashboard } from '@/routes';
import type { StoreSummary } from '@/types/store';

const navigationItems = [
    { label: 'Overview', icon: 'dashboard', isActive: true },
    { label: 'My Products', icon: 'inventory_2', isActive: false },
    { label: 'Sales', icon: 'payments', isActive: false },
    { label: 'Analytics', icon: 'leaderboard', isActive: false },
    { label: 'Settings', icon: 'settings', isActive: false },
] as const;

function CreatorDashboardLayout({ children }: { children: ReactNode }) {
    const { store } = usePage<{ store: StoreSummary | null }>().props;

    return (
        <div className="min-h-screen bg-background text-on-surface lg:h-screen lg:overflow-hidden">
            <aside className="z-40 flex flex-col gap-sm border-b-[3px] border-on-background bg-surface-container p-sm lg:fixed lg:inset-y-0 lg:left-0 lg:w-64 lg:border-r-[3px] lg:border-b-0">
                <div className="flex flex-wrap items-start justify-between gap-sm lg:mb-lg lg:block">
                    <div className="flex items-center gap-xs">
                        <div className="flex h-10 w-10 items-center justify-center border-[3px] border-on-background bg-primary text-on-primary hard-shadow-sm">
                            <span className="material-symbols-outlined font-bold">
                                storefront
                            </span>
                        </div>
                        <div>
                            <h2 className="font-headline-md text-headline-md font-bold text-on-surface">
                                Creator Hub
                            </h2>
                            <p className="font-label-mono text-label-mono text-on-surface-variant">
                                Manage your digital assets
                            </p>
                        </div>
                    </div>

                    <Badge className="inline-flex items-center gap-1 border-[2px] border-on-background bg-secondary-fixed px-xs py-1 text-on-secondary-fixed lg:mt-sm">
                        <span
                            aria-hidden="true"
                            className="material-symbols-outlined text-[16px]"
                            style={{ fontVariationSettings: "'FILL' 1" }}
                        >
                            verified
                        </span>
                        Identity Verified
                    </Badge>
                </div>

                <nav
                    aria-label="Creator dashboard"
                    className="flex grow gap-xs overflow-x-auto pb-1 font-label-mono text-label-mono lg:flex-col lg:overflow-visible lg:pb-0"
                >
                    {navigationItems.map((item) => {
                        const className = cn(
                            'flex shrink-0 items-center gap-xs border-[2px] p-2 transition-colors lg:gap-sm',
                            item.isActive
                                ? 'scale-[0.97] border-on-background bg-secondary-container font-bold text-on-secondary-container hard-shadow-sm'
                                : 'border-transparent text-on-surface-variant hover:border-on-background hover:bg-primary-fixed-dim hover:text-on-primary-fixed',
                        );
                        const content = (
                            <>
                                <span
                                    aria-hidden="true"
                                    className="material-symbols-outlined"
                                >
                                    {item.icon}
                                </span>
                                {item.label}
                            </>
                        );

                        return item.isActive ? (
                            <Link
                                key={item.label}
                                href={dashboard()}
                                className={className}
                            >
                                {content}
                            </Link>
                        ) : (
                            <a key={item.label} href="#" className={className}>
                                {content}
                            </a>
                        );
                    })}
                </nav>

                <Link
                    href={
                        store
                            ? StoreController.edit.url(store.id)
                            : StoreController.create.url()
                    }
                    className="flex w-full interactive-press items-center justify-center gap-xs border-[3px] border-on-background bg-primary px-sm py-sm font-headline-md text-headline-md text-on-primary hard-shadow"
                >
                    <span
                        aria-hidden="true"
                        className="material-symbols-outlined"
                    >
                        {store ? 'settings' : 'storefront'}
                    </span>
                    {store ? 'Manage Store' : 'Create Store'}
                </Link>
            </aside>

            <main className="min-h-screen bg-surface-container-low bg-grid-pattern p-sm sm:p-md lg:ml-64 lg:h-screen lg:overflow-y-auto lg:p-lg">
                {children}
            </main>
        </div>
    );
}

export { CreatorDashboardLayout };
