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
    projNum: 0, // Incrememnt this number with each new project -- lets site know the order in which to render projects
    id: nanoid(),
    img: "MiniClueTemp.png",
    title: 'Mini Clue',
    info: 'A simplified, online, competitive, single-player version of the classic detective game Clue®.',
    info2: '',
    url: '', // url for live demo of project
    repo: 'https://github.com/bcdavis/CH43-Capstone-Mini-Clue', // if no repo, the button will not show up
    techUsed: ["JavaScript", "CSS3", "HTML5", "ReactJS", "Figma", "JSON Server"], 
    caseStudy: {
      // Each element in the following arrays represents a new paragraph of text or an image
      // A line break is placed after each paragraph to allow some separation between bodies of text or images
      // If a key/value pair is not applicable to this project, leave an empty string ('' if value is just a string)
      // or an empty array ( [] ). Any empty values will not be displayed in the case study.

      // PLEASE PLACE ALL IMAGES IN THE 'images' FOLDER INSIDE 'public'

      problem: [
        "What problems were you working through?", 
        "How did you define success?"
      ],
      audience: [
        "Who were the target users for the project?", 
        "Why them?", 
        "How did you decide they were the users?", 
        "Any personas created?"
      ],
      personas: [], // ex: ['persona1.jpg', 'persona2.jpg', ...]
      challStmt: ["Challenge Statement"],
      team: [
        "Who worked with you on the project?",
        "What was your team structure?"
        ],
      role: ["My Role"],
      constraints: [
        "Did you have any constraints?",
        "Time, access to users, undefined problem, not enough people, too large of a scope, etc."
      ],
      // for the process, each array element can be an image or text
      // This allows people to put pictures before or after some paragraphs of text
      // Each element is checked for any image extensions (.jpg and .png)
      // If an element includes either extension substring, try to find the image file attatched to the extension
      process: [
        "What was your design process?", 
        "profile.jpg",
        "What deliverables were you responsible for?", 
        "profile.jpg",
        "MiniClueTemp.png",
        "Speak to messiness."
      ],
      retrospective: [
        "Lessons learned — did you reach success metrics?",
        "Work through the right problem?", 
        "What would you do better if you could do it again?"
      ],
    }
  },
];

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
