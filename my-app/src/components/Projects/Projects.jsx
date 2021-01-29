import React, { useContext, useEffect, useState } from 'react';
import Fade from 'react-reveal/Fade';
import Tilt from 'react-tilt';
import Image from 'react-bootstrap/Image';
import { Container, Row, Col } from 'react-bootstrap';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
//import Button from 'react-bootstrap/Button';
import ToggleButton from 'react-bootstrap/ToggleButton'
import PortfolioContext from '../../context/context';
import Title from '../Title/Title';
//import ProjectImg from '../Image/ProjectImg';
import CaseStudySlideDrawer from './CaseStudySlideDrawer';
//import { element } from 'prop-types';

const Projects = () => {
  const { projects } = useContext(PortfolioContext); // get all projects from data.js?

  const [isDesktop, setIsDesktop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isCaseStudyOpen, setIsCaseStudyOpen] = useState({
    open: false,
    id: null,
  });
  const [checked, setChecked] = useState(false);

  const csBtnText_toOpen = "View Case Study";
  const csBtnText_toClose = "Close Case Study";

  const drawers = document.querySelectorAll('.case-study-drawer');

  // const [count, setCount] = useState(0);

  let outcome = '';

  useEffect(() => {
    if (window.innerWidth > 769) {
      setIsDesktop(true);
      setIsMobile(false);
    } else {
      setIsMobile(true);
      setIsDesktop(false);
    }
  }, []);


  // useEffect(() => {
  //   console.log('Case Study Action: ', isCaseStudyOpen.id);
  // }, []);

  useEffect(() => {
    if (checked) {
      console.log('Checked: ', checked);
    }
    else{ 
      console.log('Checked: ', checked);
    }
  }, [checked]);


  useEffect(() => {
    console.log("isCaseStudyOpen--useEffect(): ", isCaseStudyOpen);
    if (isCaseStudyOpen.open === true) {
      console.log('Case study is open: ', isCaseStudyOpen.id);
    } else {
      console.log('Case Study is closed:', isCaseStudyOpen.id);
    }
  }, []);


  function replaceButtonText(buttonElem, text){
    if (document.getElementById)
    {
      if (buttonElem)
      {
        console.log("Checking button ---- ");
        console.log("buttonElem.childNodes[1].nodeValue: ", buttonElem.childNodes[1].nodeValue);
        console.log("buttonElem.innerText: ", buttonElem.innerText);
        if (buttonElem.childNodes[1])
        {
          console.log("have childNodes");
          buttonElem.childNodes[1].nodeValue=text;
          
        }
        else if (buttonElem.value)
        {
          console.log("have value");
          buttonElem.value=text;
        }
        else //if (button.innerHTML)
        {
          console.log("have innerText");
          buttonElem.innerText=text;
        }
      }
    }
  }

  const handleCaseStudy = (e) => {


    console.log('CASE STUUUUDY!');
    const prevCS = isCaseStudyOpen; // the id and open status of the project last interacted with
    const prevCaseStudyBtn = document.getElementById(`${prevCS.id}`); // grabs the case study button of the current project
    const prevDrawer = document.getElementById(`${prevCS.id}-drawer`); // grab the case study drawer of the project last interacted with

    const currCSId = e.currentTarget.value; // the id of the project we just clicked
    const currCaseStudyBtn = document.getElementById(currCSId); // grabs the case study button of the current project
    const currDrawer = document.getElementById(`${currCSId}-drawer`); // grabs the case study drawer of the current project

    console.log("---- Case study information ----");
    console.log("--------------------------------");
    console.log("prevCS: ", prevCS);
    console.log("new currCSId: ", currCSId);
    console.log("--------------------------------");
    console.log("prevCaseStudyBtn: ", prevCaseStudyBtn === null ? prevCaseStudyBtn : prevCaseStudyBtn.innerText);
    console.log("currCaseStudyBtn: ", currCaseStudyBtn.innerText);
    console.log("--------------------------------");
    console.log("prevDrawer: ", prevDrawer);
    console.log("currDrawer: ", currDrawer);
    outcome = 'outcome';
    // compare id of current case study (currCSId = case study id) to that which is stored in state
    if (currCSId === prevCS.id) {

      //
      // clicked the SAME case study button of a project whose 
      // case study status was last changed (previously in state)
      //

      if (prevCS.open === true) {
        console.log("This case study was originally open");
        // If the 'open' status of the last case study is 'true', we want to close that case study
        outcome += '- selfOpen-->selfClosed -';
        setIsCaseStudyOpen({ open: false, id: currCSId });
        // Change case study button text
        replaceButtonText(prevCaseStudyBtn, csBtnText_toOpen);
        // Close the previous case study's drawer
        prevDrawer.classList.remove('drawer-open');
        
      } else {
        console.log("This case study was originally closed");
        outcome += '- selfClosed-->selfOpen -';
        // If the 'open' status of the last case study is 'false', we want to open that case study
        setIsCaseStudyOpen({ open: true, id: currCSId });
        // Change case study button text
        replaceButtonText(currCaseStudyBtn, csBtnText_toClose);
        // Open the new case study drawer
        currDrawer.classList.add('drawer-open'); 
      }
    } else {

      //
      // Clicked the case study button of a DIFFERENT project than 
      // that which was last changed (previously in state)
      //

      if (prevCS.open === true) {
        console.log("This case study was originally open");
        outcome += '- otherClosed -';
        // Close the case study in previously changed state if it is 'open'
        setIsCaseStudyOpen({ open: false, id: prevCS.id });
        // Change case study button text
        replaceButtonText(prevCaseStudyBtn, csBtnText_toOpen);
        // Close the previous case study's drawer
        prevDrawer.classList.remove('drawer-open');
      }
      // Open a new case study
      outcome += '- selfOpen -';
      setIsCaseStudyOpen({ open: true, id: currCSId });
      // Change case study button text
      replaceButtonText(currCaseStudyBtn, csBtnText_toClose);
      // Open the new case study's drawer
      currDrawer.classList.add('drawer-open');
    }
    console.log(outcome);
  };

  // const handleCountClick = (n) => {
  //   const plusOne = n + 1;
  //   setCount(plusOne);
  // };

  const handleCheck = (e) => {
    console.log('drawers: ', drawers);
    console.log(e.currentTarget.value);
    //  console.log(e.currentTarget.checked);
    setChecked(e.currentTarget.checked);
    
    // console.log('checked: ', checked);

    const drawer = document.querySelector('.case-study-drawer');
    if(checked){
      drawer.classList.add('drawer-open');
    }
    else{
      drawer.classList.remove('drawer-open');
    }
  };

  return (
    <section id="projects">
      <Container>
        <div className="project-wrapper">
          <Title title="Projects" />
          {projects.map((project) => {
            const { title, info, info2, url, repo, img, id } = project;
            // for each project, store its variables to use for rendering

            return (
              <Row key={id}>
                <Col lg={4} sm={12}>
                  <Fade
                    left={isDesktop}
                    bottom={isMobile}
                    duration={500}
                    delay={250}
                    distance="30px"
                  >
                    <div className="project-wrapper__text">
                      <h3 className="project-wrapper__text-title">{title || 'Project Title'}</h3>
                      <div>
                        <p className="mb-4">This is a simplified, single-player version of the game Clue®. Games consist of a user constantly making accusatory guesses in an attempt to narrow down the culprit. This project was built using <span class="highlight">ReactJS</span>.</p>
                        <p className="mb-4">{info2 || ''}</p>
                      </div>
                      <ButtonGroup toggle vertical className="proj-btns">
                        <ToggleButton
                          id={title}
                          type="checkbox"
                          className="cta-btn cta-btn--hero case-study-btn"
                          value={title}
                          checked={checked}
                          onChange={(e) => handleCaseStudy(e)}
                        >
                          View Case Study
                        </ToggleButton>
                        <ButtonGroup className="live-src-btns">
                          <a
                            target="_blank"
                            rel="noopener noreferrer"
                            className="cta-btn text-color-main"
                            href={url || '#!'}
                          >
                            See Live
                          </a>

                          {repo && (
                            <a
                              target="_blank"
                              rel="noopener noreferrer"
                              className="cta-btn text-color-main"
                              href={repo}
                            >
                              Source Code
                            </a>
                          )}
                        </ButtonGroup>
                      </ButtonGroup>
                    </div>
                  </Fade>
                </Col>
                <Col lg={8} sm={12}>
                  <Fade
                    right={isDesktop}
                    bottom={isMobile}
                    duration={500}
                    delay={250}
                    distance="30px"
                  >
                    <div className="project-wrapper__image">

                      <a
                        className="tiltDiv"
                        href={url || '#!'}
                        target="_blank"
                        aria-label="Project Link"
                        rel="noopener noreferrer"
                      >
                        <Tilt
                          options={{
                            reverse: false,
                            max: 8,
                            perspective: 1000,
                            scale: 1,
                            speed: 300,
                            transition: true,
                            axis: null,
                            reset: true,
                            easing: 'cubic-bezier(.03,.98,.52,.99)',
                          }}
                        >
                            <div data-tilt className="thumbnail rounded containerHover">
                              <Image className="img" src="/images/MiniClueTemp.png" fluid/>
                              <div className="hoverMe"></div>
                            </div>
                        </Tilt>
                      </a>
                    </div>
                  </Fade>
                </Col>
                <Col id={`${title}-drawer`} className="case-study-drawer">
                  <CaseStudySlideDrawer />
                </Col>
              </Row>
            );
          })}
        </div>
      </Container>
    </section>
  );
};

export default Projects;
