import { cva } from 'class-variance-authority';
import type * as React from 'react';

import { Badge } from '@/components/marketplace/badge';
import { cn } from '@/lib/utils';

const categoryCardVariants = cva(
    'group relative block interactive-press overflow-hidden border-[3px] border-on-background p-sm hard-shadow',
    {
        variants: {
            variant: {
                featured: 'bg-tertiary-fixed lg:col-span-2 lg:row-span-2',
                standard: 'bg-secondary-fixed',
                typography: 'bg-primary-fixed-dim',
                preset: 'bg-surface-container-high lg:col-span-2',
            },
        },
    },
);

type CategoryCardBaseProps = Omit<React.ComponentProps<'a'>, 'children'> & {
    title: string;
};

type CategoryCardProps =
    | (CategoryCardBaseProps & {
          assetCount: string;
          imageAlt: string;
          imageUrl: string;
          variant: 'featured' | 'standard';
      })
    | (CategoryCardBaseProps & {
          assetCount: string;
          typeMark: string;
          variant: 'typography';
      })
    | (CategoryCardBaseProps & {
          icon: string;
          subtitle: string;
          variant: 'preset';
      });

function CategoryCard(props: CategoryCardProps) {
    if (props.variant === 'featured' || props.variant === 'standard') {
        const {
            assetCount,
            className,
            imageAlt,
            imageUrl,
            title,
            variant,
            ...anchorProps
        } = props;

        return (
            <a
                data-slot="marketplace-category-card"
                className={cn(categoryCardVariants({ variant }), className)}
                {...anchorProps}
            >
                <div
                    className="absolute inset-0 bg-cover bg-center opacity-40 mix-blend-multiply transition-transform duration-500 group-hover:scale-105"
                    data-alt={imageAlt}
                    style={{ backgroundImage: `url('${imageUrl}')` }}
                />
                <div className="relative z-10 flex h-full flex-col justify-between">
                    <Badge
                        className={cn(
                            'w-max px-2 py-1',
                            variant === 'featured'
                                ? 'bg-on-background text-surface'
                                : 'border-[2px] border-on-background bg-surface text-on-background',
                        )}
                    >
                        {assetCount}
                    </Badge>
                    <h3
                        className={cn(
                            'text-on-background',
                            variant === 'featured'
                                ? 'font-headline-xl text-headline-xl transition-transform group-hover:translate-x-2'
                                : 'font-headline-md text-headline-md',
                        )}
                    >
                        {title}
                    </h3>
                </div>
            </a>
        );
    }

    if (props.variant === 'typography') {
        const {
            assetCount,
            className,
            title,
            typeMark,
            variant,
            ...anchorProps
        } = props;

        return (
            <a
                data-slot="marketplace-category-card"
                className={cn(categoryCardVariants({ variant }), className)}
                {...anchorProps}
            >
                <div className="absolute inset-0 flex items-center justify-center opacity-20">
                    <span className="font-headline-xl text-[80px] font-bold">
                        {typeMark}
                    </span>
                </div>
                <div className="relative z-10 flex h-full flex-col justify-between">
                    <Badge className="w-max border-[2px] border-on-background bg-primary px-2 py-1 text-on-primary">
                        {assetCount}
                    </Badge>
                    <h3 className="font-headline-md text-headline-md text-on-background">
                        {title}
                    </h3>
                </div>
            </a>
        );
    }

    if (props.variant === 'preset') {
        const { className, icon, subtitle, title, variant, ...anchorProps } =
            props;

        return (
            <a
                data-slot="marketplace-category-card"
                className={cn(categoryCardVariants({ variant }), className)}
                {...anchorProps}
            >
                <div className="relative z-10 flex h-full items-center justify-between">
                    <div>
                        <h3 className="font-headline-md text-headline-md text-on-background">
                            {title}
                        </h3>
                        <p className="mt-1 font-label-mono text-label-mono text-on-surface-variant">
                            {subtitle}
                        </p>
                    </div>
                    <span className="material-symbols-outlined text-[40px] text-primary">
                        {icon}
                    </span>
                </div>
            </a>
        );
    }

    return null;
}

export { CategoryCard };
export type { CategoryCardProps };
