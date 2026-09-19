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

/** Products in display order. */
export const products: Product[] = [
  p('throw-01',   'living', 'Throw',   allThrow01,   'Woven floral throw on a stone block'),
  p('cushion-01', 'living', 'Cushion', allCushion01, 'Botanical print cushion'),
  p('pouf-01',    'living', 'Pouf',    allPouf01,    'Patterned kilim pouf'),
  p('bathmat-01', 'linen',  'Bathmat', allBathmat01, 'Ochre embroidered bathmat'),
  p('rug-01',     'rugs',   'Rug',     allRug01,     'Patterned area rug under a coffee table'),
  p('bathmat-02', 'linen',  'Bathmat', allBathmat02, 'Geometric striped bathmat'),
  p('throw-02',   'living', 'Throw',   gallery09,    'Indigo floral throw on a bench'),
  p('pouf-02',    'living', 'Pouf',    gallery08,    'Sage green pouf'),
  p('throw-03',   'living', 'Throw',   gallery06,    'Indigo throw draped over a bench'),
  p('bathmat-03', 'linen',  'Bathmat', gallery07,    'Ochre bathmat beside a bath'),
  p('cushion-02', 'living', 'Cushion', allCushion02, 'Checked cushion on a stone plinth'),
  p('cushion-03', 'living', 'Cushion', allCushion03, 'Rust velvet cushion on an armchair'),
  p('cushion-04', 'living', 'Cushion', gallery05a,   'Checked cushion on a plinth'),
  p('cushion-05', 'living', 'Cushion', gallery05b,   'Velvet cushion on an armchair'),
  p('pouf-03',    'living', 'Pouf',    allPouf03,    'Rust velvet pouf'),
];

/** Lifestyle images: one large + two small per category (placeholders reuse across categories). */
export const lifestyle: Lifestyle[] = [
  l('living-l1', 'living', 'Living', allLivingLifestyle, 'Sofa with cushions, throw and pouf'),
  l('living-l2', 'living', 'Living', livingLarge,        'Living room with textured textiles'),
  l('living-s1', 'living', 'Rug',    rugsSmall,          'Rug under a round coffee table'),
  l('living-s2', 'living', 'Linen',  linenSmall,         'Layered bed linen'),
  l('linen-l1',  'linen',  'Linen',  allLinenLifestyle,  'Bed dressed in layered linen'),
  l('linen-s1',  'linen',  'Linen',  linenSmall,         'Layered bed linen'),
  l('linen-s2',  'linen',  'Rug',    rugsSmall,          'Rug under a round coffee table'),
  l('rugs-l1',   'rugs',   'Rug',    rugsSmall,          'Rug under a round coffee table'),
  l('rugs-s1',   'rugs',   'Living', livingLarge,        'Living room with textured textiles'),
  l('rugs-s2',   'rugs',   'Linen',  linenSmall,         'Layered bed linen'),
];
