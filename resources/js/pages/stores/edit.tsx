import { Head } from '@inertiajs/react';

import { StoreForm } from '@/components/creator-dashboard/store-form';
import { SectionHeading } from '@/components/marketplace/section-heading';
import type { StoreSummary } from '@/types/store';

export default function EditStore({ store }: { store: StoreSummary }) {
    return (
        <>
            <Head title="Manage Store" />
            <div className="mx-auto max-w-3xl">
                <header className="mb-lg">
                    <p className="mb-xs font-label-mono text-label-mono text-primary">
                        STORE SETTINGS
                    </p>
                    <SectionHeading className="normal-case">
                        Manage your store
                    </SectionHeading>
                    <p className="mt-xs max-w-2xl text-on-surface-variant">
                        Update the identity buyers see. Your subdomain cannot be
                        changed.
                    </p>
                </header>

                <section className="border-[3px] border-on-background bg-surface p-md hard-shadow sm:p-lg">
                    <StoreForm store={store} />
                </section>
            </div>
        </>
    );
}
