import React from 'react';

import { Container, Content } from './styled';
import {
  FacebookIcon,
  TwitterIcon,
  MeetupIcon,
  SlackIcon,
  GitHubIcon,
  InstagramIcon,
  QuestionsIcon,
  MapIcon,
  UsersIcon,
  MicrophoneIcon,
  MailIcon
} from '../../shared/Icons';
import IconLink from './components/IconLink';

const Footer = () => (
  <Container>
    <Content>
      <div className="footer__intro">
        <div className="footer__logo">
          <img
            src="https://res.cloudinary.com/dxm7p7ceq/image/upload/v1550495218/logo_rpgen2.png"
            alt="freeCodeCampBA"
          />
          <header>
            <h1>freeCodeCamp</h1>
            <h2>Buenos Aires</h2>
          </header>
        </div>

        <p>Aprendemos haciendo, enseñando y compartiendo lo que sabemos.</p>
      </div>

      <div className="footer__social">
        <h3>Social</h3>

        <ul className="footer__social-networks">
          <IconLink
            Icon={FacebookIcon}
            className="footer__social-network"
            href="https://www.facebook.com/groups/free.code.camp.buenos.aires"
          >
            Seguinos en Facebook
          </IconLink>
          <IconLink
            Icon={TwitterIcon}
            className="footer__social-network"
            href="https://twitter.com/freecodecampba?lang=en"
          >
            Seguinos en Twitter
          </IconLink>
          <IconLink
            Icon={MeetupIcon}
            className="footer__social-network"
            href="https://www.meetup.com/es/FreeCodeCampBA"
          >
            Seguinos en Meetup
          </IconLink>
          <IconLink
            Icon={SlackIcon}
            className="footer__social-network"
            href="https://freecodecampba.org/chat"
          >
            Unite al chat de Slack
          </IconLink>
          <IconLink
            Icon={GitHubIcon}
            className="footer__social-network"
            href="https://github.com/FreeCodeCampBA"
          >
            Seguinos en GitHub
          </IconLink>
          <IconLink
            Icon={InstagramIcon}
            className="footer__social-network"
            href="https://www.instagram.com/freecodecampba"
          >
            Seguinos en Instagram
          </IconLink>
        </ul>
      </div>

      <div className="footer__links">
        <h3>Links</h3>

        <ul className="footer__social-links">
          <IconLink
            Icon={QuestionsIcon}
            className="footer__social-link"
            href="https://github.com/FreeCodeCampBA/faq"
          >
            Preguntas Frecuentes
          </IconLink>
          <IconLink
            Icon={MapIcon}
            className="footer__social-link"
            href="https://github.com/FreeCodeCampBA/quick-start"
          >
            Guia Inicial del Grupo
          </IconLink>
          <IconLink
            Icon={UsersIcon}
            className="footer__social-link"
            href="https://github.com/FreeCodeCampBA/codigo"
          >
            Código de Conducta
          </IconLink>
          <IconLink
            Icon={MicrophoneIcon}
            className="footer__social-link"
            href="https://github.com/FreeCodeCampBA/charlas"
          >
            Charlas
          </IconLink>
          <IconLink
            Icon={MailIcon}
            className="footer__social-link"
            href="mailto:freecodecampba@gmail.com"
          >
            Contacto
          </IconLink>
        </ul>
      </div>
    </Content>
  </Container>
);

export default Footer;
