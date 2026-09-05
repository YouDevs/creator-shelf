import { cva } from 'class-variance-authority';
import type * as React from 'react';

import { cn } from '@/lib/utils';

const avatarVariants = cva(
    'h-12 w-12 shrink-0 overflow-hidden rounded-full border-[2px] border-on-background',
    {
        variants: {
            tone: {
                primary: 'bg-primary-fixed',
                tertiary: 'bg-tertiary-fixed',
                secondary: 'bg-secondary-fixed',
            },
        },
    },
);

type StoreCardProps = Omit<React.ComponentProps<'div'>, 'children'> & {
    avatarAlt: string;
    avatarSrc: string;
    avatarTone: 'primary' | 'tertiary' | 'secondary';
    name: string;
    specialty: string;
};

function StoreCard({
    avatarAlt,
    avatarSrc,
    avatarTone,
    className,
    name,
    specialty,
    ...props
}: StoreCardProps) {
    return (
        <div
            data-slot="marketplace-store-card"
            className={cn(
                'flex interactive-press cursor-pointer items-center gap-sm border-[3px] border-on-background bg-surface p-sm text-on-background',
                className,
            )}
            {...props}
        >
            <div className={avatarVariants({ tone: avatarTone })}>
                <img
                    className="h-full w-full object-cover"
                    src={avatarSrc}
                    alt={avatarAlt}
                />
            </div>
            <div>
                <h4 className="mb-1 font-headline-md text-[18px] leading-none font-bold">
                    {name}
                </h4>
                <p className="font-label-mono text-label-mono text-[12px] text-on-surface-variant">
                    {specialty}
                </p>
            </div>
        </div>
    );
}

export { StoreCard };
export type { StoreCardProps };
