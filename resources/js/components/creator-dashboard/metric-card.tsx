import { cva } from 'class-variance-authority';
import type { VariantProps } from 'class-variance-authority';
import type * as React from 'react';

import { Badge } from '@/components/marketplace/badge';
import { cn } from '@/lib/utils';

const metricCardVariants = cva(
    'group relative flex min-h-40 flex-col justify-between overflow-hidden border-[3px] border-on-background p-md hard-shadow',
    {
        variants: {
            variant: {
                primary: 'bg-primary text-on-primary',
                neutral: 'bg-surface text-on-surface',
            },
        },
        defaultVariants: {
            variant: 'neutral',
        },
    },
);

const metricBadgeVariants = cva(
    'border-[2px] border-on-background px-2 py-1 tracking-widest uppercase',
    {
        variants: {
            tone: {
                primary: 'bg-on-primary text-primary',
                secondary: 'bg-secondary-fixed text-on-secondary-fixed',
                tertiary: 'bg-tertiary text-on-tertiary',
            },
        },
    },
);

type MetricCardProps = Omit<React.ComponentProps<'article'>, 'children'> &
    VariantProps<typeof metricCardVariants> & {
        badgeTone: 'primary' | 'secondary' | 'tertiary';
        description: string;
        icon: string;
        label: string;
        value: string;
    };

function MetricCard({
    badgeTone,
    className,
    description,
    icon,
    label,
    value,
    variant,
    ...props
}: MetricCardProps) {
    const isPrimary = variant === 'primary';

    return (
        <article
            data-slot="creator-dashboard-metric-card"
            className={cn(metricCardVariants({ variant }), className)}
            {...props}
        >
            {isPrimary && (
                <span
                    aria-hidden="true"
                    className="material-symbols-outlined absolute -top-5 -right-5 text-[120px] opacity-20 transition-transform duration-500 group-hover:scale-110"
                >
                    account_balance_wallet
                </span>
            )}

            <div className="z-10 flex items-start justify-between gap-sm">
                <Badge className={metricBadgeVariants({ tone: badgeTone })}>
                    {label}
                </Badge>
                <span
                    aria-hidden="true"
                    className={cn(
                        'material-symbols-outlined',
                        isPrimary
                            ? 'rounded-full border-[2px] border-on-background bg-on-primary p-1 text-secondary-fixed'
                            : badgeTone === 'tertiary'
                              ? 'text-tertiary'
                              : 'text-primary',
                    )}
                >
                    {icon}
                </span>
            </div>

            <div className="z-10 mt-md">
                <p
                    className={cn(
                        'font-headline-lg text-headline-lg font-bold',
                        isPrimary &&
                            'font-headline-xl text-headline-lg-mobile sm:text-headline-xl',
                    )}
                >
                    {value}
                </p>
                <p
                    className={cn(
                        'mt-1 font-body-md text-body-md',
                        isPrimary
                            ? 'text-primary-fixed-dim'
                            : 'text-on-surface-variant',
                    )}
                >
                    {description}
                </p>
            </div>
        </article>
    );
}

export { MetricCard, metricCardVariants };
export type { MetricCardProps };
