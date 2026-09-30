import { Button } from '@/components/marketplace/button';
import { Checkbox } from '@/components/marketplace/checkbox';
import { NumberInput } from '@/components/marketplace/input';

function MarketplaceFilters() {
    return (
        <aside
            data-slot="marketplace-filters"
            className="flex flex-col gap-lg md:col-span-3"
        >
            <div className="sticky top-[100px]">
                <div className="mb-md border-[3px] border-on-background bg-surface p-md hard-shadow">
                    <h3 className="mb-sm border-b-[2px] border-on-background pb-xs font-headline-md text-headline-md">
                        Categories
                    </h3>
                    <div className="flex flex-col gap-xs font-label-mono text-label-mono">
                        <label className="group flex cursor-pointer items-center gap-xs">
                            <Checkbox />
                            <span className="transition-all group-hover:pl-1 group-hover:text-primary">
                                3D Models
                            </span>
                        </label>
                        <label className="group flex cursor-pointer items-center gap-xs">
                            <Checkbox defaultChecked />
                            <span className="font-bold transition-all group-hover:pl-1 group-hover:text-primary">
                                UI Kits
                            </span>
                        </label>
                        <label className="group flex cursor-pointer items-center gap-xs">
                            <Checkbox />
                            <span className="transition-all group-hover:pl-1 group-hover:text-primary">
                                Fonts
                            </span>
                        </label>
                        <label className="group flex cursor-pointer items-center gap-xs">
                            <Checkbox />
                            <span className="transition-all group-hover:pl-1 group-hover:text-primary">
                                Presets
                            </span>
                        </label>
                    </div>
                </div>

                <div className="border-[3px] border-on-background bg-secondary-fixed p-md hard-shadow">
                    <h3 className="mb-sm border-b-[2px] border-on-background pb-xs font-headline-md text-headline-md text-on-background">
                        Price Range
                    </h3>
                    <div className="flex items-center gap-2">
                        <NumberInput placeholder="Min" />
                        <span className="font-bold">-</span>
                        <NumberInput placeholder="Max" />
                    </div>
                    <Button variant="inverse" className="mt-sm w-full py-xs">
                        Apply
                    </Button>
                </div>
            </div>
        </aside>
    );
}

export { MarketplaceFilters };
