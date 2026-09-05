<!DOCTYPE html>

<html class="light" lang="en"><head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<title>NEO-MARKET - Home</title>
@vite('resources/css/app.css')
</head>
<body class="bg-background text-on-background font-body-md text-body-md selection:bg-secondary-fixed selection:text-on-background">
<!-- TopNavBar (From JSON) -->
<header class="sticky top-0 z-50 flex justify-between items-center px-md py-sm bg-surface dark:bg-on-background w-full border-b-[3px] border-on-background shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
<div class="flex items-center gap-md">
<!-- Brand Logo -->
<a class="font-headline-lg text-headline-lg font-bold text-on-surface dark:text-inverse-on-surface uppercase tracking-tighter" href="#">
                NEO-MARKET
            </a>
<!-- Search Bar (on_left) -->
<div class="hidden md:flex relative group">
<span class="material-symbols-outlined absolute left-sm top-1/2 -translate-y-1/2 text-on-surface-variant z-10 pointer-events-none">search</span>
<input class="pl-xl pr-sm py-xs border-[2px] border-on-background bg-surface-container font-label-mono text-label-mono text-on-background focus:border-primary focus:border-[3px] focus:outline-none transition-all hard-shadow-sm w-64 focus:w-80" placeholder="Search assets..." type="text"/>
</div>
</div>
<!-- Navigation Links -->
<nav class="hidden lg:flex items-center gap-lg font-headline-md text-headline-md">
<!-- Active: Marketplace -->
<a class="text-primary dark:text-secondary-fixed border-b-4 border-primary dark:border-secondary-fixed pb-1 hover:bg-primary hover:text-on-primary transition-all duration-75 px-xs" href="#">Marketplace</a>
<a class="text-on-surface dark:text-on-surface-variant font-bold hover:bg-primary hover:text-on-primary transition-all duration-75 px-xs" href="#">Explore</a>
<a class="text-on-surface dark:text-on-surface-variant font-bold hover:bg-primary hover:text-on-primary transition-all duration-75 px-xs" href="#">Library</a>
</nav>
<!-- Trailing Actions -->
<div class="flex items-center gap-md">
<button class="hidden md:block interactive-press bg-primary text-on-primary border-[3px] border-on-background hard-shadow px-sm py-xs font-headline-md text-body-lg font-bold">
                Open Store
            </button>
<div class="flex gap-sm">
<button class="interactive-press w-10 h-10 flex items-center justify-center border-[3px] border-on-background bg-secondary-fixed text-on-background hard-shadow-sm">
<span class="material-symbols-outlined" style="font-variation-settings: 'FILL' 1;">shopping_cart</span>
</button>
<button class="interactive-press w-10 h-10 flex items-center justify-center border-[3px] border-on-background bg-surface text-on-background hard-shadow-sm">
<span class="material-symbols-outlined" style="font-variation-settings: 'FILL' 1;">account_circle</span>
</button>
</div>
</div>
</header>
<main class="w-full">
<!-- Hero Section -->
<section class="bg-grid-pattern border-b-[3px] border-on-background relative overflow-hidden">
<div class="max-w-[1600px] mx-auto px-md md:px-lg py-xl lg:py-[120px] grid grid-cols-1 md:grid-cols-12 gap-lg items-center relative z-10">
<div class="md:col-span-7 flex flex-col gap-md">
<div class="inline-block border-[2px] border-on-background bg-secondary-fixed px-sm py-xs font-label-mono text-label-mono w-max transform -rotate-2">
                        VERSION 2.0 IS LIVE
                    </div>
<h1 class="font-headline-xl text-headline-xl text-on-background uppercase tracking-tighter leading-none shadow-sm">
                        The Future of <br/>
<span class="text-primary bg-primary-fixed-dim px-2 border-[3px] border-on-background hard-shadow inline-block transform rotate-1 mt-2">Digital Assets</span>
</h1>
<p class="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mt-sm border-l-4 border-primary pl-sm">
                        Source premium 3D models, UI kits, fonts, and presets built by top-tier creators. Brutally fast, strictly curated.
                    </p>
<div class="flex gap-sm mt-md">
<button class="interactive-press bg-primary text-on-primary border-[3px] border-on-background hard-shadow px-lg py-sm font-headline-md text-headline-md">
                            Start Selling
                        </button>
<button class="interactive-press bg-surface text-on-background border-[3px] border-on-background hard-shadow px-lg py-sm font-headline-md text-headline-md flex items-center gap-2">
                            Browse All <span class="material-symbols-outlined">arrow_forward</span>
</button>
</div>
</div>
<div class="md:col-span-5 relative h-[400px] hidden md:block">
<!-- Featured abstract art piece placeholder -->
<div class="w-full h-full border-[3px] border-on-background hard-shadow bg-cover bg-center bg-tertiary-fixed rotate-3 interactive-press" data-alt="A neo-brutalist 3D rendered composition featuring floating geometric primitives—spheres, cubes, and pyramids—in vibrant electric blue and acid green against a high-contrast white background. The objects have hard, solid black drop shadows. The lighting is harsh and direct, creating a sense of digital hyper-reality and premium creator tools." style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuAazd6lDOicX6QlFRuD4g4JpHxVw0S-9qaVkk20HoMcnV1K550fT1sh7Yj5dMUFAW5tjgEKvnEulMsPrV90pVjZJuAwJ2vMj-WuYf4swt2LX1ZXIYvsWJ1drlISm-0W0HTgI74B4e8yZcNctJUE-TN3hmKhMzdg7q5IMoRmKvE27kqpLm09qhIAU3ZPB4uAvMO638yr7YR2iWEcsrLXFX29hu-2pBadFWjQCwgJ20MBao6vHT5hFCN4')"></div>
</div>
</div>
</section>
<!-- Main Content Area -->
<div class="max-w-[1600px] mx-auto px-md md:px-lg py-xl grid grid-cols-1 md:grid-cols-12 gap-lg">
<!-- Sidebar (Filters) -->
<aside class="md:col-span-3 flex flex-col gap-lg">
<div class="sticky top-[100px]">
<div class="border-[3px] border-on-background bg-surface hard-shadow p-md mb-md">
<h3 class="font-headline-md text-headline-md border-b-[2px] border-on-background pb-xs mb-sm">Categories</h3>
<div class="flex flex-col gap-xs font-label-mono text-label-mono">
<label class="flex items-center gap-xs cursor-pointer group">
<input class="w-5 h-5 border-[2px] border-on-background text-primary focus:ring-0 rounded-none bg-surface-container checked:bg-primary transition-colors" type="checkbox"/>
<span class="group-hover:text-primary group-hover:pl-1 transition-all">3D Models</span>
</label>
<label class="flex items-center gap-xs cursor-pointer group">
<input checked="" class="w-5 h-5 border-[2px] border-on-background text-primary focus:ring-0 rounded-none bg-surface-container checked:bg-primary transition-colors" type="checkbox"/>
<span class="font-bold group-hover:text-primary group-hover:pl-1 transition-all">UI Kits</span>
</label>
<label class="flex items-center gap-xs cursor-pointer group">
<input class="w-5 h-5 border-[2px] border-on-background text-primary focus:ring-0 rounded-none bg-surface-container checked:bg-primary transition-colors" type="checkbox"/>
<span class="group-hover:text-primary group-hover:pl-1 transition-all">Fonts</span>
</label>
<label class="flex items-center gap-xs cursor-pointer group">
<input class="w-5 h-5 border-[2px] border-on-background text-primary focus:ring-0 rounded-none bg-surface-container checked:bg-primary transition-colors" type="checkbox"/>
<span class="group-hover:text-primary group-hover:pl-1 transition-all">Presets</span>
</label>
</div>
</div>
<div class="border-[3px] border-on-background bg-secondary-fixed hard-shadow p-md">
<h3 class="font-headline-md text-headline-md border-b-[2px] border-on-background pb-xs mb-sm text-on-background">Price Range</h3>
<div class="flex items-center gap-2">
<input class="w-full border-[2px] border-on-background bg-surface font-label-mono text-label-mono p-xs focus:ring-0 focus:border-primary" placeholder="Min" type="number"/>
<span class="font-bold">-</span>
<input class="w-full border-[2px] border-on-background bg-surface font-label-mono text-label-mono p-xs focus:ring-0 focus:border-primary" placeholder="Max" type="number"/>
</div>
<button class="w-full mt-sm border-[2px] border-on-background bg-on-background text-surface font-label-mono text-label-mono py-xs hover:bg-surface hover:text-on-background transition-colors">Apply</button>
</div>
</div>
</aside>
<!-- Main Feed -->
<div class="md:col-span-9 flex flex-col gap-xl">
<!-- Featured Categories Bento -->
<section>
<div class="flex justify-between items-end border-b-[3px] border-on-background pb-sm mb-lg">
<h2 class="font-headline-lg text-headline-lg font-bold uppercase tracking-tight">Explore Categories</h2>
</div>
<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-md auto-rows-[160px]">
<a class="group block border-[3px] border-on-background hard-shadow bg-tertiary-fixed p-sm relative overflow-hidden interactive-press lg:col-span-2 lg:row-span-2" href="#">
<div class="absolute inset-0 bg-[url('placeholder')] bg-cover bg-center opacity-40 mix-blend-multiply group-hover:scale-105 transition-transform duration-500" data-alt="A stylized, flat-shaded 3D rendered character sitting on a massive geometric UI button, illustrating digital design assets. Rendered in a brutalist style with thick black outlines, bold hot pink and electric blue colors, lit by harsh studio lighting creating solid black drop shadows."></div>
<div class="relative z-10 flex flex-col justify-between h-full">
<span class="bg-on-background text-surface font-label-mono text-label-mono px-2 py-1 w-max">7.2K Assets</span>
<h3 class="font-headline-xl text-headline-xl text-on-background group-hover:translate-x-2 transition-transform">UI Kits</h3>
</div>
</a>
<a class="group block border-[3px] border-on-background hard-shadow bg-secondary-fixed p-sm relative overflow-hidden interactive-press" href="#">
<div class="absolute inset-0 bg-[url('placeholder')] bg-cover bg-center opacity-40 mix-blend-multiply group-hover:scale-105 transition-transform duration-500" data-alt="A collection of abstract 3D wireframe models and solid geometric shapes scattered on a surface. Rendered with strict orthographic projection, acid green and deep black palette, with thick outlines denoting a technical, creator-focused aesthetic."></div>
<div class="relative z-10 flex flex-col justify-between h-full">
<span class="bg-surface text-on-background font-label-mono text-label-mono px-2 py-1 w-max border-[2px] border-on-background">4.1K Assets</span>
<h3 class="font-headline-md text-headline-md text-on-background">3D Models</h3>
</div>
</a>
<a class="group block border-[3px] border-on-background hard-shadow bg-primary-fixed-dim p-sm relative overflow-hidden interactive-press" href="#">
<div class="absolute inset-0 flex items-center justify-center opacity-20">
<span class="font-headline-xl text-[80px] font-bold">Aa</span>
</div>
<div class="relative z-10 flex flex-col justify-between h-full">
<span class="bg-primary text-on-primary font-label-mono text-label-mono px-2 py-1 w-max border-[2px] border-on-background">1.8K Assets</span>
<h3 class="font-headline-md text-headline-md text-on-background">Fonts</h3>
</div>
</a>
<a class="group block border-[3px] border-on-background hard-shadow bg-surface-container-high p-sm relative overflow-hidden interactive-press lg:col-span-2" href="#">
<div class="relative z-10 flex items-center justify-between h-full">
<div>
<h3 class="font-headline-md text-headline-md text-on-background">Lightroom Presets</h3>
<p class="font-label-mono text-label-mono text-on-surface-variant mt-1">Professional color grading</p>
</div>
<span class="material-symbols-outlined text-[40px] text-primary">camera</span>
</div>
</a>
</div>
</section>
<!-- Featured Products Grid -->
<section>
<div class="flex justify-between items-end border-b-[3px] border-on-background pb-sm mb-lg">
<h2 class="font-headline-lg text-headline-lg font-bold uppercase tracking-tight">Trending Now</h2>
<a class="font-label-mono text-label-mono text-primary hover:underline font-bold" href="#">View all</a>
</div>
<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-md">
<!-- Product Card 1 -->
<div class="border-[3px] border-on-background bg-surface hard-shadow flex flex-col group">
<div class="h-[200px] border-b-[3px] border-on-background relative overflow-hidden bg-surface-container-high">
<img class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" data-alt="A clean, highly structured dashboard UI kit preview featuring modular components, dark mode aesthetic with electric blue accents, presented straight-on without perspective distortion. The UI elements have distinct borders and flat styling." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCkjS-QbeKXmWBt4CfBp9yydLBcZCJ1A3yB7_xLEW1zD-NTFz6LXaJg9c7jy0j2an06jSUaQBxMqjeKSu9CfPBSz6XhFD-HHjUJYp1wVx9AGw4oZGh5yC2RTkRrhawFGQrzE-jJhucO773hiECoWbe5087nMPIOVk7DxTELrUalEnZr5ngMQXlCOmMEVtERizrJQ1Mwpb3NtlF-TA1aqb4rUztY1UyP_M0oPSVI9tSXuLJ3tQof1By5"/>
<div class="absolute top-sm right-sm bg-secondary-fixed border-[2px] border-on-background px-2 py-1 font-label-mono text-label-mono font-bold">
                                    $49
                                </div>
</div>
<div class="p-sm flex flex-col flex-grow">
<h4 class="font-headline-md text-headline-md text-on-background leading-tight mb-1">Neo Admin Dashboard Kit</h4>
<p class="font-label-mono text-label-mono text-on-surface-variant mb-md">by <a class="text-primary hover:underline" href="#">Studio B</a></p>
<div class="mt-auto flex gap-xs">
<button class="flex-grow bg-primary text-on-primary border-[2px] border-on-background font-label-mono py-1 hover:bg-on-primary-fixed-variant transition-colors">Add to Cart</button>
</div>
</div>
</div>
<!-- Product Card 2 -->
<div class="border-[3px] border-on-background bg-surface hard-shadow flex flex-col group">
<div class="h-[200px] border-b-[3px] border-on-background relative overflow-hidden bg-tertiary-fixed">
<img class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" data-alt="A high-contrast typography specimen poster for a custom font. The layout is chaotic yet structured, featuring large bold letters in hot pink and stark black, utilizing a strict grid system typical of brutalist poster design." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAwPhERS4VufrLUOD22BxR_wpBrOwuAYUfnm0Qx43CBRtI8iHlb40VHsF_3ee-uBMvpap5OUPYwAUWO1j3n8ZFsf28yrmLK6ryHQ_MMRd_rp7htyg_EgLn4aP9xxwyHH4Ja1sopNAMe6bPO0O49aBDAQ0AJg4fRjhHC9FGRWl8wkLO56swKdWd_MXlrR2F0Q6msn1dtiRUlNGnBJ4idMr3ueRi4mRse8G1UO_hAB8QOe0ezdC7KI0UO"/>
<div class="absolute top-sm right-sm bg-secondary-fixed border-[2px] border-on-background px-2 py-1 font-label-mono text-label-mono font-bold">
                                    $24
                                </div>
</div>
<div class="p-sm flex flex-col flex-grow">
<h4 class="font-headline-md text-headline-md text-on-background leading-tight mb-1">Brutal Display Font Family</h4>
<p class="font-label-mono text-label-mono text-on-surface-variant mb-md">by <a class="text-primary hover:underline" href="#">TypeFoundry X</a></p>
<div class="mt-auto flex gap-xs">
<button class="flex-grow bg-primary text-on-primary border-[2px] border-on-background font-label-mono py-1 hover:bg-on-primary-fixed-variant transition-colors">Add to Cart</button>
</div>
</div>
</div>
<!-- Product Card 3 -->
<div class="border-[3px] border-on-background bg-surface hard-shadow flex flex-col group">
<div class="h-[200px] border-b-[3px] border-on-background relative overflow-hidden bg-primary-fixed-dim">
<img class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" data-alt="A collection of low-poly 3D icons depicting everyday objects like a folder, a star, and a magnifying glass. They are rendered with flat shading, bright solid colors against a soft blue background, but each object casts a harsh, unrealistic black drop shadow." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBYjct_LCQQdTKBiTZVIyMsLysSSmjwjOTvLnCIciT9Cp30SxyYFod2j24zw8SAaVTrG8HX_6_k7xmf9OEGyUWU-oG1U5VjgXTasL3c1CZ4gSTmlTenjauUv6rN-2CcaFNeWRejSzEZ6Ml0u2wMmepxvNeG1kzZt6UIxrUZqUTvuAMRSq91vymsoisQi7bHdiNaAsji6spukdioZRQ_41vqTQMa75z5vRCZQgGHKMbokcd_cpu5e0cX"/>
<div class="absolute top-sm right-sm bg-secondary-fixed border-[2px] border-on-background px-2 py-1 font-label-mono text-label-mono font-bold">
                                    $19
                                </div>
</div>
<div class="p-sm flex flex-col flex-grow">
<h4 class="font-headline-md text-headline-md text-on-background leading-tight mb-1">Essential 3D Icon Pack</h4>
<p class="font-label-mono text-label-mono text-on-surface-variant mb-md">by <a class="text-primary hover:underline" href="#">Polygons</a></p>
<div class="mt-auto flex gap-xs">
<button class="flex-grow bg-primary text-on-primary border-[2px] border-on-background font-label-mono py-1 hover:bg-on-primary-fixed-variant transition-colors">Add to Cart</button>
</div>
</div>
</div>
</div>
</section>
<!-- Featured Stores -->
<section>
<div class="bg-on-background text-surface p-lg border-[3px] border-on-background hard-shadow relative">
<div class="absolute -top-3 -right-3 bg-secondary-fixed text-on-background border-[3px] border-on-background font-label-mono font-bold px-2 py-1 rotate-6 z-10">
                            PRO CREATORS
                        </div>
<h2 class="font-headline-lg text-headline-lg font-bold uppercase tracking-tight mb-md">Featured Stores</h2>
<div class="grid grid-cols-1 sm:grid-cols-3 gap-md">
<!-- Store Profile 1 -->
<div class="bg-surface text-on-background border-[3px] border-on-background p-sm flex items-center gap-sm interactive-press cursor-pointer">
<div class="w-12 h-12 rounded-full border-[2px] border-on-background overflow-hidden flex-shrink-0 bg-primary-fixed">
<img class="w-full h-full object-cover" data-alt="A stylized minimal vector avatar of a creator, depicted with thick black lines and bold flat colors, avoiding realism to match a modern graphical interface style." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAGGoQ5cGkDxzortWsBFiErH9JhqygIRxpNePBiEp7I8AeckxhgF8URV1p5zXW0RRh-MoXsx8m7LKTktqL32B85_WkFN_RCIcmEnR8Y20WTQdDReDyD0JYrdV7RqswIo68PtAVObTah_fEwInr89SMXKbE24212po9gVDY_nA1iS0q5EZpG-r_1_Ywhpit_NOGv5J_owN3DbtpkKH52QqVgzge_7iY-W6Y9tO3xQof6RNWb4OoeN4f-"/>
</div>
<div>
<h4 class="font-headline-md text-[18px] font-bold leading-none mb-1">Studio B</h4>
<p class="font-label-mono text-label-mono text-on-surface-variant text-[12px]">UI / UX Kits</p>
</div>
</div>
<!-- Store Profile 2 -->
<div class="bg-surface text-on-background border-[3px] border-on-background p-sm flex items-center gap-sm interactive-press cursor-pointer">
<div class="w-12 h-12 rounded-full border-[2px] border-on-background overflow-hidden flex-shrink-0 bg-tertiary-fixed">
<img class="w-full h-full object-cover" data-alt="A stylized minimal vector avatar of a creator, depicted with thick black lines and bold flat colors, avoiding realism to match a modern graphical interface style." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDypI3EHAdMT0NO1BUBhKgulfmSDSUvu1r6bfTproAkbU5iMK_SA8JFWSUsdi8z_N5o8sui89jG3Tt0W29b5WzzUzBpD4vT_GpzFFJPWAr468zFHpKOqS6I-5wZKFP0y86LKBd93VFiDpPB_QFhlXwCNa6mCWI57dCJb6MiqtNwSPCMjvUxsCSyzP0yRVK9anA2vJtIZf1XOsHfCk5bhZlKFrhMhmBJPfm0WAg3SCxrCMDGDWvEFQaM"/>
</div>
<div>
<h4 class="font-headline-md text-[18px] font-bold leading-none mb-1">TypeFoundry X</h4>
<p class="font-label-mono text-label-mono text-on-surface-variant text-[12px]">Typography</p>
</div>
</div>
<!-- Store Profile 3 -->
<div class="bg-surface text-on-background border-[3px] border-on-background p-sm flex items-center gap-sm interactive-press cursor-pointer">
<div class="w-12 h-12 rounded-full border-[2px] border-on-background overflow-hidden flex-shrink-0 bg-secondary-fixed">
<img class="w-full h-full object-cover" data-alt="A stylized minimal vector avatar of a creator, depicted with thick black lines and bold flat colors, avoiding realism to match a modern graphical interface style." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCaUWPVLxgxRIz-CtneSE62UUKu3TMIIuJUkaRcJP672MPR8paCZxbvOeed5SGmU4pmh3gyuYuFkbr1OCk5xufqetF9WWuUA--oTuIGh6I9jmkCxxhQYIgTQ-Folnxe-RGMli3hGpkRN5eumC2l5tGbLk4-BtczSmtBwRQJqx9mF9qgm9Zskn7clAY20VtR0SgGozbKVeWbq79DSN9174BNbtgKCvSH9onWy--RaQrbcUwED_P9vTbZ"/>
</div>
<div>
<h4 class="font-headline-md text-[18px] font-bold leading-none mb-1">Polygons</h4>
<p class="font-label-mono text-label-mono text-on-surface-variant text-[12px]">3D Assets</p>
</div>
</div>
</div>
</div>
</section>
</div>
</div>
</main>
<!-- Footer (From JSON) -->
<footer class="w-full py-lg px-md flex flex-col items-center gap-md text-center bg-on-background dark:bg-surface-container-lowest border-t-[3px] border-on-background">
<div class="font-headline-lg-mobile text-headline-lg-mobile text-secondary-fixed uppercase tracking-tighter">
            NEO-MARKET
        </div>
<nav class="flex gap-md font-body-md text-body-md text-inverse-on-surface">
<a class="hover:text-primary-fixed-dim transition-colors" href="#">Terms</a>
<a class="hover:text-primary-fixed-dim transition-colors" href="#">Privacy</a>
<a class="hover:text-primary-fixed-dim transition-colors" href="#">Support</a>
<a class="hover:text-primary-fixed-dim transition-colors" href="#">Contact</a>
</nav>
<p class="font-body-md text-body-md text-secondary-fixed mt-sm">
            © 2024 NEO-MARKET. BUILT FOR CREATORS.
        </p>
</footer>
</body></html>
