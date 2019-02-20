import React from 'react'

import { Container, Background, Content } from './styled'

const Home = () => (
  <Container id="home">
    <Background />

    <Content>
      <h3>
        Somos la comunidad de{' '}
        <a href="https://www.freecodecamp.org" target="_blank" rel="noopener noreferrer">
          freeCodeCamp
        </a>{' '}
        en{' '}
        <a href="https://en.wikipedia.org/wiki/Buenos_Aires" target="_blank" rel="noopener noreferrer">
          Buenos Aires
        </a>
      </h3>

      <p>Veni a conocernos para aprender sobre desarrollo web en comunidad!</p>

      <iframe
        frameBorder="0"
        allowFullScreen
        title="Charlas en freeCodeCampBA"
        src="https://www.youtube.com/embed/kDhoTB_fjzo?autoplay=1&controls=0&loop=1&mute=1"
      />
    </Content>
  </Container>
)

export default Home
