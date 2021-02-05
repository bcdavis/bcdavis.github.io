import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Ben Davis', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: 'Welcome to my website', // e.g: Welcome to my website
};

export const navData = {
  path1: 'Home',
  path2: 'About',
  path3: 'Projects',
  path4: 'Contact',
};

// HERO DATA
export const heroData = {
  title: "Hi, I'm",
  name: 'Ben Davis',
  subtitle: 'Front-End UI/UX Designer & Developer',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne: 'Recent graduate from Lipscomb University with a Bachelor of Science in Electrical and Computer Engineering with a commitment to excellence, strong written language skills, creativity and artistic talent, as well as an accomplished amateur photographer.',
  paragraphTwo: '',
  paragraphThree: '',
  resume: 'BenDavis_resume_V3_2020.pdf', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: "MiniClueTemp.png",
    title: 'Mini Clue',
    info: 'A simplified, online, competitive, single-player version of the classic detective game Clue®.',
    info2: '',
    url: '', // url for live demo of project
    repo: 'https://github.com/bcdavis/CH43-Capstone-Mini-Clue', // if no repo, the button will not show up
    techUsed: ["JavaScript", "CSS3", "HTML5", "ReactJS", "Figma", "JSON Server"], 

  },
];

// export const techUsed = [
//   {
//     id: 1,
//     name: 'JavaScript',
//   },
//   {
//     id: 2,
//     name: 'CSS3',
//   },
//   {
//     id: 3,
//     name: 'HTML5',
//   },
//   {
//     id: 4,
//     name: 'Bootstrap',
//   },
//   {
//     id: 5,
//     name: 'ReactJS',
//   },
//   {
//     id: 6,
//     name: 'Figma',
//   },
//   {
//     id: 7,
//     name: 'JSON Server',
//   },
//   {
//     id: 8,
//     name: 'Sass',
//   },
// ]


// CONTACT DATA
export const contactData = {
  cta: "I'm excited to work together with you and your team!",
  btn: '',
  email: 'bcollinsdavis@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/ben-c-davis/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/bcdavis',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
