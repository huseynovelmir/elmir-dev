import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  git,
  figma,
  nextjs,
  tech,
  tello,
  carhub,
  photoai,
  netfilms,
  linkpartners,
  threejs,
  photosen,
  mongodb,
} from "../assets/index";


export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
   {
    name: "Next JS",
    icon: nextjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
];

const experiences = [
  {
    title: "React.js Developer",
    company_name: "Tech Academy",
    icon: tech,
    iconBg: "#E6DEDD",
    date: "Dec 2022 - Present",
    points: [
      "My occupation is mentoring the students of Tech Academy.",
      "I'm participating in code reviews and providing constructive feedbacks to other potential developers.",
      "I'm able to collaborate with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "I'm always aware of innovation in my profession",
    ],
  },
  {
    title: "React Native Developer",
    company_name: " ",
    icon: reactjs,
    iconBg: "#E6DEDD",
    date: "Loading. . .",
    points: [
      "Loading. . .",
     
    ],
  },
  {
    title: "Node.js",
    company_name: "",
    icon: nodejs,
    iconBg: "#E6DEDD",
    date: "Loading. . .",
    points: [
      "Loading. . .",
     
    ],
  },
  {
    title: "Full stack Developer",
    company_name: "",
    icon: mongodb,
    iconBg: "#E6DEDD",
    date: "Loading. . .",
    points: [
    "Loading. . ."
    ],
  },
];

const testimonials = [
  {
    testimonial:
     "🙌 Your programming content is an absolute gem! Thanks for enlightening and inspiring us with your valuable insights. Keep it up!",
    name: "",
    designation: "",
    company: "",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "Your programming tips and tricks have revolutionized my coding journey! Thanks for being an incredible source of inspiration. 👩‍💻🚀",
    name: "",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
  
"Your motivational posts are a daily dose of positivity! Thank you for spreading inspiration and empowering us to reach new heights. 🌟",
    name: "",
    designation: "",
    company: "",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Tello",
    description:
      "Convenient and efficient website that allows users to search, add to cart, purchase and create their own account for mobile accessories.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "commercejs",
        color: "green-text-gradient",
      },
      {
        name: "netlify",
        color: "pink-text-gradient",
      },
    ],
    image: tello,
    source_code_link: "https://github.com/huseynovelmir/Tello-commerce",
  },

  {
    name: "Car Hub",
    description:
  "Easily search and explore cars on our user-friendly website. Discover detailed vehicle information and find your dream ride effortlessly.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "TypeScript",
        color: "green-text-gradient",
      },
      {
        name: "Tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carhub,
    source_code_link: "https://github.com/huseynovelmir/nextjs-car-sale",
  },
  {
    name: "Photo AI",
    description:
      "Transform your typed words into captivating images with our AI-powered website. Experience the magic of visual expression effortlessly.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "replicate",
        color: "green-text-gradient",
      },
      {
        name: "npm",
        color: "pink-text-gradient",
      },
    ],
    image: photoai,
    source_code_link: "https://github.com/huseynovelmir/nextjs-ai-project",
  },
   {
    name: "NetFilms",
    description:
"Explore the world of movies with our website. Effortlessly search, discover, and access detailed information about your favorite films.",
    tags: [
      {
        name: "Nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "themoviedb",
        color: "green-text-gradient",
      },
      {
        name: "vercel",
        color: "pink-text-gradient",
      },
    ],
    image: netfilms,
    source_code_link: "https://github.com/huseynovelmir/Nextjs-Film-project",
  },
      {
    name: "Photosen",
    description:
      
"Step into a captivating visual journey through our photographer's blog site. Immerse yourself in stunning imagery and inspiring stories.",
    tags: [
      {
        name: "Html",
        color: "blue-text-gradient",
      },
      {
        name: "Scss",
        color: "green-text-gradient",
      },
    
    ],
    image: photosen,
    source_code_link: "https://github.com/huseynovelmir/Photosen",
  },
     {
    name: "Link Partners",
    description:
     "Dive into our versatile blog site, offering a seamless blend of captivating articles, engaging visuals, and thought-provoking insights.",
    tags: [
      {
        name: "Html",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
    
    ],
    image: linkpartners,
    source_code_link: "https://github.com/huseynovelmir/Blogie-Front",
  },
];

export { services, technologies, experiences, testimonials, projects };