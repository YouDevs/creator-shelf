import { cva } from 'class-variance-authority';
import type { VariantProps } from 'class-variance-authority';
import type * as React from 'react';

import { cn } from '@/lib/utils';

const buttonVariants = cva('', {
    variants: {
        variant: {
            primary:
                'interactive-press border-[3px] border-on-background bg-primary text-on-primary hard-shadow',
            secondary:
                'interactive-press border-[3px] border-on-background bg-surface text-on-background hard-shadow',
            compact:
                'border-[2px] border-on-background bg-primary font-label-mono text-on-primary transition-colors hover:bg-on-primary-fixed-variant',
            inverse:
                'border-[2px] border-on-background bg-on-background font-label-mono text-label-mono text-surface transition-colors hover:bg-surface hover:text-on-background',
        },
    },
    defaultVariants: {
        variant: 'primary',
    },
});

function Button({
    className,
    variant,
    ...props
}: React.ComponentProps<'button'> & VariantProps<typeof buttonVariants>) {
    return (
        <button
            data-slot="marketplace-button"
            className={cn(buttonVariants({ variant }), className)}
            {...props}
        />
    );
}

export { Button, buttonVariants };
