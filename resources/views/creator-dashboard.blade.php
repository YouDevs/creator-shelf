<!DOCTYPE html><html class="h-full" lang="en"><head>
<meta charset="utf-8">
<meta content="width=device-width, initial-scale=1.0" name="viewport">
<title>Creator Dashboard - NEO-MARKET</title>
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
<link href="https://fonts.googleapis.com/css2?family=Hanken+Grotesk:wght@400;500;600;700&amp;family=JetBrains+Mono:wght@400;500;700&amp;family=Space+Grotesk:wght@400;500;600;700&amp;display=swap" rel="stylesheet">
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet">
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet">
<script id="tailwind-config">
        tailwind.config = {
            darkMode: "class",
            theme: {
                extend: {
                    "colors": {
                        "secondary-fixed": "#bcf600",
                        "inverse-on-surface": "#f1f1f1",
                        "error": "#ba1a1a",
                        "on-error-container": "#93000a",
                        "secondary": "#4d6700",
                        "tertiary": "#9c008c",
                        "outline": "#747688",
                        "primary-fixed-dim": "#b8c3ff",
                        "outline-variant": "#c4c5d9",
                        "on-tertiary-container": "#ffeaf5",
                        "primary": "#0040e0",
                        "on-primary-fixed-variant": "#0035be",
                        "on-tertiary-fixed": "#3a0033",
                        "secondary-fixed-dim": "#a4d700",
                        "background": "#f9f9f9",
                        "on-tertiary": "#ffffff",
                        "on-surface-variant": "#434656",
                        "on-primary-fixed": "#001356",
                        "surface": "#f9f9f9",
                        "surface-container-low": "#f3f3f3",
                        "on-primary": "#ffffff",
                        "surface-container": "#eeeeee",
                        "surface-variant": "#e2e2e2",
                        "inverse-primary": "#b8c3ff",
                        "surface-container-highest": "#e2e2e2",
                        "secondary-container": "#b9f300",
                        "surface-tint": "#124af0",
                        "tertiary-container": "#c600b2",
                        "on-secondary-fixed-variant": "#394d00",
                        "on-primary-container": "#efefff",
                        "primary-fixed": "#dde1ff",
                        "tertiary-fixed": "#ffd7f0",
                        "on-error": "#ffffff",
                        "on-secondary-fixed": "#151f00",
                        "surface-dim": "#dadada",
                        "surface-bright": "#f9f9f9",
                        "on-secondary": "#ffffff",
                        "surface-container-lowest": "#ffffff",
                        "surface-container-high": "#e8e8e8",
                        "on-background": "#1a1c1c",
                        "tertiary-fixed-dim": "#fface8",
                        "error-container": "#ffdad6",
                        "primary-container": "#2e5bff",
                        "inverse-surface": "#2f3131",
                        "on-secondary-container": "#516b00",
                        "on-tertiary-fixed-variant": "#840076",
                        "on-surface": "#1a1c1c"
                    },
                    "borderRadius": {
                        "DEFAULT": "0.25rem",
                        "lg": "0.5rem",
                        "xl": "0.75rem",
                        "full": "9999px"
                    },
                    "spacing": {
                        "md": "24px",
                        "border-width": "3px",
                        "base": "4px",
                        "xl": "80px",
                        "xs": "8px",
                        "sm": "16px",
                        "lg": "40px",
                        "shadow-offset": "6px"
                    },
                    "fontFamily": {
                        "headline-lg": ["Space Grotesk"],
                        "headline-xl": ["Space Grotesk"],
                        "body-lg": ["Hanken Grotesk"],
                        "headline-md": ["Space Grotesk"],
                        "headline-lg-mobile": ["Space Grotesk"],
                        "label-mono": ["JetBrains Mono"],
                        "body-md": ["Hanken Grotesk"]
                    },
                    "fontSize": {
                        "headline-lg": ["40px", { "lineHeight": "1.2", "letterSpacing": "-0.01em", "fontWeight": "700" }],
                        "headline-xl": ["64px", { "lineHeight": "1.1", "letterSpacing": "-0.02em", "fontWeight": "700" }],
                        "body-lg": ["18px", { "lineHeight": "1.6", "fontWeight": "400" }],
                        "headline-md": ["24px", { "lineHeight": "1.3", "fontWeight": "600" }],
                        "headline-lg-mobile": ["32px", { "lineHeight": "1.2", "fontWeight": "700" }],
                        "label-mono": ["14px", { "lineHeight": "1.2", "fontWeight": "500" }],
                        "body-md": ["16px", { "lineHeight": "1.6", "fontWeight": "400" }]
                    }
                }
            }
        }
    </script>
<style>
        .neo-shadow { box-shadow: 6px 6px 0px 0px rgba(0,0,0,1); }
        .neo-shadow-sm { box-shadow: 3px 3px 0px 0px rgba(0,0,0,1); }
        .neo-shadow-hover:hover { box-shadow: 3px 3px 0px 0px rgba(0,0,0,1); transform: translate(3px, 3px); }
        .neo-shadow-active:active { box-shadow: 0px 0px 0px 0px rgba(0,0,0,1); transform: translate(6px, 6px); }
        .neo-border { border: 3px solid #1a1c1c; }
        .neo-border-thin { border: 2px solid #1a1c1c; }
        
        /* Grid background pattern for the main content area */
        .bg-grid-pattern {
            background-size: 24px 24px;
            background-image: 
                linear-gradient(to right, rgba(0,0,0,0.05) 1px, transparent 1px),
                linear-gradient(to bottom, rgba(0,0,0,0.05) 1px, transparent 1px);
        }
    </style>
</head>
<body class="bg-background text-on-surface h-full flex overflow-hidden">
<!-- SideNavBar (from JSON) -->
<nav class="bg-surface-container h-screen w-64 border-r-[3px] border-on-background fixed left-0 top-0 flex flex-col p-sm gap-sm z-40">
<!-- Brand / Header -->
<div class="mb-lg">
<div class="flex items-center gap-xs mb-xs">
<div class="w-10 h-10 bg-primary neo-border flex items-center justify-center neo-shadow-sm">
<span class="material-symbols-outlined text-on-primary font-bold">storefront</span>
</div>
<div>
<h2 class="font-headline-md text-headline-md font-bold text-on-surface">Creator Hub</h2>
<p class="font-label-mono text-label-mono text-on-surface-variant">Manage your digital assets</p>
</div>
</div>
<!-- Verification Badge -->
<div class="mt-sm bg-secondary-fixed text-on-secondary-fixed font-label-mono text-label-mono px-xs py-1 inline-flex items-center gap-1 neo-border-thin">
<span class="material-symbols-outlined text-[16px]" style="font-variation-settings: 'FILL' 1;">verified</span>
                Identity Verified
            </div>
</div>
<!-- Navigation Links -->
<div class="flex flex-col gap-xs flex-grow font-label-mono text-label-mono">
<!-- Active Tab: Overview -->
<a class="bg-secondary-container text-on-secondary-container border-2 border-on-background font-bold p-2 flex items-center gap-sm transform scale-[0.97] transition-transform shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]" href="#">
<span class="material-symbols-outlined">dashboard</span>
                Overview
            </a>
<a class="text-on-surface-variant hover:bg-primary-fixed-dim hover:text-on-primary-fixed p-2 flex items-center gap-sm transition-colors neo-border-thin border-transparent hover:border-on-background" href="#">
<span class="material-symbols-outlined">inventory_2</span>
                My Products
            </a>
<a class="text-on-surface-variant hover:bg-primary-fixed-dim hover:text-on-primary-fixed p-2 flex items-center gap-sm transition-colors neo-border-thin border-transparent hover:border-on-background" href="#">
<span class="material-symbols-outlined">payments</span>
                Sales
            </a>
<a class="text-on-surface-variant hover:bg-primary-fixed-dim hover:text-on-primary-fixed p-2 flex items-center gap-sm transition-colors neo-border-thin border-transparent hover:border-on-background" href="#">
<span class="material-symbols-outlined">leaderboard</span>
                Analytics
            </a>
<a class="text-on-surface-variant hover:bg-primary-fixed-dim hover:text-on-primary-fixed p-2 flex items-center gap-sm transition-colors neo-border-thin border-transparent hover:border-on-background" href="#">
<span class="material-symbols-outlined">settings</span>
                Settings
            </a>
</div>
<!-- CTA -->
<button class="bg-primary text-on-primary font-headline-md text-headline-md py-sm px-sm neo-border neo-shadow neo-shadow-hover transition-all w-full flex justify-center items-center gap-xs">
<span class="material-symbols-outlined">upload</span>
            Upload Product
        </button>
</nav>
<!-- Main Content Area -->
<main class="ml-64 flex-1 h-screen overflow-y-auto bg-surface-container-low bg-grid-pattern p-lg lg:px-[40px] md:px-md">
<!-- Header -->
<header class="flex justify-between items-end mb-lg">
<div>
<h1 class="font-headline-xl text-headline-xl text-on-background uppercase">Overview</h1>
<p class="font-body-lg text-body-lg text-on-surface-variant mt-xs">Welcome back. Here is how your store is performing today.</p>
</div>
<!-- Date Picker / Filter Mock -->
<div class="bg-surface font-label-mono text-label-mono py-xs px-sm neo-border flex items-center gap-xs shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
<span class="material-symbols-outlined">calendar_today</span>
                Last 30 Days
                <span class="material-symbols-outlined ml-xs">arrow_drop_down</span>
</div>
</header>
<!-- Stats Bento Grid -->
<section class="grid grid-cols-1 md:grid-cols-3 gap-md mb-xl">
<!-- Stat Card 1 -->
<div class="bg-primary text-on-primary neo-border p-md neo-shadow flex flex-col justify-between min-h-[160px] relative overflow-hidden group">
<div class="absolute top-[-20px] right-[-20px] opacity-20 transform group-hover:scale-110 transition-transform duration-500">
<span class="material-symbols-outlined text-[120px]">account_balance_wallet</span>
</div>
<div class="flex justify-between items-start z-10">
<span class="font-label-mono text-label-mono uppercase tracking-widest bg-on-primary text-primary px-2 py-1 border-2 border-on-background">Revenue</span>
<span class="material-symbols-outlined text-secondary-fixed bg-on-primary border-2 border-on-background rounded-full p-1">trending_up</span>
</div>
<div class="z-10 mt-md">
<div class="font-headline-xl text-headline-xl">$12,450</div>
<div class="font-body-md text-body-md text-primary-fixed-dim mt-1">+14% vs last period</div>
</div>
</div>
<!-- Stat Card 2 -->
<div class="bg-surface text-on-surface neo-border p-md shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] flex flex-col justify-between min-h-[160px]">
<div class="flex justify-between items-start">
<span class="font-label-mono text-label-mono uppercase tracking-widest bg-secondary-fixed text-on-secondary-fixed px-2 py-1 neo-border-thin">Total Sales</span>
<span class="material-symbols-outlined text-primary">shopping_bag</span>
</div>
<div class="mt-md">
<div class="font-headline-lg text-headline-lg font-bold">342</div>
<div class="font-body-md text-body-md text-on-surface-variant mt-1">+22 new orders</div>
</div>
</div>
<!-- Stat Card 3 -->
<div class="bg-surface text-on-surface neo-border p-md shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] flex flex-col justify-between min-h-[160px]">
<div class="flex justify-between items-start">
<span class="font-label-mono text-label-mono uppercase tracking-widest bg-tertiary text-on-tertiary px-2 py-1 neo-border-thin">Active Products</span>
<span class="material-symbols-outlined text-tertiary">inventory</span>
</div>
<div class="mt-md">
<div class="font-headline-lg text-headline-lg font-bold">18</div>
<div class="font-body-md text-body-md text-on-surface-variant mt-1">2 drafts pending</div>
</div>
</div>
</section>
<!-- Product List Section -->
<section class="mb-xl">
<div class="flex justify-between items-center mb-md">
<h2 class="font-headline-lg text-headline-lg text-on-background">Recent Products</h2>
<button class="font-label-mono text-label-mono underline hover:text-primary transition-colors">View All Inventory</button>
</div>
<!-- Neo-Brutalist Table Construct -->
<div class="bg-surface neo-border shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] overflow-hidden">
<!-- Table Header (Inverted for contrast) -->
<div class="bg-on-background text-on-primary grid grid-cols-12 gap-sm p-sm font-label-mono text-label-mono uppercase tracking-wider border-b-[3px] border-on-background">
<div class="col-span-6 md:col-span-5">Product Details</div>
<div class="col-span-3 md:col-span-2 hidden md:block text-center">Status</div>
<div class="col-span-3 md:col-span-2 text-right md:text-center">Price</div>
<div class="col-span-3 md:col-span-1 hidden md:block text-center">Sales</div>
<div class="col-span-3 md:col-span-2 text-right">Actions</div>
</div>
<!-- Table Body -->
<div class="flex flex-col">
<!-- Row 1 -->
<div class="grid grid-cols-12 gap-sm p-sm items-center border-b-[2px] border-on-background hover:bg-secondary-fixed hover:text-on-secondary-fixed transition-colors group">
<div class="col-span-6 md:col-span-5 flex items-center gap-sm">
<div class="w-12 h-12 bg-surface-container-high neo-border-thin flex-shrink-0 relative">
<img class="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all" data-alt="A stylized 3D rendered icon of a futuristic digital synth keyboard on a clean white background, vibrant neon electric blue and acid green accents, sharp hard shadows, high resolution." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAzAduPvd_TaNNwFi3YL17iyBqnL5yj2VwowqPx-Mcmbzz7WxUMgmVcLeJs1ZDGlafosWFH8iJH_rbavSZi4m4tdrwpDNbE_fGjwgcENJuqbIEsVwwg7apTe_qHk4Nxg5mA1kgwmsyIjbdqoLoAbbzoBXCkNMaoM9yR_eeOVRfiw79XoSnhvdYmjBuyLw0-Pdp-rrEzS6gvIfRKuOn7lXwxCeGJfcdvHCE2ZcasWN4pRES6LO8NS7vV">
</div>
<div>
<div class="font-headline-md text-headline-md text-[18px] truncate">Neon Synth Pack Vol. 1</div>
<div class="font-body-md text-body-md text-[14px] text-outline opacity-80 group-hover:opacity-100 group-hover:text-on-secondary-fixed">Audio Presets</div>
</div>
</div>
<div class="col-span-3 md:col-span-2 hidden md:flex justify-center">
<span class="font-label-mono text-[12px] bg-secondary-fixed text-on-secondary-fixed group-hover:bg-on-background group-hover:text-on-primary px-2 py-1 neo-border-thin uppercase">Live</span>
</div>
<div class="col-span-3 md:col-span-2 font-label-mono text-label-mono text-right md:text-center font-bold">$29.99</div>
<div class="col-span-3 md:col-span-1 hidden md:block font-body-md text-body-md text-center">142</div>
<div class="col-span-3 md:col-span-2 flex justify-end gap-xs">
<button class="p-1 neo-border-thin bg-surface text-on-surface hover:bg-primary hover:text-on-primary transition-colors flex items-center justify-center">
<span class="material-symbols-outlined text-[20px]">edit</span>
</button>
<button class="p-1 neo-border-thin bg-surface text-on-surface hover:bg-error hover:text-on-error transition-colors flex items-center justify-center">
<span class="material-symbols-outlined text-[20px]">delete</span>
</button>
</div>
</div>
<!-- Row 2 -->
<div class="grid grid-cols-12 gap-sm p-sm items-center border-b-[2px] border-on-background hover:bg-secondary-fixed hover:text-on-secondary-fixed transition-colors group">
<div class="col-span-6 md:col-span-5 flex items-center gap-sm">
<div class="w-12 h-12 bg-surface-container-high neo-border-thin flex-shrink-0 relative">
<img class="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all" data-alt="A stylized 3D rendered icon of a wireframe globe mesh on a clean white background, vibrant neon electric blue and acid green accents, sharp hard shadows, high resolution, neo-brutalist aesthetic." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDgLs6RBxEDxY3v4voA1jj9NIMu2t14Ql73G-P0w-o5qbNeigs_TIpbRqCUYdVcC8Pt2TU4GS7hGNbL2vocEz9q1qNc3KqvAyhK6C9XAh8f195AcAnSXvExx2qQgwtEq2RN0p2IkX77WHdsNIAY9qjgAER_n6_uRxDRHQ_w_RRRzGv9X02qu2-X49g01MlZ0SAavNrVo8ynhU8Rb67HrXC8M6O5vurJ-du6PiUd16qa24j4OEKNoUxU">
</div>
<div>
<div class="font-headline-md text-headline-md text-[18px] truncate">Cyberpunk UI Kit</div>
<div class="font-body-md text-body-md text-[14px] text-outline opacity-80 group-hover:opacity-100 group-hover:text-on-secondary-fixed">Figma Assets</div>
</div>
</div>
<div class="col-span-3 md:col-span-2 hidden md:flex justify-center">
<span class="font-label-mono text-[12px] bg-secondary-fixed text-on-secondary-fixed group-hover:bg-on-background group-hover:text-on-primary px-2 py-1 neo-border-thin uppercase">Live</span>
</div>
<div class="col-span-3 md:col-span-2 font-label-mono text-label-mono text-right md:text-center font-bold">$49.00</div>
<div class="col-span-3 md:col-span-1 hidden md:block font-body-md text-body-md text-center">89</div>
<div class="col-span-3 md:col-span-2 flex justify-end gap-xs">
<button class="p-1 neo-border-thin bg-surface text-on-surface hover:bg-primary hover:text-on-primary transition-colors flex items-center justify-center">
<span class="material-symbols-outlined text-[20px]">edit</span>
</button>
<button class="p-1 neo-border-thin bg-surface text-on-surface hover:bg-error hover:text-on-error transition-colors flex items-center justify-center">
<span class="material-symbols-outlined text-[20px]">delete</span>
</button>
</div>
</div>
<!-- Row 3 (Draft) -->
<div class="grid grid-cols-12 gap-sm p-sm items-center hover:bg-surface-variant transition-colors group opacity-80 hover:opacity-100">
<div class="col-span-6 md:col-span-5 flex items-center gap-sm">
<div class="w-12 h-12 bg-surface-container-high border-2 border-dashed border-outline flex-shrink-0 flex items-center justify-center text-outline">
<span class="material-symbols-outlined">image</span>
</div>
<div>
<div class="font-headline-md text-headline-md text-[18px] truncate italic">Untitled Project 03</div>
<div class="font-body-md text-body-md text-[14px] text-outline">3D Models</div>
</div>
</div>
<div class="col-span-3 md:col-span-2 hidden md:flex justify-center">
<span class="font-label-mono text-[12px] bg-surface-dim text-on-surface px-2 py-1 neo-border-thin border-dashed uppercase">Draft</span>
</div>
<div class="col-span-3 md:col-span-2 font-label-mono text-label-mono text-right md:text-center text-outline">--</div>
<div class="col-span-3 md:col-span-1 hidden md:block font-body-md text-body-md text-center text-outline">0</div>
<div class="col-span-3 md:col-span-2 flex justify-end gap-xs">
<button class="p-1 neo-border-thin bg-surface text-on-surface hover:bg-primary hover:text-on-primary transition-colors flex items-center justify-center">
<span class="material-symbols-outlined text-[20px]">edit</span>
</button>
<button class="p-1 neo-border-thin bg-surface text-on-surface hover:bg-error hover:text-on-error transition-colors flex items-center justify-center">
<span class="material-symbols-outlined text-[20px]">delete</span>
</button>
</div>
</div>
</div>
</div>
</section>
</main>
</body></html>