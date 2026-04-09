/* ================= TYPES ================= */

export type Media = {
  type: 'image' | 'video';
  src: string;
};

export type MainCategory = 'arsitektur' | 'interior';
export type SubCategory = 'perencanaan' | 'pelaksanaan';

export interface Project {
  id: number;
  title: string;

  category: 'residential' | 'commercial' | 'interior' | 'public';

  mainCategory: MainCategory;
  subCategory: SubCategory;

  location: string;
  year: number;
  area: string;
  description: string;
  concept: string;

  // ✅ tetap dipakai (fallback / default)
  mainImage: string;

  // 🔥 optional (override hero)
  mainMedia?: Media;

  media: Media[];

  client?: string;
}

/* ================= IMPORT ================= */

// Project 1
import p1Main from "../Assets/projects/project-1/main.jpg";
import p1Img1 from "../Assets/projects/project-1/1.png";
import p1Img2 from "../Assets/projects/project-1/1.png";
import p1Img3 from "../Assets/projects/project-1/1.png";
import p1MainVideo from "../Assets/projects/project-1/video.mp4";

// Project 2
import p2Main from "../Assets/projects/project-2/main.jpg";
import p2Img1 from "../Assets/projects/project-2/1.png";
import p2Img2 from "../Assets/projects/project-2/1.png";
import p2Img3 from "../Assets/projects/project-2/1.png";


// Project 3
import p3Main from "../Assets/projects/project-3/main.jpg";
import p3Img1 from "../Assets/projects/project-3/1.png";
import p3Img2 from "../Assets/projects/project-3/1.png";
import p3Img3 from "../Assets/projects/project-3/1.png";


// Project 4
import p4Main from "../Assets/projects/project-4/main.jpg";
import p4Img1 from "../Assets/projects/project-4/1.png";
import p4Img2 from "../Assets/projects/project-4/1.png";
import p4Img3 from "../Assets/projects/project-4/1.png";
import p4MainVideo from "../Assets/projects/project-4/video.mp4";

// Project 5
import p5Main from "../Assets/projects/project-5/main.jpg";
import p5Img1 from "../Assets/projects/project-5/1.png";
import p5Img2 from "../Assets/projects/project-5/1.png";
import p5Img3 from "../Assets/projects/project-5/1.png";
import p5MainVideo from "../Assets/projects/project-5/video.mp4";

/* ================= DATA ================= */

export const projects: Project[] = [
  {
    id: 1,
    title: 'Modern Urban Villa',
    category: 'residential',
    mainCategory: 'arsitektur',
    subCategory: 'perencanaan',
    location: 'Jakarta Selatan',
    year: 2023,
    area: '450 m²',
    description:
      'Villa modern dengan desain minimalis yang menggabungkan elemen natural dan urban lifestyle.',
    concept:
      'Mengutamakan pencahayaan alami dan ventilasi silang.',

    mainImage: p1Main,
    mainMedia: { type: 'video', src: p1MainVideo },

    media: [
      { type: 'image', src: p1Img1 },
      { type: 'image', src: p1Img2 },
      { type: 'image', src: p1Img3 },
    ],
  },

  {
    id: 2,
    title: 'Contemporary Residence',
    category: 'residential',
    mainCategory: 'arsitektur',
    subCategory: 'pelaksanaan',
    location: 'Bandung',
    year: 2024,
    area: '380 m²',
    description: 'Hunian kontemporer dengan pendekatan efisiensi ruang.',
    concept: 'Mengadopsi prinsip sustainable architecture.',

    mainImage: p2Main,

    media: [
      { type: 'image', src: p2Img1 },
      { type: 'image', src: p2Img2 },
      { type: 'image', src: p2Img3 },
    ],
  },

  {
    id: 3,
    title: 'Luxury Interior Design',
    category: 'interior',
    mainCategory: 'interior',
    subCategory: 'perencanaan',
    location: 'Surabaya',
    year: 2023,
    area: '280 m²',
    description: 'Interior mewah dengan konsep modern classic.',
    concept: 'Fokus pada material premium dan detail finishing.',

    mainImage: p3Main,

    media: [
      { type: 'image', src: p3Img1 },
      { type: 'image', src: p3Img2 },
      { type: 'image', src: p3Img3 },
    ],
  },

  {
    id: 4,
    title: 'Commercial Space',
    category: 'commercial',
    mainCategory: 'arsitektur',
    subCategory: 'pelaksanaan',
    location: 'Surabaya',
    year: 2023,
    area: '280 m²',
    description: 'Interior komersial dengan konsep modern classic.',
    concept: 'Fokus pada material premium dan detail finishing.',

    mainImage: p4Main,
    mainMedia: { type: 'video', src: p4MainVideo },

    media: [
      { type: 'image', src: p4Img1 },
      { type: 'image', src: p4Img2 },
      { type: 'image', src: p4Img3 },
    ],
  },

  {
    id: 5,
    title: 'Commercial Space',
    category: 'commercial',
    mainCategory: 'interior',
    subCategory: 'pelaksanaan',
    location: 'Surabaya',
    year: 2023,
    area: '280 m²',
    description: 'Interior komersial dengan konsep modern classic.',
    concept: 'Fokus pada material premium dan detail finishing.',

    mainImage: p5Main,
    mainMedia: { type: 'video', src: p5MainVideo },

    media: [
      { type: 'image', src: p5Img1 },
      { type: 'image', src: p5Img2 },
      { type: 'image', src: p5Img3 },
    ],
  },
];