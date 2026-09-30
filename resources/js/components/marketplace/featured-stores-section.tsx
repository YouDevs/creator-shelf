import { SectionHeading } from '@/components/marketplace/section-heading';
import { StoreCard } from '@/components/marketplace/store-card';
import type { StoreCardProps } from '@/components/marketplace/store-card';

const featuredStores: Array<StoreCardProps & { storeId: number }> = [
    {
        storeId: 1,
        name: 'Studio B',
        specialty: 'UI / UX Kits',
        avatarTone: 'primary',
        avatarSrc:
            'https://lh3.googleusercontent.com/aida-public/AB6AXuAGGoQ5cGkDxzortWsBFiErH9JhqygIRxpNePBiEp7I8AeckxhgF8URV1p5zXW0RRh-MoXsx8m7LKTktqL32B85_WkFN_RCIcmEnR8Y20WTQdDReDyD0JYrdV7RqswIo68PtAVObTah_fEwInr89SMXKbE24212po9gVDY_nA1iS0q5EZpG-r_1_Ywhpit_NOGv5J_owN3DbtpkKH52QqVgzge_7iY-W6Y9tO3xQof6RNWb4OoeN4f-',
        avatarAlt:
            'A stylized minimal vector avatar of a creator, depicted with thick black lines and bold flat colors, avoiding realism to match a modern graphical interface style.',
    },
    {
        storeId: 2,
        name: 'TypeFoundry X',
        specialty: 'Typography',
        avatarTone: 'tertiary',
        avatarSrc:
            'https://lh3.googleusercontent.com/aida-public/AB6AXuDypI3EHAdMT0NO1BUBhKgulfmSDSUvu1r6bfTproAkbU5iMK_SA8JFWSUsdi8z_N5o8sui89jG3Tt0W29b5WzzUzBpD4vT_GpzFFJPWAr468zFHpKOqS6I-5wZKFP0y86LKBd93VFiDpPB_QFhlXwCNa6mCWI57dCJb6MiqtNwSPCMjvUxsCSyzP0yRVK9anA2vJtIZf1XOsHfCk5bhZlKFrhMhmBJPfm0WAg3SCxrCMDGDWvEFQaM',
        avatarAlt:
            'A stylized minimal vector avatar of a creator, depicted with thick black lines and bold flat colors, avoiding realism to match a modern graphical interface style.',
    },
    {
        storeId: 3,
        name: 'Polygons',
        specialty: '3D Assets',
        avatarTone: 'secondary',
        avatarSrc:
            'https://lh3.googleusercontent.com/aida-public/AB6AXuCaUWPVLxgxRIz-CtneSE62UUKu3TMIIuJUkaRcJP672MPR8paCZxbvOeed5SGmU4pmh3gyuYuFkbr1OCk5xufqetF9WWuUA--oTuIGh6I9jmkCxxhQYIgTQ-Folnxe-RGMli3hGpkRN5eumC2l5tGbLk4-BtczSmtBwRQJqx9mF9qgm9Zskn7clAY20VtR0SgGozbKVeWbq79DSN9174BNbtgKCvSH9onWy--RaQrbcUwED_P9vTbZ',
        avatarAlt:
            'A stylized minimal vector avatar of a creator, depicted with thick black lines and bold flat colors, avoiding realism to match a modern graphical interface style.',
    },
];

function FeaturedStoresSection() {
    return (
        <section>
            <div className="relative border-[3px] border-on-background bg-on-background p-lg text-surface hard-shadow">
                <div className="absolute -top-3 -right-3 z-10 rotate-6 border-[3px] border-on-background bg-secondary-fixed px-2 py-1 font-label-mono font-bold text-on-background">
                    PRO CREATORS
                </div>
                <SectionHeading className="mb-md">
                    Featured Stores
                </SectionHeading>
                <div className="grid grid-cols-1 gap-md sm:grid-cols-3">
                    {featuredStores.map(({ storeId, ...store }) => (
                        <StoreCard key={storeId} {...store} />
                    ))}
                </div>
            </div>
        </section>
    );
}

export { FeaturedStoresSection };
