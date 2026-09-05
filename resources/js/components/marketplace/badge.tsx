import type * as React from 'react';

import { cn } from '@/lib/utils';

function Badge({ className, ...props }: React.ComponentProps<'span'>) {
    return (
        <span
            data-slot="marketplace-badge"
            className={cn('font-label-mono text-label-mono', className)}
            {...props}
        />
    );
}

export { Badge };
