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
  paragraphOne: 'With a Bachelor of Science in Electrical and Computer Engineering from Lipscomb University and a certifricate of UI/UX Front-End Development & Design from Nashville Software School, I have a commitment to excellence, strong written language skills, creativity and artistic talent, as well as accomplishments as an amateur photographer.',
  paragraphTwo: '',
  paragraphThree: '',
  resume: 'https://github.com/bcdavis/bcdavis.github.io/blob/gh-pages/BenDavis_Resume_V3_2020.pdf', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    projNum: 0, // Incrememnt this number with each new project -- lets site know the order in which to render projects
    id: nanoid(),
    img: "C43-Site-previewImg-1.png",
    title: 'NSS Cohort 43 Website',
    info: "Website for Nashville Software School's cohort 43 built by the cohort 43 UI/UX team.",
    info2: '',
    url: 'https://nss-day-cohort-43.github.io/', // url for live demo of project
    repo: 'https://github.com/nss-day-cohort-43/nss-day-cohort-43.github.io', // if no repo, the button will not show up
    techUsed: ["JavaScript", "CSS3", "HTML5", "Bootstrap", "ReactJS", "Figma"], 
    caseStudy: {
      // Each element in the following arrays represents a new paragraph of text or an image
      // A line break is placed after each paragraph to allow some separation between bodies of text or images
      // If a key/value pair is not applicable to this project, leave an empty string ('' if value is just a string)
      // or an empty array ( [] ). Any empty values will not be displayed in the case study.

      // PLEASE PLACE ALL IMAGES IN THE 'images' FOLDER INSIDE 'public'

      background: [],
      problem: [],
      audience: [
        "This project was geared towards individuals who want to play Clue® but may not have the time to play, others to play with, or even the board itself. Mini Clue is also a resource for those wishing to improve their fictional detective work by providing a measurable high score for each user. This also induces competition between users for the highest scoring game.", 
      ],
      personas: [], // ex: ['persona1.jpg', 'persona2.jpg', ...]
      challStmt: ["How might we promote Demo Day and showcase Cohort 43's dual skill sets to potential employers with the ultimate goal of employment?"],
      team: [],
      role: ["UI/UX Designer & Front-End Developer", "During the prototyping and development stage, I focused on designing and implementing the cards on which each student's  image, favorite quote, name, and social links would be displayed."],
      constraints: [],
      // for the process, each array element can be an image or text
      // This allows people to put pictures before or after some paragraphs of text
      // Each element is checked for any image extensions (.jpg and .png)
      // If an element includes either extension substring, try to find the image file attatched to the extension
      process: [
        "This project started off with the class splitting into two teams to wireframe and mock up a class site, with the end goal of showcasing our designs, defending them, and compromising on which project we should move ahead with.",
        "C43-Site-Mockup-Team1.png",
        "C43-Site-Mockup-Team2.png",
        "After discussion, we realized both teams brought good ideas to the table. We decided to merge the 2 into a hybrid design.",
        "One team used Pantone's color of the year for 2021, Illuminating, with a teal that paired well with it. The bright gold color felt fresh and exciting - a new beginning. We wanted to convey that as new hires, we can provide a fresh and aspirational face to any company that might consider hiring us.",
        "The other team had a clear, card based layout that displayed the students in a clear and effective manner. We liked the way this layout showed the technologies our cohort learned over our time at NSS.",
        "We came together and created a new mockup.",
        "C43-Site-Mockup-Comp.png",
        "We began user testing with 3 development professionals. We took their feedback and improved our site. We did 2 more rounds of user testing and decided on our final design.",
        "C43-Site-Final.png",
      ],
      retrospective: [
        "User testing from the beginning helped us make better design decisions. We realized usability trumps innovative design.",
        "We learned how to facilitate remote user tests.", 
      ],
      links: [
        "GitHub Repo",
        "Live Site"
      ]
    }
  },
  {
    projNum: 1, // Incrememnt this number with each new project -- lets site know the order in which to render projects
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

      background: ["Clue® is a famous classic mystery game played on a board by 3 - 6 players. The object of the game is to determine who murdered the game's victim, Mr. Body, where the crime took place, and which weapon was used. Each player assumes the role of one of the six suspects and attempts to deduce the correct answer by strategically moving around a game board representing the rooms of a mansion and collecting clues about the circumstances of the murder from the other players."],
      problem: [
        "The biggest problem with Clue®, though, is it's accessibility. As of Fall 2020, there was no free, online, competitive, single-player, version of the boardgame Clue®.",
        "A solution to this accessibility issue would be an online resource where individuals can quickly and easily play a game of Clue® by themselves. To measure a user's skill, each user would create an account where they could track their highest score and see the high scores of other users in a leaderboard.",
        "Another issue facing Clue® itself was the fact that there was no way to customize the game. My solution would also include a method to customize the names of characters, weapons, and rooms inside a game. The custom game would be saved to the user who created it, but custom games would also have the option to be shared with all other users for them to play.",
        "Success of this project would be acheived if players could create an account, play a classic game version, save their highest score and display that score on a scoreboard."
      ],
      audience: [
        "This project was geared towards individuals who want to play Clue® but may not have the time to play, others to play with, or even the board itself. Mini Clue is also a resource for those wishing to improve their fictional detective work by providing a measurable high score for each user. This also induces competition between users for the highest scoring game.", 
      ],
      personas: [], // ex: ['persona1.jpg', 'persona2.jpg', ...]
      challStmt: ["How might we create a web app and/or mobile app which provides a free, single-player, competitive, online version of the popular board game Clue® that’s easy to use and fun to play?"],
      team: [],
      role: ["Lead designer and front-end developer"],
      constraints: [
        "• 1 week to design, develop, and demonstrate a working product.",
      ],
      // for the process, each array element can be an image or text
      // This allows people to put pictures before or after some paragraphs of text
      // Each element is checked for any image extensions (.jpg and .png)
      // If an element includes either extension substring, try to find the image file attatched to the extension
      process: [
        "The first and arguably most important part of this project was solidifying the organization of data in the database. An ERD was created to record the essential information to acheive this project's goal.", 
        "MiniClueERD.png",
        "The ERD above begins with the user account – locked behind a username and email address. Each user would have an id which was associated with their highest game score and any custom games they create. Every game of Mini Clue needed cards, so the cards are stored in a separate table, each card containing the id of the game to which it belonged. The original 21 cards have a corresponding game id of 0, which is the id for a classic game of Mini Clue.",
        "Next came the wireframing and prototyping. I used pencil and paper to sketch my initial concepts and flow diagrams and then mocked those up using Figma. The state diagram below represents the process of playing a game of Mini Clue.",
        "MiniClueGameFlow.png",
        "The following Figma frames were my initial mock-ups for the project: the home page, custom game creation page, and about page.",
        "MiniClueHomePage.png",
        "MiniClueFigmaCreator.png",
        "MiniClueFigmaAbout.png",
        "Once the protoyping was complete, I began programming. I hosted a local database using JSON Server to act as my real-time database. I created some placeholder user data using famous fictional detectives like Sherlock Holmes. The following images show the final product as of demo day (Nov 20, 2020).",
        "MiniClueDemo_Login.png",
        "MiniClueDemo_Home.png",
        "MiniClueDemo_About.png",
        "MiniClueDemo_GameStart.png",
        "MiniClueDemo_Gameplay.png",
        "MiniClueDemo_PostGame.png",
        "Unfortunately, due to time constraints, I had to narrow my window for success by cutting out the custom game creation system and user profile pages."
      ],
      retrospective: [
        "Completed my front-end capstone for Nashville Software School by creating a React web app.",
        "My initial vision for this project was to include a custom game section in which a user could specify the names of the characters, weapons, and rooms of a game. A custom game would be saved to 'My Games' for that particular user and had the option to be shared publicly with other users in the 'Custom Games' section on the home page. I plan to continue working on this project and include the custom game aspect in the future.", 
        "If I could do this project again, I would do more initial research into what kind of resources I could use to aid in the development process such as npm packages for React and JavaScript."
      ],
    }
  },
  {
    projNum: 2, // Incrememnt this number with each new project -- lets site know the order in which to render projects
    id: nanoid(),
    img: "REM_preview.png",
    title: 'REM LOG',
    info: 'A free, online dream journal that supports text and audio.',
    info2: '',
    url: '', // url for live demo of project
    repo: 'https://github.com/bcdavis/dreamJournal-capstoneC43', // if no repo, the button will not show up
    techUsed: ["JavaScript", "CSS3", "HTML5", "ReactJS", "React-Bootstrap", "Figma", "JSON Server"], 
    caseStudy: {
      // Each element in the following arrays represents a new paragraph of text or an image
      // A line break is placed after each paragraph to allow some separation between bodies of text or images
      // If a key/value pair is not applicable to this project, leave an empty string ('' if value is just a string)
      // or an empty array ( [] ). Any empty values will not be displayed in the case study.

      // PLEASE PLACE ALL IMAGES IN THE 'images' FOLDER INSIDE 'public'

      background: [],
      problem: [
        "It’s not easy to quickly write down a dream you just had, especially if you are busy and don’t have time to write it all out."
      ],
      audience: [
        "This project was geared towards all people, especially those who want to keep a record of their dreams.", 
      ],
      personas: [], // ex: ['persona1.jpg', 'persona2.jpg', ...]
      challStmt: ["How might we create a web app and/or mobile app which provides a free and efficient way for users to record their dreams digitally?"],
      team: [],
      role: ["Lead designer and front-end developer"],
      constraints: [
        "• All people have dreams",
        "• Not all people will have time to type out their dreams in detail",
        "• Anyone with a phone usually keeps it near them when they sleep, so a mobile-first design is preferred"

      ],
      // for the process, each array element can be an image or text
      // This allows people to put pictures before or after some paragraphs of text
      // Each element is checked for any image extensions (.jpg and .png)
      // If an element includes either extension substring, try to find the image file attatched to the extension
      process: [
        "The first and arguably most important part of this project was solidifying the organization of data in the database. An ERD was created to record the essential information to acheive this project's goal.", 
        "REM_ERD.png",
        "Next came the wireframing and prototyping. I made some initial ocmponents in Figma that are shown below.",
        "REM_FIG_components.png",
        "The following Figma frames were my initial mock-ups for the project made using the components from the image above: ",
        "REM_FIG_list.png",
        "REM_FIG_listFilter.png",
        "REM_FIG_add.png",
        "REM_FIG_addRec.png",
        "REM_FIG_addAudio.png",
        "Once the protoyping was complete, I began programming. I hosted a local database using JSON Server to act as my real-time database. I chose to add react-bootstrap's component library to the project, which would help with the constructing of forms and other components. In the components image above, I made two versions of dream cards. I decided to work with the second version (the one that wasn't used in the Figma mockups above) because it's layout was more conducive to react-bootstrap's Card component. I also imported Bootstrap's icon library to reference for my icons.",
        "REM_login.png",
        "REM_list.png",
        "REM_view.png",
        "REM_add.png",
        "The most difficult part of this project, by far, was working with recording audio from the built-in microphone through the browser. I looked for pre-existing react components which could switfly record and store an audio file. I ended up Using a basic audio recording script which asked the browser for permission to use the microphone, recorded audio at the press of a button, and renderd a basic HTML audio element once captured. Since I was hosting my website through JSON Server, I could not store the audio file iteself. So, this iteration of the project will save the name of the audio file recorded, but not the file itself until I incorporate some external support from a file-storing resource like Cloudinary.",
      ],
      retrospective: [
        "Completed my second capstone for Nashville Software School by creating a React web app.",
        "In the future I plan to add a fully supported audio recording system by integrating support from Cloudinary and full-time database hosting with Firebase.", 
        "If I could do this project again, I would do more user testing with my Figma prototype and versions of the final product online."
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
