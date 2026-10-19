/** Final product photographs and public codes supplied in Figma. */
import type { ImageMetadata } from 'astro';
const images = import.meta.glob<ImageMetadata>('../assets/catalog/*.png', { eager: true, import: 'default' });
export type Category = { slug: string; name: string };
export type Product = { id: string; category: string; label: string; code: string; alt: string; image: ImageMetadata };
export const categories: Category[] = [
  {
    "slug": "rugs",
    "name": "Rugs"
  },
  {
    "slug": "chindi-rugs",
    "name": "Chindi rugs"
  },
  {
    "slug": "bathmats",
    "name": "Bathmats"
  },
  {
    "slug": "cushions",
    "name": "Cushions"
  },
  {
    "slug": "cushion-covers",
    "name": "Cushion covers"
  },
  {
    "slug": "throws",
    "name": "Throws"
  },
  {
    "slug": "poufs",
    "name": "Poufs"
  },
  {
    "slug": "fouta-towels",
    "name": "Fouta towels"
  },
  {
    "slug": "terry-towels",
    "name": "Terry towels"
  },
  {
    "slug": "kitchen-towels",
    "name": "Kitchen towels"
  },
  {
    "slug": "shower-curtains",
    "name": "Shower curtains"
  },
  {
    "slug": "table-covers",
    "name": "Table covers"
  },
  {
    "slug": "baskets",
    "name": "Baskets"
  },
  {
    "slug": "wall-hangings",
    "name": "Wall hangings"
  },
  {
    "slug": "wall-art",
    "name": "Wall art"
  },
  {
    "slug": "halloween-collection",
    "name": "Halloween collection"
  }
];
export const categoryGroups = [
  {
    "name": "Rugs & flooring",
    "slugs": [
      "rugs",
      "chindi-rugs",
      "bathmats"
    ]
  },
  {
    "name": "Soft furnishings",
    "slugs": [
      "cushions",
      "cushion-covers",
      "throws",
      "poufs"
    ]
  },
  {
    "name": "Bath, kitchen & table",
    "slugs": [
      "fouta-towels",
      "terry-towels",
      "kitchen-towels",
      "shower-curtains",
      "table-covers"
    ]
  },
  {
    "name": "Storage & d\u00e9cor",
    "slugs": [
      "baskets",
      "wall-hangings",
      "wall-art",
      "halloween-collection"
    ]
  }
];
const records = [
  {
    "id": "CL-RG-001",
    "category": "rugs",
    "label": "Rugs",
    "code": "CL-RG-001",
    "file": "CL-RG-001.png",
    "alt": "Rugs \u2014 CL-RG-001"
  },
  {
    "id": "CL-RG-002",
    "category": "rugs",
    "label": "Rugs",
    "code": "CL-RG-002",
    "file": "CL-RG-002.png",
    "alt": "Rugs \u2014 CL-RG-002"
  },
  {
    "id": "CL-RG-003",
    "category": "rugs",
    "label": "Rugs",
    "code": "CL-RG-003",
    "file": "CL-RG-003.png",
    "alt": "Rugs \u2014 CL-RG-003"
  },
  {
    "id": "CL-RG-004",
    "category": "rugs",
    "label": "Rugs",
    "code": "CL-RG-004",
    "file": "CL-RG-004.png",
    "alt": "Rugs \u2014 CL-RG-004"
  },
  {
    "id": "CL-RG-005",
    "category": "rugs",
    "label": "Rugs",
    "code": "CL-RG-005",
    "file": "CL-RG-005.png",
    "alt": "Rugs \u2014 CL-RG-005"
  },
  {
    "id": "CL-RG-006",
    "category": "rugs",
    "label": "Rugs",
    "code": "CL-RG-006",
    "file": "CL-RG-006.png",
    "alt": "Rugs \u2014 CL-RG-006"
  },
  {
    "id": "CL-RG-007",
    "category": "rugs",
    "label": "Rugs",
    "code": "CL-RG-007",
    "file": "CL-RG-007.png",
    "alt": "Rugs \u2014 CL-RG-007"
  },
  {
    "id": "CL-RG-008",
    "category": "rugs",
    "label": "Rugs",
    "code": "CL-RG-008",
    "file": "CL-RG-008.png",
    "alt": "Rugs \u2014 CL-RG-008"
  },
  {
    "id": "CL-RG-009",
    "category": "rugs",
    "label": "Rugs",
    "code": "CL-RG-009",
    "file": "CL-RG-009.png",
    "alt": "Rugs \u2014 CL-RG-009"
  },
  {
    "id": "CL-RG-010",
    "category": "rugs",
    "label": "Rugs",
    "code": "CL-RG-010",
    "file": "CL-RG-010.png",
    "alt": "Rugs \u2014 CL-RG-010"
  },
  {
    "id": "CL-RG-011",
    "category": "rugs",
    "label": "Rugs",
    "code": "CL-RG-011",
    "file": "CL-RG-011.png",
    "alt": "Rugs \u2014 CL-RG-011"
  },
  {
    "id": "CL-RG-012",
    "category": "rugs",
    "label": "Rugs",
    "code": "CL-RG-012",
    "file": "CL-RG-012.png",
    "alt": "Rugs \u2014 CL-RG-012"
  },
  {
    "id": "CL-CR-001",
    "category": "chindi-rugs",
    "label": "Chindi Rugs",
    "code": "CL-CR-001",
    "file": "CL-CR-001.png",
    "alt": "Chindi rugs \u2014 CL-CR-001"
  },
  {
    "id": "CL-CR-002",
    "category": "chindi-rugs",
    "label": "Chindi Rugs",
    "code": "CL-CR-002",
    "file": "CL-CR-002.png",
    "alt": "Chindi rugs \u2014 CL-CR-002"
  },
  {
    "id": "CL-CR-003",
    "category": "chindi-rugs",
    "label": "Chindi Rugs",
    "code": "CL-CR-003",
    "file": "CL-CR-003.png",
    "alt": "Chindi rugs \u2014 CL-CR-003"
  },
  {
    "id": "CL-CR-004",
    "category": "chindi-rugs",
    "label": "Chindi Rugs",
    "code": "CL-CR-004",
    "file": "CL-CR-004.png",
    "alt": "Chindi rugs \u2014 CL-CR-004"
  },
  {
    "id": "CL-CR-005",
    "category": "chindi-rugs",
    "label": "Chindi Rugs",
    "code": "CL-CR-005",
    "file": "CL-CR-005.png",
    "alt": "Chindi rugs \u2014 CL-CR-005"
  },
  {
    "id": "CL-CR-006",
    "category": "chindi-rugs",
    "label": "Chindi Rugs",
    "code": "CL-CR-006",
    "file": "CL-CR-006.png",
    "alt": "Chindi rugs \u2014 CL-CR-006"
  },
  {
    "id": "CL-CR-007",
    "category": "chindi-rugs",
    "label": "Chindi Rugs",
    "code": "CL-CR-007",
    "file": "CL-CR-007.png",
    "alt": "Chindi rugs \u2014 CL-CR-007"
  },
  {
    "id": "CL-CR-008",
    "category": "chindi-rugs",
    "label": "Chindi Rugs",
    "code": "CL-CR-008",
    "file": "CL-CR-008.png",
    "alt": "Chindi rugs \u2014 CL-CR-008"
  },
  {
    "id": "CL-CR-009",
    "category": "chindi-rugs",
    "label": "Chindi Rugs",
    "code": "CL-CR-009",
    "file": "CL-CR-009.png",
    "alt": "Chindi rugs \u2014 CL-CR-009"
  },
  {
    "id": "CL-CR-010",
    "category": "chindi-rugs",
    "label": "Chindi Rugs",
    "code": "CL-CR-010",
    "file": "CL-CR-010.png",
    "alt": "Chindi rugs \u2014 CL-CR-010"
  },
  {
    "id": "CL-CR-011",
    "category": "chindi-rugs",
    "label": "Chindi Rugs",
    "code": "CL-CR-011",
    "file": "CL-CR-011.png",
    "alt": "Chindi rugs \u2014 CL-CR-011"
  },
  {
    "id": "CL-BM-001",
    "category": "bathmats",
    "label": "Bathmats",
    "code": "CL-BM-001",
    "file": "CL-BM-001.png",
    "alt": "Bathmats \u2014 CL-BM-001"
  },
  {
    "id": "CL-BM-002",
    "category": "bathmats",
    "label": "Bathmats",
    "code": "CL-BM-002",
    "file": "CL-BM-002.png",
    "alt": "Bathmats \u2014 CL-BM-002"
  },
  {
    "id": "CL-BM-003",
    "category": "bathmats",
    "label": "Bathmats",
    "code": "CL-BM-003",
    "file": "CL-BM-003.png",
    "alt": "Bathmats \u2014 CL-BM-003"
  },
  {
    "id": "CL-BM-004",
    "category": "bathmats",
    "label": "Bathmats",
    "code": "CL-BM-004",
    "file": "CL-BM-004.png",
    "alt": "Bathmats \u2014 CL-BM-004"
  },
  {
    "id": "CL-BM-005",
    "category": "bathmats",
    "label": "Bathmats",
    "code": "CL-BM-005",
    "file": "CL-BM-005.png",
    "alt": "Bathmats \u2014 CL-BM-005"
  },
  {
    "id": "CL-BM-006",
    "category": "bathmats",
    "label": "Bathmats",
    "code": "CL-BM-006",
    "file": "CL-BM-006.png",
    "alt": "Bathmats \u2014 CL-BM-006"
  },
  {
    "id": "CL-BM-007",
    "category": "bathmats",
    "label": "Bathmats",
    "code": "CL-BM-007",
    "file": "CL-BM-007.png",
    "alt": "Bathmats \u2014 CL-BM-007"
  },
  {
    "id": "CL-BM-008",
    "category": "bathmats",
    "label": "Bathmats",
    "code": "CL-BM-008",
    "file": "CL-BM-008.png",
    "alt": "Bathmats \u2014 CL-BM-008"
  },
  {
    "id": "CL-BM-009",
    "category": "bathmats",
    "label": "Bathmats",
    "code": "CL-BM-009",
    "file": "CL-BM-009.png",
    "alt": "Bathmats \u2014 CL-BM-009"
  },
  {
    "id": "CL-BM-010",
    "category": "bathmats",
    "label": "Bathmats",
    "code": "CL-BM-010",
    "file": "CL-BM-010.png",
    "alt": "Bathmats \u2014 CL-BM-010"
  },
  {
    "id": "CL-BM-011",
    "category": "bathmats",
    "label": "Bathmats",
    "code": "CL-BM-011",
    "file": "CL-BM-011.png",
    "alt": "Bathmats \u2014 CL-BM-011"
  },
  {
    "id": "CL-BM-012",
    "category": "bathmats",
    "label": "Bathmats",
    "code": "CL-BM-012",
    "file": "CL-BM-012.png",
    "alt": "Bathmats \u2014 CL-BM-012"
  },
  {
    "id": "CL-CU-001",
    "category": "cushions",
    "label": "Cushions",
    "code": "CL-CU-001",
    "file": "CL-CU-001.png",
    "alt": "Cushions \u2014 CL-CU-001"
  },
  {
    "id": "CL-CU-002",
    "category": "cushions",
    "label": "Cushions",
    "code": "CL-CU-002",
    "file": "CL-CU-002.png",
    "alt": "Cushions \u2014 CL-CU-002"
  },
  {
    "id": "CL-CU-003",
    "category": "cushions",
    "label": "Cushions",
    "code": "CL-CU-003",
    "file": "CL-CU-003.png",
    "alt": "Cushions \u2014 CL-CU-003"
  },
  {
    "id": "CL-CU-004",
    "category": "cushions",
    "label": "Cushions",
    "code": "CL-CU-004",
    "file": "CL-CU-004.png",
    "alt": "Cushions \u2014 CL-CU-004"
  },
  {
    "id": "CL-CU-005",
    "category": "cushions",
    "label": "Cushions",
    "code": "CL-CU-005",
    "file": "CL-CU-005.png",
    "alt": "Cushions \u2014 CL-CU-005"
  },
  {
    "id": "CL-CU-006",
    "category": "cushions",
    "label": "Cushions",
    "code": "CL-CU-006",
    "file": "CL-CU-006.png",
    "alt": "Cushions \u2014 CL-CU-006"
  },
  {
    "id": "CL-CU-007",
    "category": "cushions",
    "label": "Cushions",
    "code": "CL-CU-007",
    "file": "CL-CU-007.png",
    "alt": "Cushions \u2014 CL-CU-007"
  },
  {
    "id": "CL-CU-008",
    "category": "cushions",
    "label": "Cushions",
    "code": "CL-CU-008",
    "file": "CL-CU-008.png",
    "alt": "Cushions \u2014 CL-CU-008"
  },
  {
    "id": "CL-CU-009",
    "category": "cushions",
    "label": "Cushions",
    "code": "CL-CU-009",
    "file": "CL-CU-009.png",
    "alt": "Cushions \u2014 CL-CU-009"
  },
  {
    "id": "CL-CU-010",
    "category": "cushions",
    "label": "Cushions",
    "code": "CL-CU-010",
    "file": "CL-CU-010.png",
    "alt": "Cushions \u2014 CL-CU-010"
  },
  {
    "id": "CL-CU-011",
    "category": "cushions",
    "label": "Cushions",
    "code": "CL-CU-011",
    "file": "CL-CU-011.png",
    "alt": "Cushions \u2014 CL-CU-011"
  },
  {
    "id": "CL-CU-012",
    "category": "cushions",
    "label": "Cushions",
    "code": "CL-CU-012",
    "file": "CL-CU-012.png",
    "alt": "Cushions \u2014 CL-CU-012"
  },
  {
    "id": "CL-CC-001",
    "category": "cushion-covers",
    "label": "Cushion Covers",
    "code": "CL-CC-001",
    "file": "CL-CC-001.png",
    "alt": "Cushion covers \u2014 CL-CC-001"
  },
  {
    "id": "CL-CC-002",
    "category": "cushion-covers",
    "label": "Cushion Covers",
    "code": "CL-CC-002",
    "file": "CL-CC-002.png",
    "alt": "Cushion covers \u2014 CL-CC-002"
  },
  {
    "id": "CL-CC-003",
    "category": "cushion-covers",
    "label": "Cushion Covers",
    "code": "CL-CC-003",
    "file": "CL-CC-003.png",
    "alt": "Cushion covers \u2014 CL-CC-003"
  },
  {
    "id": "CL-CC-004",
    "category": "cushion-covers",
    "label": "Cushion Covers",
    "code": "CL-CC-004",
    "file": "CL-CC-004.png",
    "alt": "Cushion covers \u2014 CL-CC-004"
  },
  {
    "id": "CL-CC-005",
    "category": "cushion-covers",
    "label": "Cushion Covers",
    "code": "CL-CC-005",
    "file": "CL-CC-005.png",
    "alt": "Cushion covers \u2014 CL-CC-005"
  },
  {
    "id": "CL-CC-006",
    "category": "cushion-covers",
    "label": "Cushion Covers",
    "code": "CL-CC-006",
    "file": "CL-CC-006.png",
    "alt": "Cushion covers \u2014 CL-CC-006"
  },
  {
    "id": "CL-CC-007",
    "category": "cushion-covers",
    "label": "Cushion Covers",
    "code": "CL-CC-007",
    "file": "CL-CC-007.png",
    "alt": "Cushion covers \u2014 CL-CC-007"
  },
  {
    "id": "CL-CC-008",
    "category": "cushion-covers",
    "label": "Cushion Covers",
    "code": "CL-CC-008",
    "file": "CL-CC-008.png",
    "alt": "Cushion covers \u2014 CL-CC-008"
  },
  {
    "id": "CL-CC-009",
    "category": "cushion-covers",
    "label": "Cushion Covers",
    "code": "CL-CC-009",
    "file": "CL-CC-009.png",
    "alt": "Cushion covers \u2014 CL-CC-009"
  },
  {
    "id": "CL-CC-010",
    "category": "cushion-covers",
    "label": "Cushion Covers",
    "code": "CL-CC-010",
    "file": "CL-CC-010.png",
    "alt": "Cushion covers \u2014 CL-CC-010"
  },
  {
    "id": "CL-CC-011",
    "category": "cushion-covers",
    "label": "Cushion Covers",
    "code": "CL-CC-011",
    "file": "CL-CC-011.png",
    "alt": "Cushion covers \u2014 CL-CC-011"
  },
  {
    "id": "CL-CC-012",
    "category": "cushion-covers",
    "label": "Cushion Covers",
    "code": "CL-CC-012",
    "file": "CL-CC-012.png",
    "alt": "Cushion covers \u2014 CL-CC-012"
  },
  {
    "id": "CL-TH-001",
    "category": "throws",
    "label": "Throws",
    "code": "CL-TH-001",
    "file": "CL-TH-001.png",
    "alt": "Throws \u2014 CL-TH-001"
  },
  {
    "id": "CL-TH-002",
    "category": "throws",
    "label": "Throws",
    "code": "CL-TH-002",
    "file": "CL-TH-002.png",
    "alt": "Throws \u2014 CL-TH-002"
  },
  {
    "id": "CL-TH-003",
    "category": "throws",
    "label": "Throws",
    "code": "CL-TH-003",
    "file": "CL-TH-003.png",
    "alt": "Throws \u2014 CL-TH-003"
  },
  {
    "id": "CL-TH-004",
    "category": "throws",
    "label": "Throws",
    "code": "CL-TH-004",
    "file": "CL-TH-004.png",
    "alt": "Throws \u2014 CL-TH-004"
  },
  {
    "id": "CL-TH-005",
    "category": "throws",
    "label": "Throws",
    "code": "CL-TH-005",
    "file": "CL-TH-005.png",
    "alt": "Throws \u2014 CL-TH-005"
  },
  {
    "id": "CL-TH-006",
    "category": "throws",
    "label": "Throws",
    "code": "CL-TH-006",
    "file": "CL-TH-006.png",
    "alt": "Throws \u2014 CL-TH-006"
  },
  {
    "id": "CL-TH-007",
    "category": "throws",
    "label": "Throws",
    "code": "CL-TH-007",
    "file": "CL-TH-007.png",
    "alt": "Throws \u2014 CL-TH-007"
  },
  {
    "id": "CL-TH-008",
    "category": "throws",
    "label": "Throws",
    "code": "CL-TH-008",
    "file": "CL-TH-008.png",
    "alt": "Throws \u2014 CL-TH-008"
  },
  {
    "id": "CL-TH-009",
    "category": "throws",
    "label": "Throws",
    "code": "CL-TH-009",
    "file": "CL-TH-009.png",
    "alt": "Throws \u2014 CL-TH-009"
  },
  {
    "id": "CL-TH-010",
    "category": "throws",
    "label": "Throws",
    "code": "CL-TH-010",
    "file": "CL-TH-010.png",
    "alt": "Throws \u2014 CL-TH-010"
  },
  {
    "id": "CL-TH-011",
    "category": "throws",
    "label": "Throws",
    "code": "CL-TH-011",
    "file": "CL-TH-011.png",
    "alt": "Throws \u2014 CL-TH-011"
  },
  {
    "id": "CL-TH-012",
    "category": "throws",
    "label": "Throws",
    "code": "CL-TH-012",
    "file": "CL-TH-012.png",
    "alt": "Throws \u2014 CL-TH-012"
  },
  {
    "id": "CL-PF-001",
    "category": "poufs",
    "label": "Poufs",
    "code": "CL-PF-001",
    "file": "CL-PF-001.png",
    "alt": "Poufs \u2014 CL-PF-001"
  },
  {
    "id": "CL-PF-002",
    "category": "poufs",
    "label": "Poufs",
    "code": "CL-PF-002",
    "file": "CL-PF-002.png",
    "alt": "Poufs \u2014 CL-PF-002"
  },
  {
    "id": "CL-PF-003",
    "category": "poufs",
    "label": "Poufs",
    "code": "CL-PF-003",
    "file": "CL-PF-003.png",
    "alt": "Poufs \u2014 CL-PF-003"
  },
  {
    "id": "CL-PF-004",
    "category": "poufs",
    "label": "Poufs",
    "code": "CL-PF-004",
    "file": "CL-PF-004.png",
    "alt": "Poufs \u2014 CL-PF-004"
  },
  {
    "id": "CL-PF-005",
    "category": "poufs",
    "label": "Poufs",
    "code": "CL-PF-005",
    "file": "CL-PF-005.png",
    "alt": "Poufs \u2014 CL-PF-005"
  },
  {
    "id": "CL-PF-006",
    "category": "poufs",
    "label": "Poufs",
    "code": "CL-PF-006",
    "file": "CL-PF-006.png",
    "alt": "Poufs \u2014 CL-PF-006"
  },
  {
    "id": "CL-PF-007",
    "category": "poufs",
    "label": "Poufs",
    "code": "CL-PF-007",
    "file": "CL-PF-007.png",
    "alt": "Poufs \u2014 CL-PF-007"
  },
  {
    "id": "CL-PF-008",
    "category": "poufs",
    "label": "Poufs",
    "code": "CL-PF-008",
    "file": "CL-PF-008.png",
    "alt": "Poufs \u2014 CL-PF-008"
  },
  {
    "id": "CL-FT-001",
    "category": "fouta-towels",
    "label": "Fouta Towels",
    "code": "CL-FT-001",
    "file": "CL-FT-001.png",
    "alt": "Fouta towels \u2014 CL-FT-001"
  },
  {
    "id": "CL-FT-002",
    "category": "fouta-towels",
    "label": "Fouta Towels",
    "code": "CL-FT-002",
    "file": "CL-FT-002.png",
    "alt": "Fouta towels \u2014 CL-FT-002"
  },
  {
    "id": "CL-FT-003",
    "category": "fouta-towels",
    "label": "Fouta Towels",
    "code": "CL-FT-003",
    "file": "CL-FT-003.png",
    "alt": "Fouta towels \u2014 CL-FT-003"
  },
  {
    "id": "CL-FT-004",
    "category": "fouta-towels",
    "label": "Fouta Towels",
    "code": "CL-FT-004",
    "file": "CL-FT-004.png",
    "alt": "Fouta towels \u2014 CL-FT-004"
  },
  {
    "id": "CL-FT-005",
    "category": "fouta-towels",
    "label": "Fouta Towels",
    "code": "CL-FT-005",
    "file": "CL-FT-005.png",
    "alt": "Fouta towels \u2014 CL-FT-005"
  },
  {
    "id": "CL-FT-006",
    "category": "fouta-towels",
    "label": "Fouta Towels",
    "code": "CL-FT-006",
    "file": "CL-FT-006.png",
    "alt": "Fouta towels \u2014 CL-FT-006"
  },
  {
    "id": "CL-FT-007",
    "category": "fouta-towels",
    "label": "Fouta Towels",
    "code": "CL-FT-007",
    "file": "CL-FT-007.png",
    "alt": "Fouta towels \u2014 CL-FT-007"
  },
  {
    "id": "CL-FT-008",
    "category": "fouta-towels",
    "label": "Fouta Towels",
    "code": "CL-FT-008",
    "file": "CL-FT-008.png",
    "alt": "Fouta towels \u2014 CL-FT-008"
  },
  {
    "id": "CL-FT-009",
    "category": "fouta-towels",
    "label": "Fouta Towels",
    "code": "CL-FT-009",
    "file": "CL-FT-009.png",
    "alt": "Fouta towels \u2014 CL-FT-009"
  },
  {
    "id": "CL-FT-010",
    "category": "fouta-towels",
    "label": "Fouta Towels",
    "code": "CL-FT-010",
    "file": "CL-FT-010.png",
    "alt": "Fouta towels \u2014 CL-FT-010"
  },
  {
    "id": "CL-FT-011",
    "category": "fouta-towels",
    "label": "Fouta Towels",
    "code": "CL-FT-011",
    "file": "CL-FT-011.png",
    "alt": "Fouta towels \u2014 CL-FT-011"
  },
  {
    "id": "CL-FT-012",
    "category": "fouta-towels",
    "label": "Fouta Towels",
    "code": "CL-FT-012",
    "file": "CL-FT-012.png",
    "alt": "Fouta towels \u2014 CL-FT-012"
  },
  {
    "id": "CL-TT-001",
    "category": "terry-towels",
    "label": "Terry Towels",
    "code": "CL-TT-001",
    "file": "CL-TT-001.png",
    "alt": "Terry towels \u2014 CL-TT-001"
  },
  {
    "id": "CL-TT-002",
    "category": "terry-towels",
    "label": "Terry Towels",
    "code": "CL-TT-002",
    "file": "CL-TT-002.png",
    "alt": "Terry towels \u2014 CL-TT-002"
  },
  {
    "id": "CL-TT-003",
    "category": "terry-towels",
    "label": "Terry Towels",
    "code": "CL-TT-003",
    "file": "CL-TT-003.png",
    "alt": "Terry towels \u2014 CL-TT-003"
  },
  {
    "id": "CL-TT-004",
    "category": "terry-towels",
    "label": "Terry Towels",
    "code": "CL-TT-004",
    "file": "CL-TT-004.png",
    "alt": "Terry towels \u2014 CL-TT-004"
  },
  {
    "id": "CL-TT-005",
    "category": "terry-towels",
    "label": "Terry Towels",
    "code": "CL-TT-005",
    "file": "CL-TT-005.png",
    "alt": "Terry towels \u2014 CL-TT-005"
  },
  {
    "id": "CL-TT-006",
    "category": "terry-towels",
    "label": "Terry Towels",
    "code": "CL-TT-006",
    "file": "CL-TT-006.png",
    "alt": "Terry towels \u2014 CL-TT-006"
  },
  {
    "id": "CL-TT-007",
    "category": "terry-towels",
    "label": "Terry Towels",
    "code": "CL-TT-007",
    "file": "CL-TT-007.png",
    "alt": "Terry towels \u2014 CL-TT-007"
  },
  {
    "id": "CL-TT-008",
    "category": "terry-towels",
    "label": "Terry Towels",
    "code": "CL-TT-008",
    "file": "CL-TT-008.png",
    "alt": "Terry towels \u2014 CL-TT-008"
  },
  {
    "id": "CL-TT-009",
    "category": "terry-towels",
    "label": "Terry Towels",
    "code": "CL-TT-009",
    "file": "CL-TT-009.png",
    "alt": "Terry towels \u2014 CL-TT-009"
  },
  {
    "id": "CL-TT-010",
    "category": "terry-towels",
    "label": "Terry Towels",
    "code": "CL-TT-010",
    "file": "CL-TT-010.png",
    "alt": "Terry towels \u2014 CL-TT-010"
  },
  {
    "id": "CL-TT-011",
    "category": "terry-towels",
    "label": "Terry Towels",
    "code": "CL-TT-011",
    "file": "CL-TT-011.png",
    "alt": "Terry towels \u2014 CL-TT-011"
  },
  {
    "id": "CL-TT-012",
    "category": "terry-towels",
    "label": "Terry Towels",
    "code": "CL-TT-012",
    "file": "CL-TT-012.png",
    "alt": "Terry towels \u2014 CL-TT-012"
  },
  {
    "id": "CL-KT-001",
    "category": "kitchen-towels",
    "label": "Kitchen Towels",
    "code": "CL-KT-001",
    "file": "CL-KT-001.png",
    "alt": "Kitchen towels \u2014 CL-KT-001"
  },
  {
    "id": "CL-KT-002",
    "category": "kitchen-towels",
    "label": "Kitchen Towels",
    "code": "CL-KT-002",
    "file": "CL-KT-002.png",
    "alt": "Kitchen towels \u2014 CL-KT-002"
  },
  {
    "id": "CL-KT-003",
    "category": "kitchen-towels",
    "label": "Kitchen Towels",
    "code": "CL-KT-003",
    "file": "CL-KT-003.png",
    "alt": "Kitchen towels \u2014 CL-KT-003"
  },
  {
    "id": "CL-KT-004",
    "category": "kitchen-towels",
    "label": "Kitchen Towels",
    "code": "CL-KT-004",
    "file": "CL-KT-004.png",
    "alt": "Kitchen towels \u2014 CL-KT-004"
  },
  {
    "id": "CL-KT-005",
    "category": "kitchen-towels",
    "label": "Kitchen Towels",
    "code": "CL-KT-005",
    "file": "CL-KT-005.png",
    "alt": "Kitchen towels \u2014 CL-KT-005"
  },
  {
    "id": "CL-KT-006",
    "category": "kitchen-towels",
    "label": "Kitchen Towels",
    "code": "CL-KT-006",
    "file": "CL-KT-006.png",
    "alt": "Kitchen towels \u2014 CL-KT-006"
  },
  {
    "id": "CL-KT-007",
    "category": "kitchen-towels",
    "label": "Kitchen Towels",
    "code": "CL-KT-007",
    "file": "CL-KT-007.png",
    "alt": "Kitchen towels \u2014 CL-KT-007"
  },
  {
    "id": "CL-KT-008",
    "category": "kitchen-towels",
    "label": "Kitchen Towels",
    "code": "CL-KT-008",
    "file": "CL-KT-008.png",
    "alt": "Kitchen towels \u2014 CL-KT-008"
  },
  {
    "id": "CL-KT-009",
    "category": "kitchen-towels",
    "label": "Kitchen Towels",
    "code": "CL-KT-009",
    "file": "CL-KT-009.png",
    "alt": "Kitchen towels \u2014 CL-KT-009"
  },
  {
    "id": "CL-KT-010",
    "category": "kitchen-towels",
    "label": "Kitchen Towels",
    "code": "CL-KT-010",
    "file": "CL-KT-010.png",
    "alt": "Kitchen towels \u2014 CL-KT-010"
  },
  {
    "id": "CL-KT-011",
    "category": "kitchen-towels",
    "label": "Kitchen Towels",
    "code": "CL-KT-011",
    "file": "CL-KT-011.png",
    "alt": "Kitchen towels \u2014 CL-KT-011"
  },
  {
    "id": "CL-KT-012",
    "category": "kitchen-towels",
    "label": "Kitchen Towels",
    "code": "CL-KT-012",
    "file": "CL-KT-012.png",
    "alt": "Kitchen towels \u2014 CL-KT-012"
  },
  {
    "id": "CL-SC-001",
    "category": "shower-curtains",
    "label": "Shower Curtains",
    "code": "CL-SC-001",
    "file": "CL-SC-001.png",
    "alt": "Shower curtains \u2014 CL-SC-001"
  },
  {
    "id": "CL-SC-002",
    "category": "shower-curtains",
    "label": "Shower Curtains",
    "code": "CL-SC-002",
    "file": "CL-SC-002.png",
    "alt": "Shower curtains \u2014 CL-SC-002"
  },
  {
    "id": "CL-SC-003",
    "category": "shower-curtains",
    "label": "Shower Curtains",
    "code": "CL-SC-003",
    "file": "CL-SC-003.png",
    "alt": "Shower curtains \u2014 CL-SC-003"
  },
  {
    "id": "CL-SC-004",
    "category": "shower-curtains",
    "label": "Shower Curtains",
    "code": "CL-SC-004",
    "file": "CL-SC-004.png",
    "alt": "Shower curtains \u2014 CL-SC-004"
  },
  {
    "id": "CL-SC-005",
    "category": "shower-curtains",
    "label": "Shower Curtains",
    "code": "CL-SC-005",
    "file": "CL-SC-005.png",
    "alt": "Shower curtains \u2014 CL-SC-005"
  },
  {
    "id": "CL-SC-006",
    "category": "shower-curtains",
    "label": "Shower Curtains",
    "code": "CL-SC-006",
    "file": "CL-SC-006.png",
    "alt": "Shower curtains \u2014 CL-SC-006"
  },
  {
    "id": "CL-SC-007",
    "category": "shower-curtains",
    "label": "Shower Curtains",
    "code": "CL-SC-007",
    "file": "CL-SC-007.png",
    "alt": "Shower curtains \u2014 CL-SC-007"
  },
  {
    "id": "CL-TC-001",
    "category": "table-covers",
    "label": "Table Covers",
    "code": "CL-TC-001",
    "file": "CL-TC-001.png",
    "alt": "Table covers \u2014 CL-TC-001"
  },
  {
    "id": "CL-TC-002",
    "category": "table-covers",
    "label": "Table Covers",
    "code": "CL-TC-002",
    "file": "CL-TC-002.png",
    "alt": "Table covers \u2014 CL-TC-002"
  },
  {
    "id": "CL-TC-003",
    "category": "table-covers",
    "label": "Table Covers",
    "code": "CL-TC-003",
    "file": "CL-TC-003.png",
    "alt": "Table covers \u2014 CL-TC-003"
  },
  {
    "id": "CL-TC-004",
    "category": "table-covers",
    "label": "Table Covers",
    "code": "CL-TC-004",
    "file": "CL-TC-004.png",
    "alt": "Table covers \u2014 CL-TC-004"
  },
  {
    "id": "CL-TC-005",
    "category": "table-covers",
    "label": "Table Covers",
    "code": "CL-TC-005",
    "file": "CL-TC-005.png",
    "alt": "Table covers \u2014 CL-TC-005"
  },
  {
    "id": "CL-TC-006",
    "category": "table-covers",
    "label": "Table Covers",
    "code": "CL-TC-006",
    "file": "CL-TC-006.png",
    "alt": "Table covers \u2014 CL-TC-006"
  },
  {
    "id": "CL-TC-007",
    "category": "table-covers",
    "label": "Table Covers",
    "code": "CL-TC-007",
    "file": "CL-TC-007.png",
    "alt": "Table covers \u2014 CL-TC-007"
  },
  {
    "id": "CL-TC-008",
    "category": "table-covers",
    "label": "Table Covers",
    "code": "CL-TC-008",
    "file": "CL-TC-008.png",
    "alt": "Table covers \u2014 CL-TC-008"
  },
  {
    "id": "CL-TC-009",
    "category": "table-covers",
    "label": "Table Covers",
    "code": "CL-TC-009",
    "file": "CL-TC-009.png",
    "alt": "Table covers \u2014 CL-TC-009"
  },
  {
    "id": "CL-TC-010",
    "category": "table-covers",
    "label": "Table Covers",
    "code": "CL-TC-010",
    "file": "CL-TC-010.png",
    "alt": "Table covers \u2014 CL-TC-010"
  },
  {
    "id": "CL-TC-011",
    "category": "table-covers",
    "label": "Table Covers",
    "code": "CL-TC-011",
    "file": "CL-TC-011.png",
    "alt": "Table covers \u2014 CL-TC-011"
  },
  {
    "id": "CL-TC-012",
    "category": "table-covers",
    "label": "Table Covers",
    "code": "CL-TC-012",
    "file": "CL-TC-012.png",
    "alt": "Table covers \u2014 CL-TC-012"
  },
  {
    "id": "CL-BK-001",
    "category": "baskets",
    "label": "Baskets",
    "code": "CL-BK-001",
    "file": "CL-BK-001.png",
    "alt": "Baskets \u2014 CL-BK-001"
  },
  {
    "id": "CL-BK-002",
    "category": "baskets",
    "label": "Baskets",
    "code": "CL-BK-002",
    "file": "CL-BK-002.png",
    "alt": "Baskets \u2014 CL-BK-002"
  },
  {
    "id": "CL-BK-003",
    "category": "baskets",
    "label": "Baskets",
    "code": "CL-BK-003",
    "file": "CL-BK-003.png",
    "alt": "Baskets \u2014 CL-BK-003"
  },
  {
    "id": "CL-BK-004",
    "category": "baskets",
    "label": "Baskets",
    "code": "CL-BK-004",
    "file": "CL-BK-004.png",
    "alt": "Baskets \u2014 CL-BK-004"
  },
  {
    "id": "CL-BK-005",
    "category": "baskets",
    "label": "Baskets",
    "code": "CL-BK-005",
    "file": "CL-BK-005.png",
    "alt": "Baskets \u2014 CL-BK-005"
  },
  {
    "id": "CL-BK-006",
    "category": "baskets",
    "label": "Baskets",
    "code": "CL-BK-006",
    "file": "CL-BK-006.png",
    "alt": "Baskets \u2014 CL-BK-006"
  },
  {
    "id": "CL-BK-007",
    "category": "baskets",
    "label": "Baskets",
    "code": "CL-BK-007",
    "file": "CL-BK-007.png",
    "alt": "Baskets \u2014 CL-BK-007"
  },
  {
    "id": "CL-BK-008",
    "category": "baskets",
    "label": "Baskets",
    "code": "CL-BK-008",
    "file": "CL-BK-008.png",
    "alt": "Baskets \u2014 CL-BK-008"
  },
  {
    "id": "CL-BK-009",
    "category": "baskets",
    "label": "Baskets",
    "code": "CL-BK-009",
    "file": "CL-BK-009.png",
    "alt": "Baskets \u2014 CL-BK-009"
  },
  {
    "id": "CL-BK-010",
    "category": "baskets",
    "label": "Baskets",
    "code": "CL-BK-010",
    "file": "CL-BK-010.png",
    "alt": "Baskets \u2014 CL-BK-010"
  },
  {
    "id": "CL-BK-011",
    "category": "baskets",
    "label": "Baskets",
    "code": "CL-BK-011",
    "file": "CL-BK-011.png",
    "alt": "Baskets \u2014 CL-BK-011"
  },
  {
    "id": "CL-BK-012",
    "category": "baskets",
    "label": "Baskets",
    "code": "CL-BK-012",
    "file": "CL-BK-012.png",
    "alt": "Baskets \u2014 CL-BK-012"
  },
  {
    "id": "CL-WH-001",
    "category": "wall-hangings",
    "label": "Wall Hangings",
    "code": "CL-WH-001",
    "file": "CL-WH-001.png",
    "alt": "Wall hangings \u2014 CL-WH-001"
  },
  {
    "id": "CL-WH-002",
    "category": "wall-hangings",
    "label": "Wall Hangings",
    "code": "CL-WH-002",
    "file": "CL-WH-002.png",
    "alt": "Wall hangings \u2014 CL-WH-002"
  },
  {
    "id": "CL-WH-003",
    "category": "wall-hangings",
    "label": "Wall Hangings",
    "code": "CL-WH-003",
    "file": "CL-WH-003.png",
    "alt": "Wall hangings \u2014 CL-WH-003"
  },
  {
    "id": "CL-WH-004",
    "category": "wall-hangings",
    "label": "Wall Hangings",
    "code": "CL-WH-004",
    "file": "CL-WH-004.png",
    "alt": "Wall hangings \u2014 CL-WH-004"
  },
  {
    "id": "CL-WH-005",
    "category": "wall-hangings",
    "label": "Wall Hangings",
    "code": "CL-WH-005",
    "file": "CL-WH-005.png",
    "alt": "Wall hangings \u2014 CL-WH-005"
  },
  {
    "id": "CL-WA-001",
    "category": "wall-art",
    "label": "Wall Art",
    "code": "CL-WA-001",
    "file": "CL-WA-001.png",
    "alt": "Wall art \u2014 CL-WA-001"
  },
  {
    "id": "CL-WA-002",
    "category": "wall-art",
    "label": "Wall Art",
    "code": "CL-WA-002",
    "file": "CL-WA-002.png",
    "alt": "Wall art \u2014 CL-WA-002"
  },
  {
    "id": "CL-WA-003",
    "category": "wall-art",
    "label": "Wall Art",
    "code": "CL-WA-003",
    "file": "CL-WA-003.png",
    "alt": "Wall art \u2014 CL-WA-003"
  },
  {
    "id": "CL-WA-004",
    "category": "wall-art",
    "label": "Wall Art",
    "code": "CL-WA-004",
    "file": "CL-WA-004.png",
    "alt": "Wall art \u2014 CL-WA-004"
  },
  {
    "id": "CL-WA-005",
    "category": "wall-art",
    "label": "Wall Art",
    "code": "CL-WA-005",
    "file": "CL-WA-005.png",
    "alt": "Wall art \u2014 CL-WA-005"
  },
  {
    "id": "CL-WA-006",
    "category": "wall-art",
    "label": "Wall Art",
    "code": "CL-WA-006",
    "file": "CL-WA-006.png",
    "alt": "Wall art \u2014 CL-WA-006"
  },
  {
    "id": "CL-WA-007",
    "category": "wall-art",
    "label": "Wall Art",
    "code": "CL-WA-007",
    "file": "CL-WA-007.png",
    "alt": "Wall art \u2014 CL-WA-007"
  },
  {
    "id": "CL-WA-008",
    "category": "wall-art",
    "label": "Wall Art",
    "code": "CL-WA-008",
    "file": "CL-WA-008.png",
    "alt": "Wall art \u2014 CL-WA-008"
  },
  {
    "id": "CL-WA-009",
    "category": "wall-art",
    "label": "Wall Art",
    "code": "CL-WA-009",
    "file": "CL-WA-009.png",
    "alt": "Wall art \u2014 CL-WA-009"
  },
  {
    "id": "CL-WA-010",
    "category": "wall-art",
    "label": "Wall Art",
    "code": "CL-WA-010",
    "file": "CL-WA-010.png",
    "alt": "Wall art \u2014 CL-WA-010"
  },
  {
    "id": "CL-WA-011",
    "category": "wall-art",
    "label": "Wall Art",
    "code": "CL-WA-011",
    "file": "CL-WA-011.png",
    "alt": "Wall art \u2014 CL-WA-011"
  },
  {
    "id": "CL-WA-012",
    "category": "wall-art",
    "label": "Wall Art",
    "code": "CL-WA-012",
    "file": "CL-WA-012.png",
    "alt": "Wall art \u2014 CL-WA-012"
  },
  {
    "id": "CL-HW-001",
    "category": "halloween-collection",
    "label": "Halloween",
    "code": "CL-HW-001",
    "file": "CL-HW-001.png",
    "alt": "Halloween collection \u2014 CL-HW-001"
  },
  {
    "id": "CL-HW-002",
    "category": "halloween-collection",
    "label": "Halloween",
    "code": "CL-HW-002",
    "file": "CL-HW-002.png",
    "alt": "Halloween collection \u2014 CL-HW-002"
  },
  {
    "id": "CL-HW-003",
    "category": "halloween-collection",
    "label": "Halloween",
    "code": "CL-HW-003",
    "file": "CL-HW-003.png",
    "alt": "Halloween collection \u2014 CL-HW-003"
  },
  {
    "id": "CL-HW-004",
    "category": "halloween-collection",
    "label": "Halloween",
    "code": "CL-HW-004",
    "file": "CL-HW-004.png",
    "alt": "Halloween collection \u2014 CL-HW-004"
  },
  {
    "id": "CL-HW-005",
    "category": "halloween-collection",
    "label": "Halloween",
    "code": "CL-HW-005",
    "file": "CL-HW-005.png",
    "alt": "Halloween collection \u2014 CL-HW-005"
  },
  {
    "id": "CL-HW-006",
    "category": "halloween-collection",
    "label": "Halloween",
    "code": "CL-HW-006",
    "file": "CL-HW-006.png",
    "alt": "Halloween collection \u2014 CL-HW-006"
  },
  {
    "id": "CL-HW-007",
    "category": "halloween-collection",
    "label": "Halloween",
    "code": "CL-HW-007",
    "file": "CL-HW-007.png",
    "alt": "Halloween collection \u2014 CL-HW-007"
  },
  {
    "id": "CL-HW-008",
    "category": "halloween-collection",
    "label": "Halloween",
    "code": "CL-HW-008",
    "file": "CL-HW-008.png",
    "alt": "Halloween collection \u2014 CL-HW-008"
  },
  {
    "id": "CL-HW-009",
    "category": "halloween-collection",
    "label": "Halloween",
    "code": "CL-HW-009",
    "file": "CL-HW-009.png",
    "alt": "Halloween collection \u2014 CL-HW-009"
  },
  {
    "id": "CL-HW-010",
    "category": "halloween-collection",
    "label": "Halloween",
    "code": "CL-HW-010",
    "file": "CL-HW-010.png",
    "alt": "Halloween collection \u2014 CL-HW-010"
  },
  {
    "id": "CL-HW-011",
    "category": "halloween-collection",
    "label": "Halloween",
    "code": "CL-HW-011",
    "file": "CL-HW-011.png",
    "alt": "Halloween collection \u2014 CL-HW-011"
  },
  {
    "id": "CL-HW-012",
    "category": "halloween-collection",
    "label": "Halloween",
    "code": "CL-HW-012",
    "file": "CL-HW-012.png",
    "alt": "Halloween collection \u2014 CL-HW-012"
  }
];
export const products: Product[] = records.map(({ file, ...record }) => ({ ...record, image: images[`../assets/catalog/${file}`] }));
