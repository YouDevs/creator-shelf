import type * as React from 'react';

import { MainFooter } from '@/components/marketplace/main-footer';
import { MainHeader } from '@/components/marketplace/main-header';

function MainLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <MainHeader />
            <main>{children}</main>
            <MainFooter />
        </>
    );
}

export { MainLayout };
