import { Link } from '@inertiajs/react';

import StoreController from '@/actions/App/Http/Controllers/StoreController';
import { Badge } from '@/components/marketplace/badge';
import type { StoreSummary } from '@/types/store';

function StoreStatusCard({ store }: { store: StoreSummary | null }) {
    if (!store) {
        return (
            <section className="mb-xl grid gap-md border-[3px] border-on-background bg-secondary-fixed p-md hard-shadow md:grid-cols-[1fr_auto] md:items-center">
                <div>
                    <Badge className="mb-xs border-[2px] border-on-background bg-on-background px-2 py-1 text-surface">
                        SELLER SETUP
                    </Badge>
                    <h2 className="font-headline-lg text-headline-lg font-bold">
                        Open your creator store
                    </h2>
                    <p className="mt-xs max-w-2xl text-on-secondary-fixed-variant">
                        Create your store identity to start preparing your
                        digital catalog.
                    </p>
                </div>
                <Link
                    href={StoreController.create.url()}
                    className="inline-flex w-full interactive-press items-center justify-center border-[3px] border-on-background bg-primary px-md py-sm font-headline-md text-headline-md text-on-primary hard-shadow md:w-auto"
                >
                    Create Store
                </Link>
            </section>
        );
    }

    return (
        <section className="mb-xl grid gap-md border-[3px] border-on-background bg-surface p-md hard-shadow md:grid-cols-[auto_1fr_auto] md:items-center">
            <div className="flex h-20 w-20 items-center justify-center overflow-hidden border-[3px] border-on-background bg-primary-fixed">
                {store.profileImageUrl ? (
                    <img
                        src={store.profileImageUrl}
                        alt={`${store.title} profile`}
                        className="h-full w-full object-cover"
                    />
                ) : (
                    <span className="material-symbols-outlined text-3xl text-primary">
                        storefront
                    </span>
                )}
            </div>
            <div className="min-w-0">
                <Badge className="mb-xs border-[2px] border-on-background bg-secondary-fixed px-2 py-1 text-on-secondary-fixed">
                    YOUR STORE
                </Badge>
                <h2 className="truncate font-headline-lg text-headline-lg font-bold">
                    {store.title}
                </h2>
                <p className="mt-xs line-clamp-2 text-on-surface-variant">
                    {store.description}
                </p>
                <a
                    href={store.publicUrl}
                    className="mt-xs inline-block font-label-mono text-label-mono text-primary underline"
                >
                    {store.publicUrl}
                </a>
            </div>
            <Link
                href={StoreController.edit.url(store.id)}
                className="inline-flex w-full interactive-press items-center justify-center border-[3px] border-on-background bg-surface px-md py-sm font-headline-md text-headline-md text-on-background hard-shadow md:w-auto"
            >
                Manage Store
            </Link>
        </section>
    );
}

export { StoreStatusCard };
