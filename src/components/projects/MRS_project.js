import iceAthletePic from "../../assets/projectsPics/mrs_pic.png";

const IceAthleteProject = {
  title: "Ice Climbing Athlete — Portfolio & Class Booking (in Development)",
  description: `A full-stack platform for a competitive ice climber to showcase achievements, 
media, and run paid training classes. Built with Next.js (App Router) and a headless CMS, 
it features an admin dashboard for managing classes, capacity, schedules, and media; 
a trainee dashboard for bookings, payments, and history; and secure authentication with OAuth. 
Stripe Checkout + webhooks power payments and receipts, while ISR/SSR keeps pages fast and fresh.`,
  tech: [
    "Next.js",
    "React",
    "TailwindCSS",
    "Sanity (Headless CMS)",
    "Supabase (Postgres + Auth)",
    "NextAuth.js",
    "Stripe Checkout + Webhooks",
    "Vercel Hosting",
    "Responsive Design",
  ],
  image: iceAthletePic,
  live: "https://mrs-ice-athlete-web.vercel.app/",
  github: "https://github.com/Evergreen-Tech-Solutions/MRS_Ice_Athlete", 
  imageOptions: {
    width: { xs: "100%", md: "50%" },
    objectFit: "cover",
    objectPosition: "left center",
  },
};

export default IceAthleteProject;
