import { cva } from 'class-variance-authority';
import type { VariantProps } from 'class-variance-authority';
import type * as React from 'react';

import { cn } from '@/lib/utils';

const iconButtonVariants = cva(
    'flex items-center justify-center border-on-background transition-colors',
    {
        variants: {
            variant: {
                raised: 'h-10 w-10 interactive-press border-[3px] hard-shadow-sm',
                compact: 'h-8 w-8 border-[2px]',
            },
        },
        defaultVariants: {
            variant: 'raised',
        },
    },
);

function IconButton({
    className,
    variant,
    ...props
}: React.ComponentProps<'button'> & VariantProps<typeof iconButtonVariants>) {
    return (
        <button
            data-slot="marketplace-icon-button"
            className={cn(iconButtonVariants({ variant }), className)}
            {...props}
        />
    );
}

export { IconButton, iconButtonVariants };
