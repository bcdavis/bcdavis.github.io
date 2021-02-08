(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{54:function(e,t,a){},55:function(e,t,a){"use strict";a.r(t);var s=a(1),c=a(0),n=a.n(c),i=a(13),o=a.n(i),r=a(32),l=a(11),d=a(5),h=a(56),u=a(7),m=a.n(u),b=a(9),j=n.a.createContext(),p=j.Provider,g=(j.Consumer,j),O=function(){var e=Object(c.useContext)(g).hero,t=e.title,a=e.name,n=e.subtitle,i=e.cta,o=Object(c.useState)(!1),r=Object(d.a)(o,2),l=r[0],u=r[1],j=Object(c.useState)(!1),p=Object(d.a)(j,2),O=p[0],f=p[1];return Object(c.useEffect)((function(){window.innerWidth>769?(u(!0),f(!1)):(f(!0),u(!1))}),[]),Object(s.jsx)("section",{id:"hero",className:"jumbotron",children:Object(s.jsxs)(h.a,{children:[Object(s.jsx)(m.a,{left:l,bottom:O,duration:1e3,delay:500,distance:"30px",children:Object(s.jsxs)("h1",{className:"hero-title",children:[t||"Hi, my name is"," ",Object(s.jsx)("span",{className:"text-color-main",children:a||"Your Name"}),Object(s.jsx)("br",{}),Object(s.jsx)("span",{className:"subtitle",children:n||"I'm the Unknown Developer."})]})}),Object(s.jsx)(m.a,{left:l,bottom:O,duration:1e3,delay:1e3,distance:"30px",children:Object(s.jsx)("p",{className:"hero-cta",children:Object(s.jsx)("span",{className:"cta-btn cta-btn--hero",children:Object(s.jsx)(b.Link,{to:"projects",smooth:!0,duration:1e3,children:i||"My Work"})})})})]})})},f=a(57),x=a(58),v=function(e){var t=e.title;return Object(s.jsx)(m.a,{bottom:!0,duration:1e3,delay:300,distance:"0px",children:Object(s.jsx)("h2",{className:"section-title",children:t})})},w=function(){var e=Object(c.useContext)(g).about,t=e.paragraphOne,a=e.resume,n=Object(c.useState)(!1),i=Object(d.a)(n,2),o=i[0],r=i[1],l=Object(c.useState)(!1),u=Object(d.a)(l,2),b=u[0],j=u[1];return Object(c.useEffect)((function(){window.innerWidth>769?(r(!0),j(!1)):(j(!0),r(!1))}),[]),Object(s.jsx)("section",{id:"about",children:Object(s.jsxs)(h.a,{children:[Object(s.jsx)(v,{className:"about-title",title:"About Me"}),Object(s.jsx)(f.a,{className:"about-wrapper",children:Object(s.jsx)(x.a,{className:"info-wrapper",md:10,sm:12,children:Object(s.jsx)(m.a,{left:o,bottom:b,duration:500,delay:250,distance:"30px",children:Object(s.jsxs)("div",{className:"about-wrapper__info",children:[Object(s.jsx)("p",{className:"about-wrapper__info-text",children:t||"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi neque, ipsa animi maiores repellendu distinctioaperiam earum dolor voluptatum consequatur blanditiis inventore debitis fuga numquam voluptate architecto itaque molestiae."}),a&&Object(s.jsx)("span",{className:"d-flex mt-3 md-center",children:Object(s.jsx)("a",{target:"_blank",rel:"noopener noreferrer",className:"cta-btn cta-btn--resume",href:a,children:"Resume"})})]})})})})]})})},y=a(30),N=a.n(y),C=a(60),k=a(31),S=a(61),_=a(59),M=function(e){var t=e.currProj,a=e.handleCaseStudy,n=e.isCaseStudyOpen,i=e.checked,o=Object(c.useState)(!1),r=Object(d.a)(o,2),l=(r[0],r[1],Object(c.useState)(!1)),h=Object(d.a)(l,2);h[0],h[1];Object(c.useEffect)((function(){console.log("isCaseStudyOpen--useEffect(): ",n),!0===n.open?console.log("Case study is open: ",n.id):console.log("Case Study is closed:",n.id)}),[]),console.log("currProj",t);var u=t.caseStudy,m=function(e,t){return Object(s.jsx)(s.Fragment,{children:Object(s.jsxs)("div",{className:"cs-section",children:[Object(s.jsx)("h3",{className:"cs-title",children:e}),Object(s.jsx)("div",{className:"cs-paragraphs",children:t.map((function(e){return e.indexOf(".jpg")>0||e.indexOf(".png")>0?Object(s.jsx)("div",{className:"cs-img-container",children:Object(s.jsx)(_.a,{className:"cs-img",src:"/images/".concat(e),fluid:!0})}):Object(s.jsx)("p",{className:"cs-para-text",children:e})}))}),Object(s.jsx)("br",{})]})})};return Object(s.jsx)(s.Fragment,{children:Object(s.jsxs)("div",{id:"cs-drawer-".concat(t.id),className:"cs-drawer",children:[u.background.length>0?m("Background",u.background):null,u.problem.length>0?m("Problem",u.problem):null,u.audience.length>0?m("Audience",u.audience):null,u.personas.length>0?m("Personas",u.personas):null,u.challStmt.length>0?m("Challenge Statement",u.challStmt):null,u.team.length>0?m("The Team",u.team):null,u.role.length>0?m("My Role",u.role):null,u.constraints.length>0?m("Constraints",u.constraints):null,u.process.length>0?m("Design Process",u.process):null,u.retrospective.length>0?m("Success",u.retrospective):null,Object(s.jsx)("div",{className:"cs-close-btn-container",children:Object(s.jsx)(k.a,{toggle:!0,children:Object(s.jsx)(S.a,{id:t.title,type:"checkbox",className:"cta-btn cta-btn--hero case-study-btn",value:t.title,checked:i,onChange:function(e){return a(e)},children:"Close Case Study"})})})]})})},E=function(){var e=Object(c.useContext)(g).projects,t=Object(c.useState)(!1),a=Object(d.a)(t,2),n=a[0],i=a[1],o=Object(c.useState)(!1),r=Object(d.a)(o,2),l=r[0],u=r[1],b=Object(c.useState)({open:!1,id:null}),j=Object(d.a)(b,2),p=j[0],O=j[1],w=Object(c.useState)(!1),y=Object(d.a)(w,2),E=y[0],I=(y[1],"View Case Study"),T="Close Case Study";function L(e,t){document.getElementById&&e&&(e.childNodes[1]?e.childNodes[1].nodeValue=t:e.value?e.value=t:e.innerText=t)}Object(c.useEffect)((function(){window.innerWidth>769?(i(!0),u(!1)):(u(!0),i(!1))}),[]),Object(c.useEffect)((function(){console.log("Checked: ",E)}),[E]),Object(c.useEffect)((function(){console.log("isCaseStudyOpen--useEffect(): ",p),!0===p.open?console.log("Case study is open: ",p.id):console.log("Case Study is closed:",p.id)}),[]);var D=function(e){var t=p,a=document.getElementById("".concat(t.id)),s=document.getElementById("".concat(t.id,"-drawer")),c=e.currentTarget.value,n=document.getElementById(c),i=document.getElementById("".concat(c,"-drawer"));c===t.id?!0===t.open?(O({open:!1,id:c}),L(a,I),s.classList.remove("drawer-open")):(O({open:!0,id:c}),L(n,T),i.classList.add("drawer-open")):(!0===t.open&&(O({open:!1,id:t.id}),L(a,I),s.classList.remove("drawer-open")),O({open:!0,id:c}),L(n,T),i.classList.add("drawer-open"))};return Object(s.jsx)("section",{id:"projects",children:Object(s.jsx)(h.a,{children:Object(s.jsxs)("div",{className:"project-wrapper",children:[Object(s.jsx)(v,{title:"Projects"}),e.map((function(e){e.projNum;var t=e.title,a=e.info,c=(e.info2,e.url),i=e.repo,o=(e.img,e.id),r=e.techUsed;e.caseStudy;return Object(s.jsxs)(f.a,{children:[Object(s.jsx)(x.a,{lg:4,sm:12,children:Object(s.jsx)(m.a,{left:n,bottom:l,duration:500,delay:250,distance:"30px",children:Object(s.jsxs)("div",{className:"project-wrapper__text",children:[Object(s.jsx)("h3",{className:"project-wrapper__text-title",children:t||"Project Title"}),Object(s.jsxs)("div",{children:[Object(s.jsx)("p",{className:"mb-4",children:""===a?"":a}),Object(s.jsx)("div",{className:"tech-badges",children:r.map((function(e){return Object(s.jsx)("div",{className:"badgeContainer",children:Object(s.jsx)(C.a,{className:"techBadge-outline",variant:"light",children:e})})}))})]}),Object(s.jsxs)(k.a,{toggle:!0,vertical:!0,className:"proj-btns",children:[Object(s.jsx)(S.a,{id:t,type:"checkbox",className:"cta-btn cta-btn--hero case-study-btn",value:t,checked:E,onChange:function(e){return D(e)},children:"View Case Study"}),Object(s.jsxs)(k.a,{className:"live-src-btns",children:[""===c?"":Object(s.jsx)("a",{target:"_blank",rel:"noopener noreferrer",className:"cta-btn text-color-main",href:c||"#!",children:"See Live"}),i&&Object(s.jsx)("a",{target:"_blank",rel:"noopener noreferrer",className:"cta-btn text-color-main",href:i,children:"Source Code"})]})]})]})})}),Object(s.jsx)(x.a,{lg:8,sm:12,children:Object(s.jsx)(m.a,{right:n,bottom:l,duration:500,delay:250,distance:"30px",children:Object(s.jsx)("div",{className:"project-wrapper__image",children:Object(s.jsx)(N.a,{options:{reverse:!1,max:8,perspective:1e3,scale:1,speed:300,transition:!0,axis:null,reset:!0,easing:"cubic-bezier(.03,.98,.52,.99)"},children:Object(s.jsx)("div",{"data-tilt":!0,className:"thumbnail rounded containerHover",children:Object(s.jsx)(_.a,{className:"img",src:"/images/MiniClueTemp.png",fluid:!0})})})})})}),Object(s.jsx)(x.a,{id:"".concat(t,"-drawer"),className:"case-study-drawer",children:Object(s.jsx)(M,{currProj:e,handleCaseStudy:D,isCaseStudyOpen:p,checked:E},o)})]},o)}))]})})})},I=function(){var e=Object(c.useContext)(g).contact,t=e.cta,a=e.btn,n=e.email,i=Object(c.useContext)(g).footer.networks;return Object(s.jsx)("section",{id:"contact",children:Object(s.jsxs)(h.a,{children:[Object(s.jsx)(v,{title:"Contact"}),Object(s.jsx)(m.a,{bottom:!0,duration:500,delay:250,distance:"30px",children:Object(s.jsxs)("div",{className:"contact-wrapper",children:[Object(s.jsx)("p",{className:"contact-wrapper__text",children:t||"Wanna catch up?"}),Object(s.jsxs)("a",{target:"_blank",rel:"noopener noreferrer",className:"contact-email-btn cta-btn cta-btn--resume",href:n?"mailto:".concat(n):"https://github.com/cobidev/react-simplefolio",children:[a||"Let's Talk",Object(s.jsx)("i",{className:"contact-email-icon fa fa-envelope"})]})]})}),Object(s.jsx)(m.a,{bottom:!0,duration:500,delay:250,distance:"20px",children:Object(s.jsx)("div",{className:"social-links--contact",children:i&&i.map((function(e){var t=e.id,a=e.name,c=e.url;return Object(s.jsx)("a",{href:c||"https://github.com/cobidev/gatsby-simplefolio",rel:"noopener noreferrer",target:"_blank","aria-label":a,children:Object(s.jsx)("i",{className:"fa fa-".concat(a||"refresh"," fa-inverse light")})},t)}))})})]})})},T=function(){Object(c.useContext)(g).footer;return Object(s.jsx)("footer",{className:"footer navbar-static-bottom",children:Object(s.jsxs)(h.a,{children:[Object(s.jsx)("span",{className:"back-to-top",children:Object(s.jsx)(b.Link,{to:"hero",smooth:!0,duration:1e3,children:Object(s.jsx)("i",{className:"fa fa-angle-up fa-2x","aria-hidden":"true"})})}),Object(s.jsx)("hr",{}),Object(s.jsxs)("p",{className:"footer__text",children:["\xa9 ",(new Date).getFullYear()," - "," ",Object(s.jsx)("a",{href:"https://github.com/bcdavis",target:"_blank",rel:"noopener noreferrer",children:"Ben Davis"})]})]})})},L=a(10),D=function(){var e=Object(c.useContext)(g).nav,t=Object(c.useContext)(g).footer.networks,a=(e.path1,e.path2),n=e.path3,i=e.path4,o=Object(c.useState)(!1),r=Object(d.a)(o,2),l=(r[0],r[1]),h=Object(c.useState)(!1),u=Object(d.a)(h,2),m=(u[0],u[1]);return Object(c.useEffect)((function(){window.innerWidth>769?(l(!0),m(!1)):(m(!0),l(!1))}),[]),Object(s.jsx)(s.Fragment,{children:Object(s.jsxs)(L.a,{navbar:!0,className:"sidenav menu",id:"vert-nav",as:"ul",children:[Object(s.jsx)(L.a.Item,{as:"li",children:Object(s.jsx)("div",{id:"vert-nav-top",children:Object(s.jsxs)(b.Link,{className:"to-hero",to:"hero",smooth:!0,duration:700,children:[Object(s.jsx)("h3",{children:"Ben Davis"}),Object(s.jsx)("p",{children:"UI/UX Designer & Developer"})]})})}),Object(s.jsx)(L.a.Item,{as:"li",children:Object(s.jsxs)(b.Link,{className:"nav-link to-about",to:"about",smooth:!0,duration:700,spy:!0,offset:0,children:[Object(s.jsx)("div",{children:Object(s.jsx)("i",{className:"fa fa-user nav-link__icon"})}),a||"About1"]})}),Object(s.jsx)(L.a.Item,{as:"li",children:Object(s.jsxs)(b.Link,{className:"nav-link to-projects",to:"projects",smooth:!0,duration:700,spy:!0,offset:0,children:[Object(s.jsx)("div",{children:Object(s.jsx)("i",{className:"fa fa-file-code-o nav-link__icon"})}),n||"Projects1"]})}),Object(s.jsx)(L.a.Item,{as:"li",children:Object(s.jsxs)(b.Link,{className:"nav-link to-contact",to:"contact",smooth:!0,duration:700,spy:!0,offset:0,children:[Object(s.jsx)("div",{children:Object(s.jsx)("i",{className:"fa fa-paper-plane nav-link__icon"})}),i||"Contacts1"]})}),Object(s.jsx)(k.a,{id:"nav-footer",children:Object(s.jsx)("div",{id:"social-links",children:t&&t.map((function(e){var t=e.id,a=e.name,c=e.url;return Object(s.jsx)("a",{id:"".concat(a,"-icon"),href:c||"https://github.com/cobidev/gatsby-simplefolio",rel:"noopener noreferrer",target:"_blank","aria-label":a,children:Object(s.jsx)("i",{className:"fa fa-".concat(a||"refresh")})},t)}))})})]})})},B=a(19),F={path1:"Home",path2:"About",path3:"Projects",path4:"Contact"},P={title:"Hi, I'm",name:"Ben Davis",subtitle:"Front-End UI/UX Designer & Developer",cta:""},A={img:"profile.jpg",paragraphOne:"Recent graduate from Lipscomb University with a Bachelor of Science in Electrical and Computer Engineering with a commitment to excellence, strong written language skills, creativity and artistic talent, as well as an accomplished amateur photographer.",paragraphTwo:"",paragraphThree:"",resume:"https://github.com/bcdavis/bcdavis.github.io/blob/gh-pages/BenDavis_Resume_V3_2020.pdf"},H=[{projNum:0,id:Object(B.a)(),img:"MiniClueTemp.png",title:"Mini Clue",info:"A simplified, online, competitive, single-player version of the classic detective game Clue\xae.",info2:"",url:"",repo:"https://github.com/bcdavis/CH43-Capstone-Mini-Clue",techUsed:["JavaScript","CSS3","HTML5","ReactJS","Figma","JSON Server"],caseStudy:{background:["Clue\xae is a famous classic mystery game played on a board by 3 - 6 players. The object of the game is to determine who murdered the game's victim, Mr. Body, where the crime took place, and which weapon was used. Each player assumes the role of one of the six suspects and attempts to deduce the correct answer by strategically moving around a game board representing the rooms of a mansion and collecting clues about the circumstances of the murder from the other players."],problem:["The biggest problem with Clue\xae, though, is it's accessibility. As of Fall 2020, there was no free, online, competitive, single-player, version of the boardgame Clue\xae.","A solution to this accessibility issue would be an online resource where individuals can quickly and easily play a game of Clue\xae by themselves. To measure a user's skill, each user would create an account where they could track their highest score and see the high scores of other users in a leaderboard.","Another issue facing Clue\xae itself was the fact that there was no way to customize the game. My solution would also include a method to customize the names of characters, weapons, and rooms inside a game. The custom game would be saved to the user who created it, but custom games would also have the option to be shared with all other users for them to play.","Success of this project would be acheived if players could create an account, play a classic game version, save their highest score and display that score on a scoreboard."],audience:["This project was geared towards individuals who want to play Clue but may not have the time to play, others to play with, or even the board itself. Mini Clue is also a resource for those wishing to improve their fictional detective work by providing a measurable high score for each user. This also induces competition between users for the highest scoring game."],personas:[],challStmt:["How might we create a web app and/or mobile app which provides a free, single-player, competitive, online version of the popular board game Clue\xae that\u2019s easy to use and fun to play?"],team:[],role:["Lead designer and front-end developer"],constraints:["\u2022 1 week to design, develop, and demonstrate a working product."],process:["The first and arguably most important part of this project was solidifying the organization of data in the database. An ERD was created to record the essential information to acheive this project's goal.","MiniClueERD.png","The ERD above begins with the user account \u2013 locked behind a username and email address. Each user would have an id which was associated with their highest game score and any custom games they create. Every game of Mini Clue needed cards, so the cards are stored in a separate table, each card containing the id of the game to which it belonged. The original 21 cards have a corresponding game id of 0, which is the id for a classic game of Mini Clue.","Next came the wireframing and prototyping. I used pencil and paper to sketch my initial concepts and flow diagrams and then mocked those up using Figma. The state diagram below represents the process of playing a game of Mini Clue.","MiniClueGameFlow.png","The following Figma frames were my initial mock-ups for the project: the home page, custom game creation page, and about page.","MiniClueHomePage.png","MiniClueFigmaCreator.png","MiniClueFigmaAbout.png","Once the protoyping was complete, I began programming. I hosted a local database using JSON Server to act as my real-time database. I created some placeholder user data using famous fictional detectives like Sherlock Holmes. The following images show the final product as of demo day (Nov 20, 2020).","MiniClueDemo_Login.png","MiniClueDemo_Home.png","MiniClueDemo_About.png","MiniClueDemo_GameStart.png","MiniClueDemo_Gameplay.png","MiniClueDemo_PostGame.png","Unfortunately, due to time constraints, I had to narrow my window for success by cutting out the custom game creation system and user profile pages."],retrospective:["Completed my front-end capstone for Nashville Software School by creating a React web app.","My initial vision for this project was to include a custom game section in which a user could specify the names of the characters, weapons, and rooms of a game. A custom game would be saved to 'My Games' for that particular user and had the option to be shared publicly with other users in the 'Custom Games' section on the home page. I plan to continue working on this project and include the custom game aspect in the future.","If I could do this project again, I would do more initial research into what kind of resources I could use to aid in the development process such as npm packages for React and JavaScript."]}}],R={cta:"I'm excited to work together with you and your team!",btn:"",email:"bcollinsdavis@gmail.com"},U={networks:[{id:Object(B.a)(),name:"linkedin",url:"https://www.linkedin.com/in/ben-c-davis/"},{id:Object(B.a)(),name:"github",url:"https://github.com/bcdavis"}]};var J=function(){var e=Object(c.useState)({}),t=Object(d.a)(e,2),a=t[0],n=t[1],i=Object(c.useState)({}),o=Object(d.a)(i,2),h=o[0],u=o[1],m=Object(c.useState)([]),b=Object(d.a)(m,2),j=b[0],g=b[1],f=Object(c.useState)({}),x=Object(d.a)(f,2),v=x[0],y=x[1],N=Object(c.useState)({}),C=Object(d.a)(N,2),k=C[0],S=C[1],_=Object(c.useState)({}),M=Object(d.a)(_,2),L=M[0],B=M[1];return Object(c.useEffect)((function(){n(Object(l.a)({},P)),u(Object(l.a)({},A)),g(Object(r.a)(H)),y(Object(l.a)({},R)),S(Object(l.a)({},U)),B(Object(l.a)({},F))}),[]),Object(s.jsx)(s.Fragment,{children:Object(s.jsx)("main",{className:"flex-row main-page-container",children:Object(s.jsxs)(p,{value:{hero:a,nav:L,about:h,projects:j,contact:v,footer:k},children:[Object(s.jsx)("button",{className:"mobile-menu-base-tab",type:"button",onClick:function(e){return function(e){e.currentTarget.classList.toggle("open");var t=document.getElementById("vert-nav");e.currentTarget.classList.contains("open")?t.classList.add("sidenav-open"):t.classList.remove("sidenav-open")}(e)},children:Object(s.jsx)("div",{className:"menu btn2","data-menu":"1",children:Object(s.jsx)("div",{className:"icon"})})}),Object(s.jsx)(D,{}),Object(s.jsxs)("div",{className:"right-content",children:[Object(s.jsx)(O,{}),Object(s.jsx)(w,{}),Object(s.jsx)(E,{}),Object(s.jsx)(I,{}),Object(s.jsx)(T,{})]})]})})})};a(53),a(54);o.a.render(Object(s.jsx)(n.a.StrictMode,{children:Object(s.jsx)(J,{})}),document.getElementById("root"))}},[[55,1,2]]]);
//# sourceMappingURL=main.b32a4707.chunk.js.map