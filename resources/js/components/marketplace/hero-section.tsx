import type * as React from 'react';

import { Badge } from '@/components/marketplace/badge';
import { Button } from '@/components/marketplace/button';
import { cn } from '@/lib/utils';

const heroArtworkUrl =
    'https://lh3.googleusercontent.com/aida-public/AB6AXuAazd6lDOicX6QlFRuD4g4JpHxVw0S-9qaVkk20HoMcnV1K550fT1sh7Yj5dMUFAW5tjgEKvnEulMsPrV90pVjZJuAwJ2vMj-WuYf4swt2LX1ZXIYvsWJ1drlISm-0W0HTgI74B4e8yZcNctJUE-TN3hmKhMzdg7q5IMoRmKvE27kqpLm09qhIAU3ZPB4uAvMO638yr7YR2iWEcsrLXFX29hu-2pBadFWjQCwgJ20MBao6vHT5hFCN4';

function HeroSection({ className, ...props }: React.ComponentProps<'section'>) {
    return (
        <section
            data-slot="marketplace-hero-section"
            className={cn(
                'relative overflow-hidden border-b-[3px] border-on-background bg-grid-pattern',
                className,
            )}
            {...props}
        >
            <div className="relative z-10 mx-auto grid max-w-content grid-cols-1 items-center gap-lg px-md py-xl md:grid-cols-12 md:px-lg lg:py-[120px]">
                <div className="flex flex-col gap-md md:col-span-7">
                    <Badge className="inline-block w-max -rotate-2 border-[2px] border-on-background bg-secondary-fixed px-sm py-xs">
                        VERSION 2.0 IS LIVE
                    </Badge>
                    <h1 className="font-headline-xl text-headline-xl leading-none tracking-tighter text-on-background uppercase shadow-sm">
                        The Future of <br />
                        <span className="mt-2 inline-block rotate-1 border-[3px] border-on-background bg-primary-fixed-dim px-2 text-primary hard-shadow">
                            Digital Assets
                        </span>
                    </h1>
                    <p className="mt-sm max-w-2xl border-l-4 border-primary pl-sm font-body-lg text-body-lg text-on-surface-variant">
                        Source premium 3D models, UI kits, fonts, and presets
                        built by top-tier creators. Brutally fast, strictly
                        curated.
                    </p>
                    <div className="mt-md flex gap-sm">
                        <Button className="px-lg py-sm font-headline-md text-headline-md">
                            Start Selling
                        </Button>
                        <Button
                            variant="secondary"
                            className="flex items-center gap-2 px-lg py-sm font-headline-md text-headline-md"
                        >
                            Browse All{' '}
                            <span className="material-symbols-outlined">
                                arrow_forward
                            </span>
                        </Button>
                    </div>
                </div>
                <div className="relative hidden h-[400px] md:col-span-5 md:block">
                    <div
                        className="h-full w-full rotate-3 interactive-press border-[3px] border-on-background bg-tertiary-fixed bg-cover bg-center hard-shadow"
                        data-alt="A neo-brutalist 3D rendered composition featuring floating geometric primitives-spheres, cubes, and pyramids-in vibrant electric blue and acid green against a high-contrast white background. The objects have hard, solid black drop shadows. The lighting is harsh and direct, creating a sense of digital hyper-reality and premium creator tools."
                        style={{ backgroundImage: `url('${heroArtworkUrl}')` }}
                    />
                </div>
            </div>
        </section>
    );
}

export { HeroSection };
