import { Head } from '@inertiajs/react';

import { StoreForm } from '@/components/creator-dashboard/store-form';
import { SectionHeading } from '@/components/marketplace/section-heading';

export default function CreateStore() {
    return (
        <>
            <Head title="Create Store" />
            <div className="mx-auto max-w-3xl">
                <header className="mb-lg">
                    <p className="mb-xs font-label-mono text-label-mono text-primary">
                        SELLER SETUP
                    </p>
                    <SectionHeading className="normal-case">
                        Create your store
                    </SectionHeading>
                    <p className="mt-xs max-w-2xl text-on-surface-variant">
                        Set up the public identity for your digital products.
                        Your subdomain will be permanent.
                    </p>
                </header>

                <section className="border-[3px] border-on-background bg-surface p-md hard-shadow sm:p-lg">
                    <StoreForm />
                </section>
            </div>
        </>
    );
}
