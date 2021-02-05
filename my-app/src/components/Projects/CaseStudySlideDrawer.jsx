// This file describes the case study of a project listed in the projects section

// The case study slides out from underneath the project card, and is populated with
// relevant case study data from data.js

import React, { useContext, useEffect, useState } from 'react';
import Fade from 'react-reveal/Fade';
import { Container, Row, Col, Badge, Image, ToggleButton, ButtonGroup } from 'react-bootstrap';
//import Image from 'react-bootstrap/Image';
// import { Container, Col } from 'react-bootstrap';



const CaseStudySlideDrawer = ({ currProj, handleCaseStudy, isCaseStudyOpen, checked }) => {
    const csBtnText_toOpen = "View Case Study";
    const csBtnText_toClose = "Close Case Study";

    const [isDesktop, setIsDesktop] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        console.log("isCaseStudyOpen--useEffect(): ", isCaseStudyOpen);
        if (isCaseStudyOpen.open === true) {
            console.log('Case study is open: ', isCaseStudyOpen.id);
        } else {
            console.log('Case Study is closed:', isCaseStudyOpen.id);
        }
    }, []);


    console.log("currProj", currProj);
    // pass in the currently-rendering project
    // Grab caseStudy attribute from object:
    const cs = currProj.caseStudy; // caseStudy is an object with the following keys:

    // Problem, audience, personas, challStmt, Team, Role, Constraints, Process, Retrospective 

    // This function renders the paragraphs of written content associated with a case study section
    const renderSection = (sectionTitle, inputList) => {
        // sectionTitle is a string
        // inputList is an array of strings
        return (
            <>
                <h3 className="cs-title">{sectionTitle}</h3>
                <div className="cs-paragraphs">
                    {inputList.map((para) => {
                        // para is a string element in the inputList array

                        // Check if para is an image file name
                        if((para.indexOf(".jpg") > 0) || (para.indexOf(".png") > 0)){
                            // The para string could be an image with .jpg or .png extension
                            return (
                                <div className="cs-img-container">
                                    <Image className="cs-img" src={`/images/${para}`} fluid/>
                                </div>
                            )
                        }
                        // If not a file name, treat as regular text
                        else {
                            return (
                                <p className="cs-para-text">{para}</p>
                            )
                        }

                    })}
                </div>
                <br></br>
                
            </>
        )
    }



    return (
        <>
            <Fade left={isDesktop} bottom={isMobile} duration={500} delay={0} distance="0px">
                <div id={`cs-drawer-${currProj.id}`} className="cs-drawer">
                    {cs.problem.length > 0 ? renderSection("Problem", cs.problem) : null}
                    {cs.audience.length > 0 ? renderSection("Audience", cs.audience) : null}
                    {cs.personas.length > 0 ? renderSection("Personas", cs.personas) : null}
                    {cs.challStmt.length > 0 ? renderSection("Challenge Statement", cs.challStmt) : null}
                    {cs.team.length > 0 ? renderSection("The Team", cs.team) : null}
                    {cs.role.length > 0 ? renderSection("My Role", cs.role) : null}
                    {cs.constraints.length > 0 ? renderSection("Constraints", cs.constraints) : null}
                    {cs.process.length > 0 ? renderSection("Design Process", cs.process) : null}
                    {cs.retrospective.length > 0 ? renderSection("Success", cs.retrospective) : null}
                    <div className="cs-close-btn-container">
                        <ButtonGroup toggle>
                            <ToggleButton
                                id={currProj.title}
                                type="checkbox"
                                className="cta-btn cta-btn--hero case-study-btn"
                                value={currProj.title}
                                checked={checked}
                                onChange={(e) => handleCaseStudy(e)}
                                >
                                Close Case Study
                            </ToggleButton>
                        </ButtonGroup>
                    </div>
                </div>
            </Fade>
        </>
    )
}

export default CaseStudySlideDrawer;