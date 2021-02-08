import React, { useContext } from 'react';
import Fade from 'react-reveal/Fade';
import { Container } from 'react-bootstrap';
import { Link } from 'react-scroll';
import PortfolioContext from '../../context/context';
import Title from '../Title/Title';

const Contact = () => {
  const { contact } = useContext(PortfolioContext);
  const { cta, btn, email } = contact;

  const { footer } = useContext(PortfolioContext);
  const { networks } = footer;

  return (
    <section id="contact">
      <Container>
        <Title title="Contact" />
        <Fade bottom duration={500} delay={250} distance="30px">
          <div className="contact-wrapper">
            <p className="contact-wrapper__text">
              {cta || 'Wanna catch up?'}
            </p>
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="contact-email-btn cta-btn cta-btn--resume"
              href={email ? `mailto:${email}` : 'https://github.com/cobidev/react-simplefolio'}
            >
              {btn || "Let's Talk"}
              <i className="contact-email-icon fa fa-envelope"></i>
            </a>
          </div>

        </Fade>
        <Fade bottom duration={500} delay={250} distance="20px">
          <div className="social-links--contact">
            {networks &&
              networks.map((network) => {
                const { id, name, url } = network;
                return (
                  <a
                    key={id}
                    href={url || 'https://github.com/cobidev/gatsby-simplefolio'}
                    rel="noopener noreferrer"
                    target="_blank"
                    aria-label={name}
                  >
                    <i className={`fa fa-${name || 'refresh'} fa-inverse light`} />
                  </a>
                );
              })}
          </div>
        </Fade>
      </Container>
    </section>
  );
};

export default Contact;
