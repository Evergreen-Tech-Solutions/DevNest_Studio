import jammabisPic from "../../assets/projectsPics/jammabis_pic.png";

const JammabisProject = {
  title: "Jammabis — Cannabis Reviews & Culture Website",
  description: `A modern cannabis review and culture website built to spotlight Canadian craft producers. 
Developed with Next.js (App Router) and the Once UI design system, it features MDX-powered content pages, 
a responsive gallery, SEO-optimized metadata, and smooth animations for a premium reading experience. 
Each post is hand-crafted using a reusable MDX template with sections for bag appeal, aroma, flavour, effects, 
and value, maintaining a consistent editorial style across the site. The project emphasizes performance, 
scalability, and maintainable content architecture for future category expansions.`,
  tech: [
    "Next.js 14 (App Router + MDX)",
    "React 18",
    "Once UI",
    "Sass/SCSS + PostCSS",
    "TypeScript",
    "PrismJS (code + markdown syntax highlighting)",
    "React Masonry CSS (gallery layout)",
    "Vercel (Hosting & Analytics)",
    "SEO (OpenGraph, sitemap, robots)"
  ],
  image: jammabisPic,
  live: "https://jammabis.ca/",
  imageOptions: {
    width: { xs: "100%", md: "50%" },
    objectFit: "cover",
    objectPosition: "center center",
  },
};

export default JammabisProject;
