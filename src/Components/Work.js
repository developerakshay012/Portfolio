import { FaDribbble, FaGithub, FaLinkedinIn, FaTwitter } from 'react-icons/fa';
import { SiLeetcode } from "react-icons/si";
import { FiCpu, FiLayers, FiMonitor, FiSettings, FiSmartphone } from 'react-icons/fi';




import githubdetLogo from '../assets/work_logo/github_det.png';
import csprepLogo from '../assets/work_logo/cs_prep.png';
import movierecLogo from '../assets/work_logo/movie_rec.png';
import taskremLogo from '../assets/work_logo/task_rem.png';
import npmLogo from '../assets/work_logo/npm.png';
import webverLogo from '../assets/work_logo/web_dig.png';


export const navItems = [
    { label: "Home", href: "#home" },
    { label: "Work", href: "#work" },
    { label: "Skills", href: "#skills" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
];

export const socialPlatforms = [
    { icon: FaTwitter, href: '#' },
    { icon: FaGithub, href: 'https://github.com/developerakshay012' },
    { icon: FaLinkedinIn, href: 'https://www.linkedin.com/in/akshay-kumar-03494a2b5' },
    { icon: SiLeetcode, href: 'https://leetcode.com/u/imrakshay' },
];


export const projects = [
    {
      id: 0,
      title: "GitHub Profile Detective",
      description:
        "A powerful and user-friendly React.js application designed to uncover and showcase detailed GitHub profile information. Simply enter a GitHub username, and the app fetches comprehensive data, including profile stats, repositories, followers, and contributions. The intuitive interface ensures a seamless experience, making it a must-visit tool for developers and recruiters.",
      image: githubdetLogo,
      tags: ["HTML", "CSS", "JavaScript", "React JS", "API"],
      github: "https://github.com/codingmastr/GitHub-Profile-Search-App-Using-React-JS",
      webapp: "https://githubprofiledetective.netlify.app/",
    },
    {
      id: 1,
      title: "CS Prep",
      description:
        "A full-stack quiz-based platform designed for GATE/UGC NET students to practice previous year questions and create customized tests. The platform offers comprehensive profile stats and detailed results, helping students track and improve their preparation journey effectively.",
      image: csprepLogo,
      tags: ["React JS", "Node.js", "MongoDB", "Express", "HTML", "CSS", "JavaScript"],
      github: "https://github.com/codingmastr/CSPrep",
      webapp: "https://csprep.netlify.app/",
    },
    {
      id: 2,
      title: "Movie Recommendation App",
      description:
        "A React-based web application that provides movie recommendations based on different criteria, such as genres, user preferences, and popular trends. The intuitive design and smooth experience make it a go-to app for movie enthusiasts.",
      image: movierecLogo,
      tags: ["React JS", "API", "HTML", "CSS", "JavaScript"],
      github: "https://github.com/codingmastr/Movie-Recommendation-App",
      webapp: "https://movie-recommendation-app-jet.vercel.app/",
    },
    {
      id: 3,
      title: "Email Validator NPM Package",
      description:
        "An efficient and customizable NPM package for validating email addresses. Built using React.js and Node.js, it provides robust validation features to help developers ensure that email inputs meet required formats and standards.",
      image: npmLogo,
      tags: ["React JS", "Node.js", "NPM", "Validation"],
      github: "https://github.com/codingmastr/cmtk-email-validator",
      webapp: "https://www.npmjs.com/package/cmtk-email-validator",
    },
    {
      id: 4,
      title: "Task Reminder Chrome Extension Tool",
      description:
        "A productivity-boosting Chrome extension designed to help users manage and remember their daily tasks. Built using JavaScript, it offers a simple interface with reminders and task notifications to keep users on track.",
      image: taskremLogo,
      tags: ["JavaScript", "Chrome Extension", "HTML", "CSS"],
      github: "https://github.com/codingmastr/Task-Reminder-Tool",
      webapp: "chrome://extensions/?id=kngheeibjnnidhfoomkpnbeghackheci",
    },
    {
      id: 5,
      title: "Webverse Digital",
      description:
        "The official website for Webverse Digital, a creative digital marketing agency. Built using HTML, CSS, and JavaScript, it features visually appealing animations and a clean design to showcase the agency's services.",
      image: webverLogo,
      tags: ["HTML", "CSS", "JavaScript", "Framer Motion"],
      github: "https://github.com/codingmastr/Webverse-Digital",
      webapp: "https://webversedigital.com/",
    },

  ]

// export const projects = [ 
//     {
//         id: 1,
//         title: "NeoCommerce Platform",
//         description: "Next-gen e-commerce with AR product visualization",
//         category: "WEB APP",
//         color: "primary",
//         image: project1Img,
//         link: '#',
//         youtube: '#'
//     },
//     {
//         id: 2,
//         title: "Fitness AR Companion",
//         description: "AI-powered workout tracking with motion capture",
//         category: "MOBILE APP",
//         color: "accent",
//         image:project2Img,
//         link: '#',
//         youtube: '#'
//     },
//     {
//         id: 3,
//         title: "Data Visualization Suite",
//         description: "Real-time 3D data representation and analytics",
//         category: "DASHBOARD",
//         color: "secondary",
//         image:project3Img,
//         link: '#',
//         youtube: '#'
//     },
//     {
//         id: 4,
//         title: "NFT Marketplace",
//         description: "Decentralized platform for digital collectibles",
//         category: "WEB3",
//         color: "primary",
//         image:project4Img,
//         link: '#',
//         youtube: '#'
//     },
//     {
//         id: 5,
//         title: "Agency Website",
//         description: "Bright Matter Agency website, Digital innovation",
//         category: "Digitial-Agency",
//         color: "primary",
//         image: brightImg,
//         link: 'https://brightmatter.vercel.app/',
//         youtube: '#'
//     },
//     {
//         id: 6,
//         title: "TechGadget Store",
//         description: "Increased sales by 240% through targeted PPC campaigns",
//         category: "Digitial-Agency",
//         color: "primary",
//         image: project5Img,
//         link: '#',
//         youtube: '#'
//     },
//     {
//         id: 7,
//         title: "CloudFlow Platform",
//         description: "Generated 1,200+ qualified leads through content marketing.",
//         category: "Digitial-Agency",
//         color: "primary",
//         image: project6Img,
//         link: '#',
//         youtube: '#'
//     },
//      {
//         id: 7,
//         title: "Web Development",
//         description: "Web Development, frontend and backend",
//         category: "WEB APP",
//         color: "primary",
//         image: project7Img,
//         link: '#',
//         youtube: '#'
//     },
// ];

export const skills = [
    {
      id: 1,
      title: "UI/UX Design",
      description: "User research, wireframing, prototyping, interaction design",
      icon: FiMonitor,
    },
    {
      id: 2,
      title: "Frontend Dev",
      description: "React, Vue, Next.js, Tailwind, GSAP, Three.js",
      icon: FiCpu,
    },
    {
      id: 3,
      title: "Backend Dev",
      description: "Node.js, Express, MongoDB, GraphQL, Firebase",
      icon: FiLayers ,
    },
    {
      id: 4,
      title: "Mobile Dev",
      description: "React Native, Flutter, SwiftUI, Kotlin",
      icon: FiSmartphone ,
    },
    {
      id: 5,
      title: "DevOps",
      description: "Docker, AWS, CI/CD, Serverless, Microservices",
      icon: FiSettings,
    },
  ];