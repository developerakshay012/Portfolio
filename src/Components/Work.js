import { FaDribbble, FaGithub, FaLinkedinIn, FaTwitter } from 'react-icons/fa';
import { SiLeetcode } from "react-icons/si";
import { FiCpu, FiLayers, FiMonitor, FiSettings, FiSmartphone } from 'react-icons/fi';

// Skills Section Logo's
import htmlLogo from '../assets/tech_logo/html.png';
import cssLogo from '../assets/tech_logo/css.png';
import sassLogo from '../assets/tech_logo/sass.png';
import javascriptLogo from '../assets/tech_logo/javascript.png';
import reactjsLogo from '../assets/tech_logo/reactjs.png';
import angularLogo from '../assets/tech_logo/angular.png';
import reduxLogo from '../assets/tech_logo/redux.png';
import nextjsLogo from '../assets/tech_logo/nextjs.png';
import tailwindcssLogo from '../assets/tech_logo/tailwindcss.png';
import gsapLogo from '../assets/tech_logo/gsap.png';
import materialuiLogo from '../assets/tech_logo/materialui.png';
import bootstrapLogo from '../assets/tech_logo/bootstrap.png';
import springbootLogo from '../assets/tech_logo/springboot.png';
import nodejsLogo from '../assets/tech_logo/nodejs.png';
import expressjsLogo from '../assets/tech_logo/express.png';
import mysqlLogo from '../assets/tech_logo/mysql.png';
import mongodbLogo from '../assets/tech_logo/mongodb.png';
import firebaseLogo from '../assets/tech_logo/firebase.png';
import cLogo from '../assets/tech_logo/c.png';
import cppLogo from '../assets/tech_logo/cpp.png';
import javaLogo from '../assets/tech_logo/java.png';
import pythonLogo from '../assets/tech_logo/python.png';
import typescriptLogo from '../assets/tech_logo/typescript.png';
import gitLogo from '../assets/tech_logo/git.png';
import githubLogo from '../assets/tech_logo/github.png';
import vscodeLogo from '../assets/tech_logo/vscode.png';
import postmanLogo from '../assets/tech_logo/postman.png';
import mcLogo from '../assets/tech_logo/mc.png';
import figmaLogo from '../assets/tech_logo/figma.png';
import netlifyLogo from '../assets/tech_logo/netlify.png';
import vercelLogo from '../assets/tech_logo/vercel.png';
import postgreLogo from '../assets/tech_logo/postgre.png';
import csharpLogo from '../assets/tech_logo/csharp.png';



import githubdetLogo from '../assets/work_logo/github_det.png';
import csprepLogo from '../assets/work_logo/cs_prep.png';
import movierecLogo from '../assets/work_logo/movie_rec.png';
import taskremLogo from '../assets/work_logo/task_rem.png';
import npmLogo from '../assets/work_logo/npm.png';
import webverLogo from '../assets/work_logo/web_dig.png';

// Experience Section Logo's
import webverseLogo from '../assets/company_logo/exellence.png';
import agcLogo from '../assets/company_logo/agc_logo.png';
import newtonschoolLogo from '../assets/company_logo/newtonschool_logo.png'

// education logo
import RimtLogo from '../assets/company_logo/rimt.jpg'
import BsebLogo from '../assets/company_logo/bseb.jpg'

export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'SASS', logo: sassLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      { name: 'Angular', logo: angularLogo },
      { name: 'Redux', logo: reduxLogo },
      { name: 'Next JS', logo: nextjsLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
      { name: 'GSAP', logo: gsapLogo },
      { name: 'Material UI', logo: materialuiLogo },
      { name: 'Bootstrap', logo: bootstrapLogo },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Springboot', logo: springbootLogo },
      { name: 'Node JS', logo: nodejsLogo },
      { name: 'Express JS', logo: expressjsLogo },
      { name: 'MySQL', logo: mysqlLogo },
      { name: 'MongoDB', logo: mongodbLogo },
      { name: 'Firebase', logo: firebaseLogo },
      { name: 'PostgreSQL', logo: postgreLogo },
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'C', logo: cLogo },
      { name: 'C++', logo: cppLogo },
      { name: 'Java', logo: javaLogo },
      { name: 'Python', logo: pythonLogo },
      { name: 'C-Sharp', logo: csharpLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'TypeScript', logo: typescriptLogo },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Postman', logo: postmanLogo },
      { name: 'Compass', logo: mcLogo },
      { name: 'Vercel', logo: vercelLogo },
      { name: 'Netlify', logo: netlifyLogo },
      { name: 'Figma', logo: figmaLogo },
    ],
  },
];

export const experiences = [
    {
      id: 0,
      img: webverseLogo,
      role: "Mern stack Developer",
      company: "Exellence Technology",
      date: "JAN 2026 - JULY 2026",
      desc: "Developed dynamic and scalable web applications using the MERN stack, handling both frontend and backend development. Collaborated with cross-functional teams to build responsive UI, implement RESTful APIs, and optimize application performance in an agile environment.",
      skills: [
        "HTML",
        "CSS",
        "JavaScript",
        "React JS",
        "TypeScript",
        "Node JS",
        "Tailwind CSS",
        "MongoDb",
        "Redux",
        
      ],
    },
    {
      id: 1,
      img: agcLogo,
      role: "Frontend Intern",
      company: "Future Finders",
      date: "June 2024 - October 2024",
      desc: "Worked as a Frontend Developer Intern, designing and implementing scalable UI components and responsive websites using HTML, CSS, JavaScript, Bootstrap, and Material UI. Collaborated with the design team to translate wireframes and prototypes from Figma into interactive, user-friendly web pages.",
      skills: [
       "HTML",
        "CSS",
        "Javascript",
        "Bootstrap",
        "Figma",
        "Material UI",
      ],
    },
  
  ];


  export const education = [
    {
      id: 0,
      img: RimtLogo,
      school: "RIMT UNIVERSITY, PUNJAB",
      date: "july 2022 - June 2026",
      grade: "7.81 CGPA",
      description: "I completed my Bachelor of Technology (B.Tech) in Computer Science and Engineering, where I built a strong foundation in computer science fundamentals and software development. Throughout the program, I studied core subjects including Data Structures & Algorithms (DSA), Database Management Systems (DBMS), Computer Networks (CN), Operating Systems (OS), Object-Oriented Programming (OOP), Software Engineering, and Web Technologies. I also worked on academic and personal projects that strengthened my problem-solving, programming, and full-stack development skills, preparing me for a career in software engineering.",

degree: "Bachelor of Technology (B.Tech) - Computer Science and Engineering"
    },

    {
  id: 2,
  img: BsebLogo, // Replace with your 12th school logo
  school: "JRHS High school Salarpur",
  date: "Mar 2020 - Feb 2022",
  grade: "70%",
   description: "I completed my Higher Secondary Education (Class 12) from JRHS Salarpur under the Bihar School Examination Board (BSEB). My academic curriculum focused on Physics, Chemistry, and Mathematics (PCM), along with English and Hindi. During this period, I developed strong analytical and problem-solving skills while building a solid foundation in mathematics and science, which later supported my studies in computer science and software development.",
  degree: "Higher Secondary Education (Class XII) - PCM | Bihar School Examination Board (BSEB)",
},
    {
  id: 3,
  img: BsebLogo, // Replace with your school logo
  school: "JRHS High school Salarpur",
  date: "Mar 2019 - Feb 2020",
  grade: "63%",
   description: "I completed my Secondary Education (Class 10) from JRHS Salarpur under the Bihar School Examination Board (BSEB). During my schooling, I studied core subjects including Mathematics, Science, Social Science, Hindi, and English. This stage helped me develop a strong academic foundation, critical thinking, and problem-solving skills, which later supported my higher education in science and technology.",
  degree: "Secondary Education (Class X) - Bihar School Examination Board (BSEB)",
},
  ]

export const navItems = [
    { label: "Home", href: "#home" },
    { label: "Skills", href: "#skills" },
     { label: "Exprience", href: "#Exprience" },
      {label:"Project", href:"project"},
    { label: "Education", href: "#Education" },
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