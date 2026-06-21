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
  banking,
  yotta,
  codebird,
  docker,
  kubernetes,
  linux,
  kafka,
  rabbitmq,
  microservices,
  cloudstack
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
    title: "React & Next.js Developer",
    icon: web,
  },
  {
    title: "Node.js & NestJS Developer",
    icon: backend,
  },
  {
    title: "Cloud & Kubernetes",
    icon: kubernetes,
  },
  {
    title: "Microservices Developer",
    icon: backend,
  },
];


const technologies = [
  // Backend
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "NestJS",
    icon: nestjs,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },

  // Frontend
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Next.js",
    icon: nextjs,
  },

  // Cloud & DevOps
  {
    name: "Docker",
    icon: docker,
  },
  {
    name: "Kubernetes",
    icon: kubernetes,
  },
  {
    name: "Apache CloudStack",
    icon: cloudstack,
  },
  {
    name: "Linux",
    icon: linux,
  },

  // Messaging & Distributed Systems
  {
    name: "Kafka",
    icon: kafka,
  },
  {
    name: "RabbitMQ",
    icon: rabbitmq,
  },
  {
    name: "Microservices",
    icon: microservices,
  },

  // Databases
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "MS SQL",
    icon: mssql,
  },
  {
    name: "MySQL",
    icon: mysql,
  },

  // UI
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },

  // Tools
  {
    name: "Git",
    icon: git,
  },
];


const experiences = [
  {
    title: "Full Stack Developer",
    company_name: "Yotta Data Services Pvt Ltd",
    icon: yotta,
    iconBg: "#383E56",
    date: "January 2026 - Present",
    points: [
      "Developing microservices using Node.js, NestJS, Docker, Kubernetes, and Apache CloudStack.",
      "Building cloud automation and infrastructure provisioning workflows for virtual machine lifecycle management.",
      "Implementing event-driven communication patterns using Kafka and RabbitMQ across distributed services.",
      "Containerizing and deploying applications on Kubernetes clusters to improve scalability and deployment consistency.",
      "Troubleshooting production issues across Linux environments, cloud infrastructure, networking, and distributed systems.",
      "Collaborating with cross-functional teams to deliver cloud-native features for Apiculus, Yotta's cloud management platform."
    ],
  },
  {
    title: "Full Stack & Web3 Developer",
    company_name: "Codebird Technologies Pvt Ltd",
    icon: codebird,
    iconBg: "#E6DEDD",
    date: "June 2023 - January 2026",
    points: [
      "Delivered 10+ production applications using React.js, Next.js, Node.js, Express.js, MongoDB, and MySQL.",
      "Built scalable web applications serving 1,000+ users across fintech, HRMS, asset management, and business automation domains.",
      "Reduced API response times by 30% through query optimization, caching strategies, and backend performance improvements.",
      "Designed RESTful APIs and integrated third-party services including payment gateways, notification systems, and blockchain networks.",
      "Implemented CI/CD workflows and managed application deployments using Git, Vercel, and Linux-based environments.",
      "Developed reusable frontend components and responsive user interfaces using Tailwind CSS and Material UI."
    ],
  }


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
    name: "Banking Application",
    description:
      "Developed a full-featured banking application using Next.js, Appwrite, ShadCN, Plaid, and Dwolla, enabling users to manage bank accounts, transfer funds, and view transaction history.",
    Features: [
      "Account management: Connect and manage multiple bank accounts.",
      "Transactions: Seamlessly transfer funds and view transaction history.",
      "Secure integrations with Plaid and Dwolla for bank connectivity and payments",
    ],
    tags: [
      {
        name: "Next.js",
        color: "blue-text-gradient",
      },
      {
        name: "Appwrite",
        color: "green-text-gradient",
      },
      {
        name: "Plaid API",
        color: "pink-text-gradient",
      },
      {
        name: "Dwolla API",
        color: "text-red-600",
      },
    ],

    domain_link: "https://horizon-banking-application.vercel.app/",
    image: banking,
    source_code_link: "https://github.com/hunterhr58063/horizon-bank-App",
  },
  {
    name: "Video Meeting App",
    description:
      "Developed Meetify, a next-generation video meeting app built with Next.js, utilizing the React Video SDK for seamless streaming and high-quality conferencing, ensuring an engaging experience during virtual meetings.",
    Features: [
      "Real - time communication: Enables smooth and interactive virtual meetings with minimal latency.",
      "Secure access: Implements Cleak authentication to efficiently manage user access while ensuring privacy and data security.",
      "Collaborative tools:<br />",
      "Facilitates seamless collaboration through advanced features that significantly enhance < br />",
      "user interaction, engagement, and overall productivity during meetings."],
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
      {
        name: "React Video SDK",
        color: "text-red-600",
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
    Features: [],

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
    Features: [],

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
    Features: [],

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
