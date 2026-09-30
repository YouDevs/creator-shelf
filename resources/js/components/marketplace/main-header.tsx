import { Button } from '@/components/marketplace/button';
import { IconButton } from '@/components/marketplace/icon-button';
import { TextInput } from '@/components/marketplace/input';

function MainHeader() {
    return (
        <header className="sticky top-0 z-50 flex w-full items-center justify-between border-b-[3px] border-on-background bg-surface px-md py-sm hard-shadow">
            <div className="flex items-center gap-md">
                <a
                    className="font-headline-lg text-headline-lg font-bold tracking-tighter text-on-surface uppercase"
                    href="#"
                >
                    NEO-MARKET
                </a>
                <div className="group relative hidden md:flex">
                    <span className="material-symbols-outlined pointer-events-none absolute top-1/2 left-sm z-10 -translate-y-1/2 text-on-surface-variant">
                        search
                    </span>
                    <TextInput
                        className="w-64 py-xs pr-sm pl-xl hard-shadow-sm focus:w-80"
                        placeholder="Search assets..."
                        aria-label="Search assets"
                    />
                </div>
            </div>

            <nav className="hidden items-center gap-lg font-headline-md text-headline-md lg:flex">
                <a
                    className="border-b-4 border-primary px-xs pb-1 text-primary transition-all duration-75 hover:bg-primary hover:text-on-primary"
                    href="#"
                >
                    Marketplace
                </a>
                <a
                    className="px-xs font-bold text-on-surface transition-all duration-75 hover:bg-primary hover:text-on-primary"
                    href="#"
                >
                    Explore
                </a>
                <a
                    className="px-xs font-bold text-on-surface transition-all duration-75 hover:bg-primary hover:text-on-primary"
                    href="#"
                >
                    Library
                </a>
            </nav>

            <div className="flex items-center gap-md">
                <Button className="hidden px-sm py-xs font-headline-md text-body-lg font-bold md:block">
                    Open Store
                </Button>
                <div className="flex gap-sm">
                    <IconButton
                        aria-label="Shopping cart"
                        className="bg-secondary-fixed text-on-background"
                    >
                        <span
                            className="material-symbols-outlined"
                            style={{ fontVariationSettings: "'FILL' 1" }}
                        >
                            shopping_cart
                        </span>
                    </IconButton>
                    <IconButton
                        aria-label="Account"
                        className="bg-surface text-on-background"
                    >
                        <span
                            className="material-symbols-outlined"
                            style={{ fontVariationSettings: "'FILL' 1" }}
                        >
                            account_circle
                        </span>
                    </IconButton>
                </div>
            </div>
        </header>
    );
}

export { MainHeader };
