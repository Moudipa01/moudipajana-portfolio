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
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
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
    title: "Machine Learning & AI Expert",
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
    name: "React JS",
    icon: reactjs,
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
    name: "MongoDB",
    icon: mongodb,
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
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "MENTOR AND MANAGEMENT LEAD",
    company_name: "LetsGrowMore",
    icon: starbucks,
    iconBg: "#383E56",
    date: "Jan 2021- July 2021",
    points: [
      "Promoted campus awareness of activities and engagement opportunities with on-campus table tents, email distribution, and social media promotion.",
      "Hosted programs to connect students with non-student neighbours.",
      "Got letter of recommendation.",
      "Coordinated group and individual activities to promote creativity and perseverance in face of challenges.",
    ],
  },
  {
    title: "SOFTWARE DEVELOPMENT INTERN",
    company_name: "IBM",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "July 2021- Nov 2021",
    points: [
      "Worked for a security based management system",
      "Attended training to learn software development theory, techniques and coding best practices.",
      "Assisted in programme development through planning, designing, creating and testing.",
      "Learned new skills, testing techniques and troubleshooting best practices.",
      "Gained in-depth expertise in various coding languages, including C++, Java and JavaScript.",
      "Had been a part of student developer community",
    ],
  },
];

const testimonials = [
];

const projects = [
  {
    name: "MetaBox",
    description:
      "It is an attempt to cure depression among the people by understanding the root cause. It's developed from scrape with the intention of helping people in regulating their moods and barring negative thinking.",
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      {
        name: "Pandas",
        color: "green-text-gradient",
      },
      {
        name: "Flask",
        color: "pink-text-gradient",
      },
      {
        name: "Tenserflow",
        color: "orange-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/Moudipa01/mental-health-chatbot",
  },
  
  {
    name: "Breast Cancer Detector API",
    description:
      "This model takes a 64 x 64 PNG image file extracted from the whole slide image as input, and outputs the predicted probability of the image containing mitosis.",
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      {
        name: "Dockerfile",
        color: "green-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/Moudipa01/Breast_Cancer-Detector",
  },
  {
    name: "Split and Happy",
    description:
      "It scans handwritten bills and split it among the participant.",
    tags: [
      {
        name: "nodejs",
        color: "blue-text-gradient",
      },
      {
        name: "mysql",
        color: "green-text-gradient",
      },
      {
        name: "HTML-CSS",
        color: "pink-text-gradient",
      },
      {
        name: "php",
        color: "orange-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },

];

export { services, technologies, experiences, testimonials, projects };
