import bakeryPic from "../../assets/projectsPics/bakery_pic.png";

const BakeryProject = {
  title: "Brazen Poppy Café & Bakery App",
  description: `A modern café and bakery web application built with Next.js and Supabase. 
This app showcases the bakery’s daily menu, hours of operation, and brand story with 
a sleek responsive design. Customers can easily browse offerings and get real-time 
updates directly from the database. The project emphasizes performance, smooth UI, 
and integration with Supabase for scalable backend services.`,
  tech: [
    "Next.js",
    "Supabase",
    "React",
    "TailwindCSS",
    "Responsive Design",
    "Vercel Hosting",
  ],
  image: bakeryPic,
  live: "https://brazenpoppy.ca/",
  github: null,
  imageOptions: {
    width: { xs: "100%", md: "50%" },
    objectFit: "cover",            
    objectPosition: "left center", 
  },
};

export default BakeryProject;
