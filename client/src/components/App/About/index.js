import React from 'react'

import { Container, Content } from './styled'

const About = () => (
  <Container id="about">
    <Content>
      <h3>Sobre nosotros</h3>

      <p>
        Somos una comunidad de aprendizaje sobre desarrollo y tecnologías web. Promovemos una forma de aprendizaje
        autodidacta, experimental y colaborativa.
      </p>

      <p>
        Vas a tu propio ritmo, en un ambiente motivador y totalmente distendido. Creemos que la mejor forma de aprender
        a programar es... ¡programando!
      </p>

      <p>
        Si querés saber más, te recomendamos leer nuestra{' '}
        <a href="https://github.com/FreeCodeCampBA/quick-start" target="_blank" rel="noopener noreferrer">
          guía rápida para empezar
        </a>
        .
      </p>

      <figure>
        <img
          alt="Meetup de Mayo en Aerolab"
          src="https://res.cloudinary.com/dxm7p7ceq/image/upload/v1550578493/mayo_c4r4nt.jpg"
        />
        <figcaption>
          <h4>Meetup de Mayo 2018</h4>
          <h5>Aerolab</h5>
        </figcaption>
      </figure>
    </Content>
  </Container>
)

export default About
