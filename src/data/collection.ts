/**
 * Collection page data — placeholder content until Supabase is wired.
 * Shape mirrors the planned CMS: categories, 9 product + 3 lifestyle images each.
 */
import type { ImageMetadata } from 'astro';

import allBathmat01 from '../assets/collection/all-bathmat-01.jpg';
import allCushion01 from '../assets/collection/all-cushion-01.jpg';
import allPouf01 from '../assets/collection/all-pouf-01.jpg';
import allThrow01 from '../assets/collection/all-throw-01.png';
import allLivingLifestyle from '../assets/collection/all-lifestyle-living-01.jpg';
import allRug01 from '../assets/collection/all-rug-01.jpg';
import allCushion02 from '../assets/collection/all-cushion-02.png';
import allBathmat02 from '../assets/collection/all-bathmat-02.png';
import allLinenLifestyle from '../assets/collection/all-lifestyle-linen-01.jpg';
import allCushion03 from '../assets/collection/all-cushion-03.png';
import allPouf03 from '../assets/collection/all-pouf-03.png';
import gallery05a from '../assets/collection/gallery-05a.png';
import gallery05b from '../assets/collection/gallery-05b.png';
import gallery06 from '../assets/collection/gallery-06.png';
import gallery07 from '../assets/collection/gallery-07.png';
import gallery08 from '../assets/collection/gallery-08.png';
import gallery09 from '../assets/collection/gallery-09.png';
import livingLarge from '../assets/collection-living.jpg';
import rugsSmall from '../assets/collection-rugs.jpg';
import linenSmall from '../assets/collection-linen.jpg';

export type Category = { slug: string; name: string };
export type Product = { id: string; category: string; label: string; image: ImageMetadata; alt: string };
export type Lifestyle = { id: string; category: string; label: string; image: ImageMetadata; alt: string };

export const categories: Category[] = [
  { slug: 'living', name: 'Living' },
  { slug: 'linen', name: 'Linen' },
  { slug: 'rugs', name: 'Rugs' },
];

const p = (id: string, category: string, label: string, image: ImageMetadata, alt: string): Product =>
  ({ id, category, label, image, alt });
const l = (id: string, category: string, label: string, image: ImageMetadata, alt: string): Lifestyle =>
  ({ id, category, label, image, alt });

/** Placeholder pools — each category gets 9 products + 3 lifestyle (1 large, 2 small), like the CMS will. */
const productPool: Array<[string, ImageMetadata, string]> = [
  ['Throw',   allThrow01,   'Woven floral throw on a stone block'],
  ['Cushion', allCushion01, 'Botanical print cushion'],
  ['Pouf',    allPouf01,    'Patterned kilim pouf'],
  ['Bathmat', allBathmat01, 'Ochre embroidered bathmat'],
  ['Rug',     allRug01,     'Patterned area rug under a coffee table'],
  ['Bathmat', allBathmat02, 'Geometric striped bathmat'],
  ['Throw',   gallery09,    'Indigo floral throw on a bench'],
  ['Pouf',    gallery08,    'Sage green pouf'],
  ['Throw',   gallery06,    'Indigo throw draped over a bench'],
  ['Bathmat', gallery07,    'Ochre bathmat beside a bath'],
  ['Cushion', allCushion02, 'Checked cushion on a stone plinth'],
  ['Cushion', allCushion03, 'Rust velvet cushion on an armchair'],
  ['Cushion', gallery05a,   'Checked cushion on a plinth'],
  ['Cushion', gallery05b,   'Velvet cushion on an armchair'],
  ['Pouf',    allPouf03,    'Rust velvet pouf'],
];
const lifestylePool: Array<[string, ImageMetadata, string]> = [
  ['Living', allLivingLifestyle, 'Sofa with cushions, throw and pouf'],
  ['Linen',  allLinenLifestyle,  'Bed dressed in layered linen'],
  ['Living', livingLarge,        'Living room with textured textiles'],
  ['Rug',    rugsSmall,          'Rug under a round coffee table'],
  ['Linen',  linenSmall,         'Layered bed linen'],
];

/** Products in display order — 9 per category. */
export const products: Product[] = categories.flatMap((c, ci) =>
  Array.from({ length: 9 }, (_, i) => {
    const [label, image, alt] = productPool[(ci * 5 + i) % productPool.length];
    return p(`${c.slug}-p${i + 1}`, c.slug, label, image, alt);
  })
);

/** Lifestyle — per category: one large (`-l1`) and two small (`-s1`, `-s2`). */
export const lifestyle: Lifestyle[] = categories.flatMap((c, ci) =>
  (['l1', 's1', 's2'] as const).map((k, i) => {
    const [label, image, alt] = lifestylePool[(ci * 2 + i) % lifestylePool.length];
    return l(`${c.slug}-${k}`, c.slug, label, image, alt);
  })
);
