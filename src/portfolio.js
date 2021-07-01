import emoji from "react-easy-emoji";

import googlelogo from "./assets/img/icons/common/google.svg";
import github from "./assets/img/icons/common/github.svg";
import airbnb from "./assets/img/icons/common/airbnbLogo.png";

export const greetings = {
  name: "Sofia Zaim",
  title: "Hi all, I'm Sofia",
  description:
    "A passionate Web & Mobile Developer having an experience of building Web & Mobile applications with JavaScript / ReactJS / React Native / Nodejs / Vue. Interested in pursuing a position that offers an opportunity for the promotion of technical skills, knowledge, and abilities. Resourceful and analytical, with keen attention to details. Adept at handling multiple tasks within fast-paced and deadline-driven environments. Able to quickly learn new concepts and relate to issues and facts rapidly in order to formulate an accurate representation of the situation.",
  resumeLink: "https://cv.sofia.ga",
};

export const openSource = {
  githubUserName: "szaim",
};

export const contact = {};

export const socialLinks = {
  github: "https://github.com/szaim",
  linkedin: "https://www.linkedin.com/in/sofia-zaim-4a69a6b0/",
};

export const skillsSection = {
  title: "What I do",
  subTitle: "FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [],

  softwareSkills: [
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "logos:javascript",
    },
    {
      skillName: "TypeScript",
      fontAwesomeClassname: "logos:typescript-icon",
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "vscode-icons:file-type-reactjs",
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "logos:nodejs-icon",
    },
    {
      skillName: "react-native",
      fontAwesomeClassname: "vscode-icons:file-type-reactjs",
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "vscode-icons:file-type-npm",
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "vscode-icons:file-type-sql",
    },
    {
      skillName: "mongoDB",
      fontAwesomeClassname: "vscode-icons:file-type-mongo",
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "logos:aws",
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "logos:firebase",
    },
    {
      skillName: "git",
      fontAwesomeClassname: "logos:git-icon",
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "logos:docker-icon",
    },
  ],
};

export const SkillBars = [
  {
    Stack: "React.js",
    progressPercentage: "95",
  },
  {
    Stack: "React Native",
    progressPercentage: "95",
  },
  {
    Stack: "HTML5",
    progressPercentage: "100",
  },
  {
    Stack: "CSS",
    progressPercentage: "98",
  },
  {
    Stack: "Node.js",
    progressPercentage: "95",
  },
  {
    Stack: "Vue.js",
    progressPercentage: "90",
  },
  {
    Stack: "TypeScript",
    progressPercentage: "100",
  },
  {
    Stack: "JavaScript",
    progressPercentage: "100",
  },
  {
    Stack: "Angular",
    progressPercentage: "90",
  },
];

export const educationInfo = [
  {
    schoolName: "University of South Brittany",
    subHeader: "Bachelor's Degree in Computer Science",
    duration: "April 2011 - September 2014",
    desc: "",
    descBullets: [],
  },
  {
    schoolName: "ETF Dual College",
    subHeader: "Associate's Degree, Computer Science",
    duration: "September 2008 - April 2010",
    desc: "",
    descBullets: [],
  },
  {
    schoolName: "Hassan II University",
    subHeader: "Associate's Degree, Mathematics and Computer Science",
    duration: "September 2008 - April 2010",
    desc: "",
    descBullets: [],
  },
];

export const experience = [
  {
    role: "Software Engineer",
    company: "Google",
    companylogo: googlelogo,
    date: "June 2018 – Present",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    descBullets: [
      "Lorem ipsum dolor sit amet, consdfgectetur adipiscing elit",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    ],
  },
  {
    role: "Front-End Developer",
    company: "Github",
    companylogo: github,
    date: "May 2017 – May 2018",
    desc: "Lorem ipsum dolor sit amet, consefdctetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    role: "Freelancer",
    company: "Indeed, LinkedIn",
    companylogo: null,
    date: "Feb 2016 – Apr 2017",
    desc: "",
    descBullets: [
      "Develop and maintain websites using: HTML, CSS, Bootstrap, jQuery, Node.js, and Git.",
      "Execute and contribute to full-stack web development projects, with an emphasis on front-end features.",
      "Create and implement a custom CSS grid system, with CSS media queries for mobile responsiveness.",
      "Test front-end code in multiple browsers to ensure cross-browser compatibility.",
      "Fix front end bugs in a timely manner as needed.",
      "Maintain active conversation with the client to ensure the site met his needs",
    ],
  },
];

export const projects = [
  {
    name: "Movie App",
    desc: "This is my favorite app, designed to display multiple 2D thumbnails to keep the users up-to-date of popular, top rated and upcoming movies, where the users can watch the trailer of their favorite movies.",
    link: {
      name: "Github",
      url: "https://github.com/szaim/movie-app",
    },
  },
  {
    name: "Spotify Vibe",
    desc: "I use spotify as a music source on a daily bases and decided to build my own application that uses the Spotify API. The app has a cool interface that let’s the users search and listen to their favorite music.",
    link: {
      name: "Github",
      url: "https://github.com/szaim/",
    },
  },
  {
    name: "Mega Man Robot",
    desc: 'A stack comparison game that allows the users to compare their favorite Mega Man Characters."This app is built for the Mega Man fans."',
    link: {
      name: "Github",
      url: "https://github.com/szaim/mega-man",
    },
  },
  {
    name: "Ducktivity",
    desc: "Ducktivity is a reliable and friendly application that promote productivity and project management for individuals and teams, to stay updated with the overall workflow.",
    link: {
      name: "Github",
      url: "https://github.com/szaim/Ducktivity",
    },
  },

  {
    name: "Bartender App",
    desc: "A Bartender app, that allows the users to pick the flavors they want, and place order of a drink based on those flavors.",
    link: {
      name: "Github",
      url: "https://github.com/szaim/BartenderPractice",
    },
  },
];
