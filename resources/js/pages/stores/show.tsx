import { Head } from '@inertiajs/react';

import { Badge } from '@/components/marketplace/badge';
import type { StoreSummary } from '@/types/store';

export default function StoreShow({ store }: { store: StoreSummary }) {
    return (
        <>
            <Head title={store.title} />
            <main className="min-h-screen bg-grid-pattern px-md py-xl text-on-background md:px-lg">
                <section className="mx-auto max-w-3xl border-[3px] border-on-background bg-surface p-lg hard-shadow">
                    <div className="flex flex-col items-start gap-md sm:flex-row sm:items-center">
                        <div className="flex h-24 w-24 shrink-0 items-center justify-center overflow-hidden border-[3px] border-on-background bg-primary-fixed">
                            {store.profileImageUrl ? (
                                <img
                                    src={store.profileImageUrl}
                                    alt={`${store.title} profile`}
                                    className="h-full w-full object-cover"
                                />
                            ) : (
                                <span className="material-symbols-outlined text-4xl text-primary">
                                    storefront
                                </span>
                            )}
                        </div>
                        <div>
                            <Badge className="mb-xs border-[2px] border-on-background bg-secondary-fixed px-2 py-1 text-on-secondary-fixed">
                                CREATOR STORE
                            </Badge>
                            <h1 className="font-headline-xl text-headline-lg-mobile font-bold uppercase sm:text-headline-xl">
                                {store.title}
                            </h1>
                            <p className="font-label-mono text-label-mono text-on-surface-variant">
                                {store.subdomain}
                            </p>
                        </div>
                    </div>
                    <p className="mt-lg max-w-2xl text-body-lg text-on-surface-variant">
                        {store.description}
                    </p>
                </section>
            </main>
        </>
    );
}
