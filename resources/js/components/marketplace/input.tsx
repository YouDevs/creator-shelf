import type * as React from 'react';

import { cn } from '@/lib/utils';

type TextInputProps = Omit<React.ComponentProps<'input'>, 'type'>;
type NumberInputProps = Omit<React.ComponentProps<'input'>, 'type'>;

function TextInput({ className, ...props }: TextInputProps) {
    return (
        <input
            type="text"
            data-slot="marketplace-text-input"
            className={cn(
                'border-[2px] border-on-background bg-surface-container font-label-mono text-label-mono text-on-background transition-all focus:border-[3px] focus:border-primary focus:outline-none',
                className,
            )}
            {...props}
        />
    );
}

function NumberInput({ className, ...props }: NumberInputProps) {
    return (
        <input
            type="number"
            data-slot="marketplace-number-input"
            className={cn(
                'w-full border-[2px] border-on-background bg-surface p-xs font-label-mono text-label-mono focus:border-primary focus:ring-0',
                className,
            )}
            {...props}
        />
    );
}

export { NumberInput, TextInput };
export type { NumberInputProps, TextInputProps };
