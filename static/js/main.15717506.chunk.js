(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{58:function(e,t,a){},59:function(e,t,a){"use strict";a.r(t);var o=a(1),i=a(0),s=a.n(i),n=a(10),r=a.n(n),c=a(36),l=a(13),d=a(5),h=a(61),m=a(8),u=a.n(m),p=a(9),b=s.a.createContext(),j=b.Provider,g=(b.Consumer,b),f=function(){var e=Object(i.useContext)(g).hero,t=e.title,a=e.name,s=e.subtitle,n=e.cta,r=Object(i.useState)(!1),c=Object(d.a)(r,2),l=c[0],m=c[1],b=Object(i.useState)(!1),j=Object(d.a)(b,2),f=j[0],w=j[1];return Object(i.useEffect)((function(){window.innerWidth>769?(m(!0),w(!1)):(w(!0),m(!1))}),[]),Object(o.jsx)("section",{id:"hero",className:"jumbotron",children:Object(o.jsxs)(h.a,{children:[Object(o.jsx)(u.a,{left:l,bottom:f,duration:1e3,delay:500,distance:"30px",children:Object(o.jsxs)("h1",{className:"hero-title",children:[t||"Hi, my name is"," ",Object(o.jsx)("span",{className:"text-color-main",children:a||"Your Name"}),Object(o.jsx)("br",{}),Object(o.jsx)("span",{className:"subtitle",children:s||"I'm the Unknown Developer."})]})}),Object(o.jsx)(u.a,{left:l,bottom:f,duration:1e3,delay:1e3,distance:"30px",children:Object(o.jsx)("p",{className:"hero-cta",children:Object(o.jsx)("span",{className:"cta-btn cta-btn--hero",children:Object(o.jsx)(p.Link,{to:"projects",smooth:!0,duration:1e3,children:n||"My Work"})})})})]})})},w=a(62),O=a(63),v=function(e){var t=e.title;return Object(o.jsx)(u.a,{bottom:!0,duration:1e3,delay:300,distance:"0px",children:Object(o.jsx)("h2",{className:"section-title",children:t})})},x=function(){var e=Object(i.useContext)(g).about,t=e.paragraphOne,a=e.resume,s=Object(i.useState)(!1),n=Object(d.a)(s,2),r=n[0],c=n[1],l=Object(i.useState)(!1),m=Object(d.a)(l,2),p=m[0],b=m[1];return Object(i.useEffect)((function(){window.innerWidth>769?(c(!0),b(!1)):(b(!0),c(!1))}),[]),Object(o.jsx)("section",{id:"about",children:Object(o.jsxs)(h.a,{children:[Object(o.jsx)(v,{className:"about-title",title:"About Me"}),Object(o.jsx)(w.a,{className:"about-wrapper",children:Object(o.jsx)(O.a,{className:"info-wrapper",md:10,sm:12,children:Object(o.jsx)(u.a,{left:r,bottom:p,duration:500,delay:250,distance:"30px",children:Object(o.jsxs)("div",{className:"about-wrapper__info",children:[Object(o.jsx)("p",{className:"about-wrapper__info-text",children:t||"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi neque, ipsa animi maiores repellendu distinctioaperiam earum dolor voluptatum consequatur blanditiis inventore debitis fuga numquam voluptate architecto itaque molestiae."}),a&&Object(o.jsx)("span",{className:"d-flex mt-3 md-center",children:Object(o.jsx)("a",{target:"_blank",rel:"noopener noreferrer",className:"cta-btn cta-btn--resume",href:a,children:"Resume"})})]})})})})]})})},y=a(32),S=a.n(y),N=a(64),k=a(65),C=a(33),I=a(66),_=a(67),M=function(){var e=Object(i.useContext)(g).projects,t=Object(i.useState)(!1),a=Object(d.a)(t,2),s=a[0],n=a[1],r=Object(i.useState)(!1),c=Object(d.a)(r,2),l=c[0],m=c[1],p=Object(i.useState)({open:!1,id:null}),b=Object(d.a)(p,2),j=b[0],f=(b[1],Object(i.useState)(!1)),x=Object(d.a)(f,2),y=(x[0],x[1],Object(i.useState)({open:!1,id:"0"})),M=Object(d.a)(y,2),E=M[0],T=M[1],D=Object(i.useState)(!1),F=Object(d.a)(D,2);F[0],F[1];function R(e,t){t.preventDefault();var a=t.target.id;console.log("toggleActive -- new id vs old id: ",e,E.id,E.open,a),E.id===e?T({open:!1,id:null}):T({open:!0,id:e});var o=a.split("-");"toggleBtn2"===o[0]&&(o[0]="toggleBtn1");var i=o[0].concat("-",o[1]);document.getElementById(i).scrollIntoView()}Object(i.useEffect)((function(){window.innerWidth>769?(n(!0),m(!1)):(m(!0),n(!1))}),[]),Object(i.useEffect)((function(){console.log("Projects--useEffect --\x3e activeId: ",E),j.open,console.log()}),[]);var L=function(e,t){return Object(o.jsx)(o.Fragment,{children:Object(o.jsxs)("div",{className:"cs-section",children:[Object(o.jsx)("h3",{className:"cs-title",children:e}),Object(o.jsx)("div",{className:"cs-paragraphs",children:t.map((function(e){return e.indexOf(".jpg")>0||e.indexOf(".png")>0?Object(o.jsx)("div",{className:"cs-img-container",children:Object(o.jsx)(N.a,{className:"cs-img",src:"/images/".concat(e),fluid:!0})}):Object(o.jsx)("p",{className:"cs-para-text",children:e})}))}),Object(o.jsx)("br",{})]})})},U=function(e){var t=e.currProj,a=t.caseStudy;return Object(o.jsx)(o.Fragment,{children:Object(o.jsxs)("div",{id:"cs-drawer-".concat(t.id),className:"cs-drawer",children:[a.background.length>0?L("Background",a.background):null,a.problem.length>0?L("Problem",a.problem):null,a.audience.length>0?L("Audience",a.audience):null,a.personas.length>0?L("Personas",a.personas):null,a.challStmt.length>0?L("Challenge Statement",a.challStmt):null,a.team.length>0?L("The Team",a.team):null,a.role.length>0?L("My Role",a.role):null,a.constraints.length>0?L("Constraints",a.constraints):null,a.process.length>0?L("Design Process",a.process):null,a.retrospective.length>0?L("Success",a.retrospective):null]})})};return Object(o.jsx)("section",{id:"projects",children:Object(o.jsx)(h.a,{children:Object(o.jsxs)("div",{className:"project-wrapper",children:[Object(o.jsx)(v,{title:"Projects"}),e.map((function(e){var t=e.projNum,a=e.title,i=e.info,n=(e.info2,e.url),r=e.repo,c=e.img,d=e.id,h=e.techUsed;e.caseStudy;return Object(o.jsxs)(w.a,{children:[Object(o.jsxs)(O.a,{lg:4,sm:12,children:[" ",Object(o.jsx)(u.a,{left:s,bottom:l,duration:500,delay:250,distance:"30px",children:Object(o.jsxs)("div",{className:"project-wrapper__text",children:[Object(o.jsx)("h3",{className:"project-wrapper__text-title",children:a||"Project Title"}),Object(o.jsxs)("div",{children:[Object(o.jsx)("p",{className:"mb-4",children:""===i?"":i}),Object(o.jsx)("div",{className:"tech-badges",children:h.map((function(e){return Object(o.jsx)("div",{className:"badgeContainer",children:Object(o.jsx)(k.a,{className:"techBadge-outline",variant:"light",children:e})})}))})]}),Object(o.jsxs)(C.a,{toggle:!0,vertical:!0,className:"proj-btns",children:[Object(o.jsx)(I.a,{id:"toggleBtn1-".concat(a),className:"cta-btn cta-btn--hero case-study-btn",onClick:function(e){return R(t,e)},"aria-controls":"example-collapse-content".concat(t),"aria-expanded":E.id===t,children:E.id===t?"Close Case Study":"View Case Study"}),Object(o.jsxs)(C.a,{className:"live-src-btns",children:[""===n?"":Object(o.jsx)("a",{target:"_blank",rel:"noopener noreferrer",className:"cta-btn text-color-main",href:n||"#!",children:"See Live"}),r&&Object(o.jsx)("a",{target:"_blank",rel:"noopener noreferrer",className:"cta-btn text-color-main",href:r,children:"Source Code"})]})]})]})})]}),Object(o.jsx)(O.a,{lg:8,sm:12,children:Object(o.jsx)(u.a,{right:s,bottom:l,duration:500,delay:250,distance:"30px",children:Object(o.jsx)("div",{className:"project-wrapper__image",children:Object(o.jsx)(S.a,{options:{reverse:!1,max:8,perspective:1e3,scale:1,speed:300,transition:!0,axis:null,reset:!0,easing:"cubic-bezier(.03,.98,.52,.99)"},children:Object(o.jsx)("div",{"data-tilt":!0,className:"thumbnail rounded containerHover",children:Object(o.jsx)(N.a,{className:"img",src:"/images/".concat(c),fluid:!0})})})})})}),Object(o.jsx)(_.a,{in:E.id===t,className:"cs-collapse",children:Object(o.jsx)("div",{id:"example-collapse-content".concat(t),children:Object(o.jsxs)(O.a,{id:"".concat(a,"-drawer"),className:"case-study-drawer",children:[Object(o.jsx)(U,{currProj:e},d),Object(o.jsx)(I.a,{id:"toggleBtn2-".concat(a),className:"cta-btn cta-btn--hero case-study-btn",onClick:function(e){return R(t,e)},"aria-controls":"example-collapse-content".concat(t),"aria-expanded":E.id===t,children:"Close Case Study"})]})})})]},d)}))]})})})},E=function(){var e=Object(i.useContext)(g).contact,t=e.cta,a=e.btn,s=e.email,n=Object(i.useContext)(g).footer.networks;return Object(o.jsx)("section",{id:"contact",children:Object(o.jsxs)(h.a,{children:[Object(o.jsx)(v,{title:"Contact"}),Object(o.jsx)(u.a,{bottom:!0,duration:500,delay:250,distance:"30px",children:Object(o.jsxs)("div",{className:"contact-wrapper",children:[Object(o.jsx)("p",{className:"contact-wrapper__text",children:t||"Wanna catch up?"}),Object(o.jsxs)("a",{target:"_blank",rel:"noopener noreferrer",className:"contact-email-btn cta-btn cta-btn--resume",href:s?"mailto:".concat(s):"https://github.com/cobidev/react-simplefolio",children:[a||"Let's Talk",Object(o.jsx)("i",{className:"contact-email-icon fa fa-envelope"})]})]})}),Object(o.jsx)(u.a,{bottom:!0,duration:500,delay:250,distance:"20px",children:Object(o.jsx)("div",{className:"social-links--contact",children:n&&n.map((function(e){var t=e.id,a=e.name,i=e.url;return Object(o.jsx)("a",{href:i||"https://github.com/cobidev/gatsby-simplefolio",rel:"noopener noreferrer",target:"_blank","aria-label":a,children:Object(o.jsx)("i",{className:"fa fa-".concat(a||"refresh"," fa-inverse light")})},t)}))})})]})})},T=function(){Object(i.useContext)(g).footer;return Object(o.jsx)("footer",{className:"footer navbar-static-bottom",children:Object(o.jsxs)(h.a,{children:[Object(o.jsx)("span",{className:"back-to-top",children:Object(o.jsx)(p.Link,{to:"hero",smooth:!0,duration:1e3,children:Object(o.jsx)("i",{className:"fa fa-angle-up fa-2x","aria-hidden":"true"})})}),Object(o.jsx)("hr",{}),Object(o.jsxs)("p",{className:"footer__text",children:["\xa9 ",(new Date).getFullYear()," - "," ",Object(o.jsx)("a",{href:"https://github.com/bcdavis",target:"_blank",rel:"noopener noreferrer",children:"Ben Davis"})]})]})})},D=a(12),F=function(){var e=Object(i.useContext)(g).nav,t=Object(i.useContext)(g).footer.networks,a=(e.path1,e.path2),s=e.path3,n=e.path4,r=Object(i.useState)(!1),c=Object(d.a)(r,2),l=(c[0],c[1]),h=Object(i.useState)(!1),m=Object(d.a)(h,2),u=(m[0],m[1]);return Object(i.useEffect)((function(){window.innerWidth>769?(l(!0),u(!1)):(u(!0),l(!1))}),[]),Object(o.jsx)(o.Fragment,{children:Object(o.jsxs)(D.a,{navbar:!0,className:"sidenav menu",id:"vert-nav",as:"ul",children:[Object(o.jsx)(D.a.Item,{as:"li",children:Object(o.jsx)("div",{id:"vert-nav-top",children:Object(o.jsxs)(p.Link,{className:"to-hero",to:"hero",smooth:!0,duration:700,children:[Object(o.jsx)("h3",{children:"Ben Davis"}),Object(o.jsx)("p",{children:"UI/UX Designer & Developer"})]})})}),Object(o.jsx)(D.a.Item,{as:"li",children:Object(o.jsxs)(p.Link,{className:"nav-link to-about",to:"about",smooth:!0,duration:700,spy:!0,offset:0,children:[Object(o.jsx)("div",{children:Object(o.jsx)("i",{className:"fa fa-user nav-link__icon"})}),a||"About1"]})}),Object(o.jsx)(D.a.Item,{as:"li",children:Object(o.jsxs)(p.Link,{className:"nav-link to-projects",to:"projects",smooth:!0,duration:700,spy:!0,offset:0,children:[Object(o.jsx)("div",{children:Object(o.jsx)("i",{className:"fa fa-file-code-o nav-link__icon"})}),s||"Projects1"]})}),Object(o.jsx)(D.a.Item,{as:"li",children:Object(o.jsxs)(p.Link,{className:"nav-link to-contact",to:"contact",smooth:!0,duration:700,spy:!0,offset:0,children:[Object(o.jsx)("div",{children:Object(o.jsx)("i",{className:"fa fa-paper-plane nav-link__icon"})}),n||"Contacts1"]})}),Object(o.jsx)(C.a,{id:"nav-footer",children:Object(o.jsx)("div",{id:"social-links",children:t&&t.map((function(e){var t=e.id,a=e.name,i=e.url;return Object(o.jsx)("a",{id:"".concat(a,"-icon"),href:i||"https://github.com/cobidev/gatsby-simplefolio",rel:"noopener noreferrer",target:"_blank","aria-label":a,children:Object(o.jsx)("i",{className:"fa fa-".concat(a||"refresh")})},t)}))})})]})})},R=a(14),L={path1:"Home",path2:"About",path3:"Projects",path4:"Contact"},U={title:"Hi, I'm",name:"Ben Davis",subtitle:"Front-End UI/UX Designer & Developer",cta:""},W={img:"profile.jpg",paragraphOne:"With a Bachelor of Science in Electrical and Computer Engineering from Lipscomb University and a certificate of UI/UX Front-End Development & Design from Nashville Software School, I have a commitment to excellence, strong written language skills, creativity and artistic talent, as well as accomplishments as an amateur photographer.",paragraphTwo:"",paragraphThree:"",resume:"https://github.com/bcdavis/bcdavis.github.io/blob/gh-pages/BenDavis_MARCH_2021.pdf"},A=[{projNum:0,id:Object(R.a)(),img:"C43-Site-previewImg-1.png",title:"NSS Cohort 43 Website",info:"Website for Nashville Software School's cohort 43 built by the cohort 43 UI/UX team.",info2:"",url:"https://nss-day-cohort-43.github.io/",repo:"https://github.com/nss-day-cohort-43/nss-day-cohort-43.github.io",techUsed:["JavaScript","CSS3","HTML5","Bootstrap","ReactJS","Figma"],caseStudy:{background:[],problem:[],audience:["This project was designed with a focus on potential employers who are looking to hire front-end web developers from Nashville Software School's Cohort 43."],personas:[],challStmt:["How might we promote Demo Day and showcase Cohort 43's dual skill sets to potential employers with the ultimate goal of employment?"],team:[],role:["UI/UX Designer & Front-End Developer","During the prototyping and development stage, I focused on designing and implementing the cards on which each students' image, favorite quote, name, and social links would be displayed."],constraints:[],process:["This project was organized and executed by the UI/UX side of Cohort 43. We started off with the UI/UX group splitting into two teams, each to wireframe and mock up a prototype class site. This was the initial brainstorming stage since both teams' prototypes would be compared to spark a direction of design for the final site.","My team's design is shown below with distinct sections and a clear grid layout of cards displaying students in an effective, recognized manner. With a layout inspired by previous NSS cohort websites, we utilized the NSS logo red-orange gradient and a flat, contrasting navy blue as our primary colors.","C43-Site-Mockup-Team1.png","The other team used Pantone's color of the year for 2021, Illuminating, with a teal that paired well with it. They used these colors to design a unique, abstract, and attention-grabbing site header above the fold, which is shown below.","C43-Site-Mockup-Team2.png","After discussion, we realized both teams brought good ideas to the table. We all liked the way the first team's layout showed the technologies our cohort learned over our time at NSS. We also liked the color choice of the other team and the methodology behind the decision. The bright gold color felt fresh and exciting - a new beginning. We wanted to convey that as new hires, we can provide a fresh and aspirational face to any company that might consider hiring us.","With a compromise found between the two prototypes, we decided to merge the two into a hybrid design. We came together and created a new mockup shown below which incorporated the color scheme of the second team's prototype with the layout of the first team's prototype.","C43-Site-Mockup-Comp.png","We began user testing with 3 development professionals. We took their feedback and improved our site. We did 2 more rounds of user testing and decided on our final design.","C43-Site-Final.png"],retrospective:["User testing from the beginning helped us make better design decisions. We realized usability trumps innovative design.","We learned how to facilitate remote user tests and how to prototype, develop, and present ideas to each other within a team."],links:["GitHub Repo","Live Site"]}},{projNum:1,id:Object(R.a)(),img:"MiniClueTemp.png",title:"Mini Clue",info:"A simplified, online, competitive, single-player version of the classic detective game Clue\xae.",info2:"",url:"",repo:"https://github.com/bcdavis/CH43-Capstone-Mini-Clue",techUsed:["JavaScript","CSS3","HTML5","ReactJS","Figma","JSON Server"],caseStudy:{background:["Clue\xae is a famous classic mystery game played on a board by 3 - 6 players. The object of the game is to determine who murdered the game's victim, Mr. Body, where the crime took place, and which weapon was used. Each player assumes the role of one of the six suspects and attempts to deduce the correct answer by strategically moving around a game board representing the rooms of a mansion and collecting clues about the circumstances of the murder from the other players."],problem:["The biggest problem with Clue\xae, though, is its accessibility. As of Fall 2020, there was no free, online, competitive, single-player, version of the boardgame Clue\xae.","A solution to this accessibility issue would be an online resource where individuals can quickly and easily play a game of Clue\xae by themselves. To measure a user's skill, each user would create an account where they could track their highest score and see the high scores of other users in a leaderboard.","Another issue facing Clue\xae itself was the fact that there was no way to customize the game. My solution would also include a method to customize the names of characters, weapons, and rooms inside a game. The custom game would be saved to the user who created it, but custom games would also have the option to be shared with all other users for them to play.","Success of this project would be achieved if players could create an account, play a classic game version, save their highest score and display that score on a scoreboard."],audience:["This project was geared towards individuals who want to play Clue\xae but may not have the time to play, others to play with, or even the board itself. Mini Clue is also a resource for those wishing to improve their fictional detective work by providing a measurable high score for each user. This also induces competition between users for the highest scoring game."],personas:[],challStmt:["How might we create a web app and/or mobile app which provides a free, single-player, competitive, online version of the popular board game Clue\xae that\u2019s easy to use and fun to play?"],team:[],role:["Lead designer and front-end developer"],constraints:["\u2022 1 week to design, develop, and demonstrate a working product."],process:["The first and arguably most important part of this project was solidifying the organization of data in the database. An ERD was created to record the essential information to achieve this project's goal.","MiniClueERD.png","The ERD above begins with the user account \u2013 locked behind a username and email address. Each user would have an id which was associated with their highest game score and any custom games they create. Every game of Mini Clue needed cards, so the cards are stored in a separate table, each card containing the id of the game to which it belonged. The original 21 cards have a corresponding game id of 0, which is the id for a classic game of Mini Clue.","Next came the wireframing and prototyping. I used pencil and paper to sketch my initial concepts and flow diagrams and then mocked those up using Figma. The state diagram below represents the process of playing a game of Mini Clue.","MiniClueGameFlow.png","The following Figma frames were my initial mock-ups for the project: the home page, custom game creation page, and about page.","MiniClueHomePage.png","MiniClueFigmaCreator.png","MiniClueFigmaAbout.png","Once the prototyping was complete, I began programming. I hosted a local database using JSON Server to act as my real-time database. I created some placeholder user data using famous fictional detectives like Sherlock Holmes. The following images show the final product as of demo day (Nov 20, 2020).","MiniClueDemo_Login.png","MiniClueDemo_Home.png","MiniClueDemo_About.png","MiniClueDemo_GameStart.png","MiniClueDemo_Gameplay.png","MiniClueDemo_PostGame.png","Unfortunately, due to time constraints, I had to narrow my window for success by cutting out the custom game creation system and user profile pages."],retrospective:["Completed my front-end capstone for Nashville Software School by creating a React web app.","My initial vision for this project was to include a custom game section in which a user could specify the names of the characters, weapons, and rooms of a game. A custom game would be saved to 'My Games' for that particular user and had the option to be shared publicly with other users in the 'Custom Games' section on the home page. I plan to continue working on this project and include the custom game aspect in the future.","If I could do this project again, I would do more initial research into what kind of resources I could use to aid in the development process such as npm packages for React and JavaScript."]}},{projNum:2,id:Object(R.a)(),img:"REM_preview.png",title:"REM LOG",info:"A free, online dream journal that supports text and audio.",info2:"",url:"",repo:"https://github.com/bcdavis/dreamJournal-capstoneC43",techUsed:["JavaScript","CSS3","HTML5","ReactJS","React-Bootstrap","Figma","JSON Server"],caseStudy:{background:[],problem:["It\u2019s not easy to quickly write down a dream you just had, especially if you are busy and don\u2019t have time to write it all out."],audience:["This project was geared towards all people, especially those who want to keep a record of their dreams."],personas:[],challStmt:["How might we create a web app and/or mobile app which provides a free and efficient way for users to record their dreams digitally?"],team:[],role:["Lead designer and front-end developer"],constraints:["\u2022 All people have dreams","\u2022 Not all people will have time to type out their dreams in detail","\u2022 Anyone with a phone usually keeps it near them when they sleep, so a mobile-first design is preferred"],process:["The first and arguably most important part of this project was solidifying the organization of data in the database. An ERD was created to record the essential information to achieve this project's goal.","REM_ERD.png","Next came the wireframing and prototyping. I made some initial components in Figma that are shown below.","REM_FIG_components.png","The following Figma frames were my initial mock-ups for the project made using the components from the image above: ","REM_FIG_list.png","REM_FIG_listFilter.png","REM_FIG_add.png","REM_FIG_addRec.png","REM_FIG_addAudio.png","Once the prototyping was complete, I began programming. I hosted a local database using JSON Server to act as my real-time database. I chose to add react-bootstrap's component library to the project, which would help with the constructing of forms and other components. In the components image above, I made two versions of dream cards. I decided to work with the second version (the one that wasn't used in the Figma mockups above) because it's layout was more conducive to react-bootstrap's Card component. I also imported Bootstrap's icon library to reference for my icons.","REM_login.png","REM_list.png","REM_view.png","REM_add.png","The most difficult part of this project, by far, was working with recording audio from the built-in microphone through the browser. I looked for pre-existing react components which could swiftly record and store an audio file. I ended up Using a basic audio recording script which asked the browser for permission to use the microphone, recorded audio at the press of a button, and rendered a basic HTML audio element once captured. Since I was hosting my website through JSON Server, I could not store the audio file itself. So, this iteration of the project will save the name of the audio file recorded, but not the file itself until I incorporate some external support from a file-storing resource like Cloudinary."],retrospective:["Completed my second capstone for Nashville Software School by creating a React web app.","In the future I plan to add a fully supported audio recording system by integrating support from Cloudinary and full-time database hosting with Firebase.","If I could do this project again, I would do more user testing with my Figma prototype and versions of the final product online."]}}],B={cta:"I'm excited to work together with you and your team!",btn:"",email:"bcdavis@i65n.com"},H={networks:[{id:Object(R.a)(),name:"linkedin",url:"https://www.linkedin.com/in/ben-c-davis/"},{id:Object(R.a)(),name:"github",url:"https://github.com/bcdavis"}]};var J=function(){var e=Object(i.useState)({}),t=Object(d.a)(e,2),a=t[0],s=t[1],n=Object(i.useState)({}),r=Object(d.a)(n,2),h=r[0],m=r[1],u=Object(i.useState)([]),p=Object(d.a)(u,2),b=p[0],g=p[1],w=Object(i.useState)({}),O=Object(d.a)(w,2),v=O[0],y=O[1],S=Object(i.useState)({}),N=Object(d.a)(S,2),k=N[0],C=N[1],I=Object(i.useState)({}),_=Object(d.a)(I,2),D=_[0],R=_[1];return Object(i.useEffect)((function(){s(Object(l.a)({},U)),m(Object(l.a)({},W)),g(Object(c.a)(A)),y(Object(l.a)({},B)),C(Object(l.a)({},H)),R(Object(l.a)({},L))}),[]),Object(o.jsx)(o.Fragment,{children:Object(o.jsx)("main",{className:"flex-row main-page-container",children:Object(o.jsxs)(j,{value:{hero:a,nav:D,about:h,projects:b,contact:v,footer:k},children:[Object(o.jsx)("button",{className:"mobile-menu-base-tab",type:"button",onClick:function(e){return function(e){e.currentTarget.classList.toggle("open");var t=document.getElementById("vert-nav");e.currentTarget.classList.contains("open")?t.classList.add("sidenav-open"):t.classList.remove("sidenav-open")}(e)},children:Object(o.jsx)("div",{className:"menu btn2","data-menu":"1",children:Object(o.jsx)("div",{className:"icon"})})}),Object(o.jsx)(F,{}),Object(o.jsxs)("div",{className:"right-content",children:[Object(o.jsx)(f,{}),Object(o.jsx)(x,{}),Object(o.jsx)(M,{}),Object(o.jsx)(E,{}),Object(o.jsx)(T,{})]})]})})})};a(57),a(58);r.a.render(Object(o.jsx)(s.a.StrictMode,{children:Object(o.jsx)(J,{})}),document.getElementById("root"))}},[[59,1,2]]]);
//# sourceMappingURL=main.15717506.chunk.js.map