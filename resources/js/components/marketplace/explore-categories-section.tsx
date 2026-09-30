import { CategoryCard } from '@/components/marketplace/category-card';
import { SectionHeading } from '@/components/marketplace/section-heading';

function ExploreCategoriesSection() {
    return (
        <section>
            <div className="mb-lg flex items-end justify-between border-b-[3px] border-on-background pb-sm">
                <SectionHeading>Explore Categories</SectionHeading>
            </div>
            <div className="grid auto-rows-[160px] grid-cols-1 gap-md sm:grid-cols-2 lg:grid-cols-4">
                <CategoryCard
                    href="#"
                    variant="featured"
                    title="UI Kits"
                    assetCount="7.2K Assets"
                    imageUrl="placeholder"
                    imageAlt="A stylized, flat-shaded 3D rendered character sitting on a massive geometric UI button, illustrating digital design assets. Rendered in a brutalist style with thick black outlines, bold hot pink and electric blue colors, lit by harsh studio lighting creating solid black drop shadows."
                />
                <CategoryCard
                    href="#"
                    variant="standard"
                    title="3D Models"
                    assetCount="4.1K Assets"
                    imageUrl="placeholder"
                    imageAlt="A collection of abstract 3D wireframe models and solid geometric shapes scattered on a surface. Rendered with strict orthographic projection, acid green and deep black palette, with thick outlines denoting a technical, creator-focused aesthetic."
                />
                <CategoryCard
                    href="#"
                    variant="typography"
                    title="Fonts"
                    assetCount="1.8K Assets"
                    typeMark="Aa"
                />
                <CategoryCard
                    href="#"
                    variant="preset"
                    title="Lightroom Presets"
                    subtitle="Professional color grading"
                    icon="camera"
                />
            </div>
        </section>
    );
}

export { ExploreCategoriesSection };
