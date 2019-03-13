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

      <video controls="controls" autoplay loop="loop">
        <source src="https://res.cloudinary.com/dnbygvvyz/video/upload/v1552479645/video-fcc.mp4" />
      </video>
    </Content>
  </Container>
)

export default Home
