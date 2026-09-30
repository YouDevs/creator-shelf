function MainFooter() {
    return (
        <footer className="flex w-full flex-col items-center gap-md border-t-[3px] border-on-background bg-on-background px-md py-lg text-center">
            <div className="font-headline-lg-mobile text-headline-lg-mobile tracking-tighter text-secondary-fixed uppercase">
                NEO-MARKET
            </div>
            <nav className="flex gap-md font-body-md text-body-md text-inverse-on-surface">
                <a
                    className="transition-colors hover:text-primary-fixed-dim"
                    href="#"
                >
                    Terms
                </a>
                <a
                    className="transition-colors hover:text-primary-fixed-dim"
                    href="#"
                >
                    Privacy
                </a>
                <a
                    className="transition-colors hover:text-primary-fixed-dim"
                    href="#"
                >
                    Support
                </a>
                <a
                    className="transition-colors hover:text-primary-fixed-dim"
                    href="#"
                >
                    Contact
                </a>
            </nav>
            <p className="mt-sm font-body-md text-body-md text-secondary-fixed">
                © 2024 NEO-MARKET. BUILT FOR CREATORS.
            </p>
        </footer>
    );
}

export { MainFooter };
