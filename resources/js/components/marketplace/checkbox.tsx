import type * as React from 'react';

import { cn } from '@/lib/utils';

type CheckboxProps = Omit<React.ComponentProps<'input'>, 'type'>;

function Checkbox({ className, ...props }: CheckboxProps) {
    return (
        <input
            type="checkbox"
            data-slot="marketplace-checkbox"
            className={cn(
                'h-5 w-5 rounded-none border-[2px] border-on-background bg-surface-container text-primary transition-colors checked:bg-primary focus:ring-0',
                className,
            )}
            {...props}
        />
    );
}

export { Checkbox };
export type { CheckboxProps };
