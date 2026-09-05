import type * as React from 'react';

import { cn } from '@/lib/utils';

function IconButton({ className, ...props }: React.ComponentProps<'button'>) {
    return (
        <button
            data-slot="marketplace-icon-button"
            className={cn(
                'flex h-10 w-10 interactive-press items-center justify-center border-[3px] border-on-background hard-shadow-sm',
                className,
            )}
            {...props}
        />
    );
}

export { IconButton };
