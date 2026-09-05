import type * as React from 'react';

import { cn } from '@/lib/utils';

function SectionHeading({ className, ...props }: React.ComponentProps<'h2'>) {
    return (
        <h2
            data-slot="marketplace-section-heading"
            className={cn(
                'font-headline-lg text-headline-lg font-bold tracking-tight uppercase',
                className,
            )}
            {...props}
        />
    );
}

export { SectionHeading };
