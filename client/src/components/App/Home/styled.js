import styled from 'styled-components'

const Container = styled.section`
  height: 70vh;
  position: relative;
  display: flex;
  justify-content: center;
  text-align: center;
  padding-top: 240px;

  @media (min-width: 768px) {
    padding-top: 180px;
  }

  @media (max-width: 320px) {
    height: 80vh;
  }
`

const Background = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  transform: skewY(-2deg);
  background-color: var(--light-blue);
  transform-origin: 0;
  z-index: -1;
`

const Content = styled.article`
  color: white;
  position: relative;
  width: 100%;
  height: 100%;
  margin: 0 auto;
  max-width: 996px;

  h3 {
    font-size: 28px;
    font-weight: 500;
    margin-bottom: 40px;

    @media (max-width: 768px){
      font-size: 28px;
      font-weight: 500;
      margin-bottom: 25px;
    }

    @media (max-width: 320px){
      font-size: 22px;
      font-weight: 500;
      margin-bottom: 25px;
    }
  }

  p {
    font-size: 18px;
    max-width: 600px;
    margin: 0 auto;
    line-height: 28px;

    @media (max-width: 320px){
      font-size: 16px;
      max-width: 600px;
      margin: 0 auto;
      line-height: 28px;
    }
  }

  a {
    color: white;
    font-weight: 600;
  }

  video {
    width: 100%;
    height: 100%;
    max-width: 568px;
    max-height: 320px;
    display: flex;
    justify-content: center;
    left: 0;
    position: absolute;
    margin: 0 auto;
    left: 0;
    right: 0;
    bottom: -140px;
    z-index: 1;
   
    @media (min-width: 768px) and (max-height: 800px) {
      bottom: -120px;
    }

    @media (min-width: 320px) and (max-height: 768px) {
      bottom: -175px;
    }

  }
`

export { Container, Background, Content }
