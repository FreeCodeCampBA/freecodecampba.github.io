import React from 'react'

import { Container, Content } from './styled'
import {
  FacebookIcon,
  TwitterIcon,
  MeetupIcon,
  SlackIcon,
  GitHubIcon,
  InstagramIcon,
  TwitchIcon,
  QuestionsIcon,
  MapIcon,
  UsersIcon,
  MicrophoneIcon,
  MailIcon,
} from '../../shared/Icons'

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
          <li className="footer__social-network">
            <FacebookIcon className="icon" />
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.facebook.com/groups/free.code.camp.buenos.aires"
            >
              Seguinos en Facebook
            </a>
          </li>
          <li className="footer__social-network">
            <TwitterIcon className="icon" />
            <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/freecodecampba?lang=en">
              Seguinos en Twitter
            </a>
          </li>
          <li className="footer__social-network">
            <MeetupIcon className="icon" />
            <a target="_blank" rel="noopener noreferrer" href="https://www.meetup.com/es/FreeCodeCampBA">
              Seguinos en Meetup
            </a>
          </li>
          <li className="footer__social-network">
            <SlackIcon className="icon" />
            <a target="_blank" rel="noopener noreferrer" href="https://freecodecampba.org/chat">
              Unite al chat de Slack
            </a>
          </li>
          <li className="footer__social-network">
            <GitHubIcon className="icon" />
            <a target="_blank" rel="noopener noreferrer" href="https://github.com/FreeCodeCampBA">
              Seguinos en GitHub
            </a>
          </li>
          <li className="footer__social-network">
            <InstagramIcon className="icon" />
            <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/freecodecampba">
              Seguinos en Instagram
            </a>
          </li>
          <li className="footer__social-network">
            <TwitchIcon className="icon" />
            <a target="_blank" rel="noopener noreferrer" href="https://www.twitch.tv/freecodecampba">
              Seguinos en Twitch
            </a>
          </li>
        </ul>
      </div>

      <div className="footer__links">
        <h3>Links</h3>

        <ul className="footer__social-links">
          <li className="footer__social-link">
            <QuestionsIcon className="icon" />
            <a target="_blank" rel="noopener noreferrer" href="https://github.com/FreeCodeCampBA/faq">
              Preguntas Frecuentes
            </a>
          </li>
          <li className="footer__social-link">
            <MapIcon className="icon" />
            <a target="_blank" rel="noopener noreferrer" href="https://github.com/FreeCodeCampBA/quick-start">
              Guia Inicial del Grupo
            </a>
          </li>
          <li className="footer__social-link">
            <UsersIcon className="icon" />
            <a target="_blank" rel="noopener noreferrer" href="https://github.com/FreeCodeCampBA/codigo">
              Código de Conducta
            </a>
          </li>
          <li className="footer__social-link">
            <MicrophoneIcon className="icon" />
            <a target="_blank" rel="noopener noreferrer" href="https://github.com/FreeCodeCampBA/charlas">
              Charlas
            </a>
          </li>
          <li className="footer__social-link">
            <MailIcon className="icon" />
            <a target="_blank" rel="noopener noreferrer" href="mailto:freecodecampba@gmail.com">
              Contacto
            </a>
          </li>
        </ul>
      </div>
    </Content>
  </Container>
)

export default Footer
