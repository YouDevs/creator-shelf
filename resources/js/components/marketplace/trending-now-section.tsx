import { ProductCard } from '@/components/marketplace/product-card';
import type { ProductCardProps } from '@/components/marketplace/product-card';
import { SectionHeading } from '@/components/marketplace/section-heading';

const trendingProducts: Array<ProductCardProps & { productId: number }> = [
    {
        productId: 1,
        title: 'Neo Admin Dashboard Kit',
        authorName: 'Studio B',
        authorHref: '#',
        price: '$49',
        imageTone: 'neutral',
        imageSrc:
            'https://lh3.googleusercontent.com/aida-public/AB6AXuCkjS-QbeKXmWBt4CfBp9yydLBcZCJ1A3yB7_xLEW1zD-NTFz6LXaJg9c7jy0j2an06jSUaQBxMqjeKSu9CfPBSz6XhFD-HHjUJYp1wVx9AGw4oZGh5yC2RTkRrhawFGQrzE-jJhucO773hiECoWbe5087nMPIOVk7DxTELrUalEnZr5ngMQXlCOmMEVtERizrJQ1Mwpb3NtlF-TA1aqb4rUztY1UyP_M0oPSVI9tSXuLJ3tQof1By5',
        imageAlt:
            'A clean, highly structured dashboard UI kit preview featuring modular components, dark mode aesthetic with electric blue accents, presented straight-on without perspective distortion. The UI elements have distinct borders and flat styling.',
    },
    {
        productId: 2,
        title: 'Brutal Display Font Family',
        authorName: 'TypeFoundry X',
        authorHref: '#',
        price: '$24',
        imageTone: 'tertiary',
        imageSrc:
            'https://lh3.googleusercontent.com/aida-public/AB6AXuAwPhERS4VufrLUOD22BxR_wpBrOwuAYUfnm0Qx43CBRtI8iHlb40VHsF_3ee-uBMvpap5OUPYwAUWO1j3n8ZFsf28yrmLK6ryHQ_MMRd_rp7htyg_EgLn4aP9xxwyHH4Ja1sopNAMe6bPO0O49aBDAQ0AJg4fRjhHC9FGRWl8wkLO56swKdWd_MXlrR2F0Q6msn1dtiRUlNGnBJ4idMr3ueRi4mRse8G1UO_hAB8QOe0ezdC7KI0UO',
        imageAlt:
            'A high-contrast typography specimen poster for a custom font. The layout is chaotic yet structured, featuring large bold letters in hot pink and stark black, utilizing a strict grid system typical of brutalist poster design.',
    },
    {
        productId: 3,
        title: 'Essential 3D Icon Pack',
        authorName: 'Polygons',
        authorHref: '#',
        price: '$19',
        imageTone: 'primary',
        imageSrc:
            'https://lh3.googleusercontent.com/aida-public/AB6AXuBYjct_LCQQdTKBiTZVIyMsLysSSmjwjOTvLnCIciT9Cp30SxyYFod2j24zw8SAaVTrG8HX_6_k7xmf9OEGyUWU-oG1U5VjgXTasL3c1CZ4gSTmlTenjauUv6rN-2CcaFNeWRejSzEZ6Ml0u2wMmepxvNeG1kzZt6UIxrUZqUTvuAMRSq91vymsoisQi7bHdiNaAsji6spukdioZRQ_41vqTQMa75z5vRCZQgGHKMbokcd_cpu5e0cX',
        imageAlt:
            'A collection of low-poly 3D icons depicting everyday objects like a folder, a star, and a magnifying glass. They are rendered with flat shading, bright solid colors against a soft blue background, but each object casts a harsh, unrealistic black drop shadow.',
    },
];

function TrendingNowSection() {
    return (
        <section>
            <div className="mb-lg flex items-end justify-between border-b-[3px] border-on-background pb-sm">
                <SectionHeading>Trending Now</SectionHeading>
                <a
                    className="font-label-mono text-label-mono font-bold text-primary hover:underline"
                    href="#"
                >
                    View all
                </a>
            </div>
            <div className="grid grid-cols-1 gap-md sm:grid-cols-2 lg:grid-cols-3">
                {trendingProducts.map(({ productId, ...product }) => (
                    <ProductCard key={productId} {...product} />
                ))}
            </div>
        </section>
    );
}

export { TrendingNowSection };
