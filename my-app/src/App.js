//import logo from './logo.svg';
//import './App.css';


import React, { useState, useEffect } from 'react';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import NavBar from './components/Nav/Nav';
//import ToggleButton from 'react-bootstrap/ToggleButton'

import { PortfolioProvider } from './context/context';

import { heroData, navData, aboutData, projectsData, contactData, footerData } from './mock/data';

function App () {
  const [hero, setHero] = useState({});
  const [about, setAbout] = useState({});
  const [projects, setProjects] = useState([]);
  const [contact, setContact] = useState({});
  const [footer, setFooter] = useState({});
  const [nav, setNav] = useState({});

  // const setupObserver = () => {
  //   let observerConfig = {
  //     root: null,
  //     rootMargin: '0px',
  //     threshold: 0.5, // detect target when more than 50% of it is visible
  //   };
  //   function observerFn(entries, observer) {
  //     let heroEntry = entries[0];
  //     let aboutEntry = entries[1];
  //     let projectsEntry = entries[2];
  //     let contactEntry = entries[3];
  //     if(heroEntry.isIntersecting){
  //       console.log("Current Intersection: ", heroEntry.target);
  //     }
  //     else if(aboutEntry.isIntersecting){
  //       console.log("Current Intersection: ", aboutEntry.target);
  //     }
  //     else if(projectsEntry.isIntersecting){
  //       console.log("Current Intersection: ", projectsEntry.target);
  //     }
  //     else if(contactEntry.isIntersecting){
  //       console.log("Current Intersection: ", contactEntry.target);
  //     }
  //     else{
  //       console.log("No current intersecting entries...");
  //     }

  //   }
  //   let observer = new IntersectionObserver(observerFn, observerConfig);

  //   let aboutSect= document.getElementById('about');
  //   let projectsSect= document.getElementById('projects');
  //   let heroSect= document.getElementById('hero');
  //   let contactSect= document.getElementById('contact');

  //   observer.observe(heroSect);
  //   observer.observe(aboutSect);
  //   observer.observe(projectsSect);
  //   observer.observe(contactSect);
  // };

  useEffect(() => {
    setHero({ ...heroData });
    setAbout({ ...aboutData });
    setProjects([...projectsData]);
    setContact({ ...contactData });
    setFooter({ ...footerData });
    setNav({ ...navData });
    //setupObserver();
  }, []);

  // function toggleNav() {
  //   let sidenav = document.getElementById("vert-nav");
  //   sidenav.classList.toggle("responsive");
  //   if(sidenav.classList.contains("responsive")){
  //     //document.getElementById("right-content").style.marginLeft = "250px";
  //     document.getElementById("right-content").classList.add("responsive");
  //   }
  //   else{
  //     //document.getElementById("right-content").style.marginLeft = "0";
  //     document.getElementById("right-content").classList.remove("responsive");
  //   }
  // }

  const handleMenuClick = (e) => {
    //  console.log(e.currentTarget.checked);
    e.currentTarget.classList.toggle('open');
    console.log(e.currentTarget);
    // console.log('checked...?');
    const x = document.getElementById('vert-nav');
    console.log(x);

    if (e.currentTarget.classList.contains('open')){
      x.classList.add('sidenav-open');
    }
    else{
      x.classList.remove('sidenav-open');
    }
  };

  return (
    <>
      <main className="flex-row main-page-container">
        <PortfolioProvider value={{ hero, nav, about, projects, contact, footer }}>
          {/* <input id="hamburger" type="checkbox" className="hamburger-checkbox" />
          <label for="hamburger" className="hamburger-label" role="button" aria-labelledby="menu">
            &#xf0c9;
          </label> */}
          <button
            className="mobile-menu-base-tab"
            type="button"
            onClick={(e) => handleMenuClick(e)}
          >
            <div className="menu btn2" data-menu="1">
              <div className="icon"></div>
            </div>
          </button>
          <NavBar />
          <div className="right-content">
            {/* <div id="main2">
              <ToggleButton id="span" onChange={document.getElementById("vert-nav").classList.toggle('responsive')}>
                &#9776; open
              </ToggleButton>
            </div> */}
            <Hero />
            <About />
            <Projects />
            <Contact />
            <Footer />
          </div>
        </PortfolioProvider>
      </main>
    </>
  );
};

export default App;



/*
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
*/