import image from "@/public/images/image.png";
import image1 from "@/public/images/image1.png";
import image2 from "@/public/images/image2.png";
import { StaticImageData } from "next/image";
interface navItem {
  label: string;
  href: string;
}
interface skillItems {
  name: string;
  type: string;
}
export interface Project {
  title: string;
  category: string;
  description: string;
  detail: string[];
  tech: string[];
  image: StaticImageData;
  codeUrl?: string;
  time: string;
  status: boolean;
  demo: boolean;
}
export const navItems: navItem[] = [
  { label: "Home", href: "/#home" },
  { label: "Skills", href: "/#skill" },
  { label: "About", href: "/#about" },
  { label: "Projects", href: "/#project" },
  { label: "Contact", href: "/#contact" },
];

export const skills: skillItems[] = [
  { name: "ReactJS", type: "Library" },
  { name: "TailwindCSS", type: "Framework" },
  { name: "JavaScript", type: "Language" },
  { name: "Next.js", type: "Framework" },
  { name: "TypeScript", type: "Language" },
  { name: "ShadCN UI", type: "Design" },
  { name: "Postman", type: "Testing API" },
  { name: "ExpressJS", type: "Backend" },
  { name: "Git", type: "Source Controls" },
  { name: "MySQL", type: "Database" },
  { name: "MongoDB", type: "Database" },
];
export const projects: Project[] = [
  {
    title: "Room Management",
    category: "Fullstack",
    description:
      "A fullstack room management system for managing rooms, tenants, contracts, invoices, and room availability.",
    detail: [
      "Designed and developed a responsive user interface using ReactJS and Tailwind CSS.",
      "Built CRUD APIs for rooms, tenants, contracts, invoices, and room status management using NodeJS and ExpressJS.",
      "Designed a MongoDB database to store room information, tenant profiles, rental contracts, payment history, and room availability status.",
      "Implemented room status management, including available, occupied, under maintenance, and reserved rooms.",
      "Handled user authentication and role-based authorization for admins, managers, and tenants using JSON Web Token.",
      "Integrated invoice management for room rent, electricity, water fees, payment status, and payment history.",
    ],
    tech: [
      "JavaScript",
      "Tailwind CSS",
      "JWT",
      "Axios",
      "Redux Toolkit",
      "NextJS",
      "MySQL",
      "Git",
      "REST API",
    ],
    image,
    codeUrl: "https://github.com/TruongCongNon/RoomManagement",
    time: "5/04/2026 - now",
    status: false,
    demo: false,
  },
  {
    title: "Trailer Movie App",
    category: "Frontend",
    description:
      "A movie trailer website that provides an easy browsing, searching, and viewing experience.",
    detail: [
      "Designed and developed a responsive user interface using ReactJS and Tailwind CSS.",
      "Integrated TheMovieDB API to display movie lists, movie details, search results, trailers, and ratings.",
      "Handled data fetching and state management using React hooks such as useEffect and useState.",
      "Built reusable custom components and hooks such as useFetch and Actor.",
      "Improved the user experience with smooth data loading, loading/error handling, and lazy-loaded images.",
    ],
    tech: ["ReactJS", "TailwindCSS", "TheMovieDB API", "Axios", "JavaScript"],
    image: image1,
    codeUrl: "https://movie-app-murex-pi-39.vercel.app/",
    time: "9/2024 - 10/2024",
    status: true,
    demo: true,
  },
  {
    title: "Apple Products Store",
    category: "Fullstack",
    description:
      "An e-commerce website for Apple products with a smooth shopping, checkout, and order management experience.",
    detail: [
      "Designed and developed the user interface using ReactJS and Tailwind CSS.",
      "Built CRUD APIs for products, orders, users, categories, flash sales, and inventory using NodeJS and ExpressJS.",
      "Designed a MongoDB database for product data, inventory management, and flash sale information.",
      "Implemented the Flash Sale feature with countdown timers, quantity control, and automatic deactivation when products are sold out or the sale period ends.",
      "Handled role-based authorization for admins, warehouse staff, shippers, and customers using JSON Web Token.",
      "Integrated Excel export for inventory reports and updated stock automatically after completed or canceled orders.",
    ],
    tech: [
      "JavaScript",
      "Tailwind CSS",
      "Express.js",
      "JWT",
      "Axios",
      "Nodemailer",
      "Redux Toolkit",
      "React.js",
      "Git",
      "REST API",
      "xlsx",
      "Multer",
    ],
    image: image2,
    codeUrl: "https://github.com/TruongCongNon/KLTN_FE",
    time: "1/2025 - 5/2025",
    status: true,
    demo: false,
  },
];
