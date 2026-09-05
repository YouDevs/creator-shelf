import { cva } from 'class-variance-authority';
import type * as React from 'react';

import { Badge } from '@/components/marketplace/badge';
import { Button } from '@/components/marketplace/button';
import { cn } from '@/lib/utils';

const productImageVariants = cva(
    'relative h-[200px] overflow-hidden border-b-[3px] border-on-background',
    {
        variants: {
            tone: {
                neutral: 'bg-surface-container-high',
                tertiary: 'bg-tertiary-fixed',
                primary: 'bg-primary-fixed-dim',
            },
        },
    },
);

type ProductCardProps = Omit<React.ComponentProps<'div'>, 'children'> & {
    authorHref: string;
    authorName: string;
    imageAlt: string;
    imageSrc: string;
    imageTone: 'neutral' | 'tertiary' | 'primary';
    price: string;
    title: string;
};

function ProductCard({
    authorHref,
    authorName,
    className,
    imageAlt,
    imageSrc,
    imageTone,
    price,
    title,
    ...props
}: ProductCardProps) {
    return (
        <div
            data-slot="marketplace-product-card"
            className={cn(
                'group flex flex-col border-[3px] border-on-background bg-surface hard-shadow',
                className,
            )}
            {...props}
        >
            <div className={productImageVariants({ tone: imageTone })}>
                <img
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    src={imageSrc}
                    alt={imageAlt}
                />
                <Badge className="absolute top-sm right-sm border-[2px] border-on-background bg-secondary-fixed px-2 py-1 font-bold">
                    {price}
                </Badge>
            </div>
            <div className="flex grow flex-col p-sm">
                <h4 className="mb-1 font-headline-md text-headline-md leading-tight text-on-background">
                    {title}
                </h4>
                <p className="mb-md font-label-mono text-label-mono text-on-surface-variant">
                    by{' '}
                    <a
                        className="text-primary hover:underline"
                        href={authorHref}
                    >
                        {authorName}
                    </a>
                </p>
                <div className="mt-auto flex gap-xs">
                    <Button variant="compact" className="grow py-1">
                        Add to Cart
                    </Button>
                </div>
            </div>
        </div>
    );
}

export { ProductCard };
export type { ProductCardProps };
