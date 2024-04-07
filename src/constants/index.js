import {
  zoom,
  blog,
  sorting,
  chitchat,
  backend,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  mongodb,
  git,
  carrent,
  jobit,
  tripguide,
  autovyn,
  mssql,
  mysql,
  nestjs,
  nextjs,
  jquery,
  newapp,
  dancesite,
  apple,
} from "../assets";

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
    title: "Next Developer",
    icon: backend,
  },
  {
    title: "React Developer",
    icon: web,
  },
  {
    title: "Node Developer",
    icon: backend,
  },
  {
    title: "Nest Developer",
    icon: backend,
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
  // {
  //   name: "Redux Toolkit",
  //   icon: redux,
  // },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  // {
  //   name: "Three JS",
  //   icon: threejs,
  // },
  {
    name: "git",
    icon: git,
  },

  {
    name: "jquery",
    icon: jquery,
  },

  {
    name: "nextjs",
    icon: nextjs,
  },
  {
    name: "nestjs",
    icon: nestjs,
  },
  {
    name: "mssql",
    icon: mssql,
  },
  {
    name: "mysql",
    icon: mysql,
  },
  // {
  //   name: "figma",
  //   icon: figma,
  // },
  // {
  //   name: "docker",
  //   icon: docker,
  // },
];

const experiences = [
  {
    title: "Full Stack Developer",
    company_name: "Vyn Automation Private Limited",
    icon: autovyn,
    iconBg: "#383E56",
    date: "June 2023 - present",
    points: [
      "Developing and maintaining web applications using Next.js, React.js , Node.js ,Nest.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design .",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  // {
  //   title: "React Native Developer",
  //   company_name: "Tesla",
  //   icon: tesla,
  //   iconBg: "#E6DEDD",
  //   date: "Jan 2021 - Feb 2022",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
  // {
  //   title: "Web Developer",
  //   company_name: "Shopify",
  //   icon: shopify,
  //   iconBg: "#383E56",
  //   date: "Jan 2022 - Jan 2023",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
  // {
  //   title: "Full stack Developer",
  //   company_name: "Meta",
  //   icon: meta,
  //   iconBg: "#E6DEDD",
  //   date: "Jan 2023 - Present",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Meetify: Meeting App",
    description:
      "Meetify is a video meeting app designed to streamline your virtual communication needs. With seamless integration of Next.js, React Video SDK, and Clerk authentication and all video conferencing requirements.",
    tags: [
      {
        name: "Next.js",
        color: "blue-text-gradient",
      },
      {
        name: "Steam",
        color: "green-text-gradient",
      },
      {
        name: "Clerk",
        color: "pink-text-gradient",
      },
    ],
    domain_link: "https://meetify-two.vercel.app",
    image: zoom,
    source_code_link: "https://github.com/hunterhr58063/Video-Meeting-App",
  },
  {
    name: "Apple Website",
    description:
      "digital destination for daily news spanning sports, politics, tech, and more. Seamlessly browse, engage, and stay ahead with our intuitive platform, delivering fresh updates and diverse perspectives at your fingertips.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "Three.js",
        color: "green-text-gradient",
      },
      {
        name: "GSAP",
        color: "pink-text-gradient",
      },
    ],
    domain_link: "iphone-website-with-gsap-and-three-js.vercel.app",
    image: apple,
    source_code_link:
      "https://github.com/hunterhr58063/Apple-website-Using-React.js-Three.js-and-GSAP",
  },
  {
    name: "News Application",
    description:
      "digital destination for daily news spanning sports, politics, tech, and more. Seamlessly browse, engage, and stay ahead with our intuitive platform, delivering fresh updates and diverse perspectives at your fingertips.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
    ],
    image: newapp,
    source_code_link: "https://github.com/hunterhr58063/newsapplication",
  },
  {
    name: "Blog Application",
    description:
      "  platform for creating and sharing blog posts. With a clean and user-friendly interface, users can effortlessly publish their thoughts and ideas. Explore a variety of topics and engage with content from fellow users.",
    tags: [
      {
        name: "Next",
        color: "blue-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "green-text-gradient",
      },
      {
        name: "next-themes",
        color: "pink-text-gradient",
      },
    ],

    image: blog,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
