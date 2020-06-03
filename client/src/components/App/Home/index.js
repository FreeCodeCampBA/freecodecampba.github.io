import React from 'react'

import { Container, Background, Content } from './styled'
import OuterLink from '../../shared/OuterLink'

const handleEndVideo = ({ target }) => {
  target.currentTime = 0
}
const Home = () => (
  <Container id="home">
    <Background />

    <Content>
      <h3>
        Somos la comunidad de{' '}
        <OuterLink href="https://www.freecodecamp.org">freeCodeCamp</OuterLink>{' '}
        en{' '}
        <OuterLink href="https://en.wikipedia.org/wiki/Buenos_Aires">
          Buenos Aires
        </OuterLink>
      </h3>

      <p>Veni a conocernos para aprender sobre desarrollo web en comunidad!</p>

      <video onEnded={handleEndVideo} controls="controls" autoPlay>
        <source src="https://res.cloudinary.com/dnbygvvyz/video/upload/v1552479645/video-fcc.mp4" />
      </video>
    </Content>
  </Container>
)

export default Home
