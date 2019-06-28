import styled from 'styled-components'

const Container = styled.section`
  height: 120vh;
  position: relative;
  display: flex;
  justify-content: center;
  text-align: center;

  @media screen and (min-width: 768px) {
    height: 80vh;
  }
`

const Background = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: var(--grey-5);
  transform: skewY(-2deg);
  transform-origin: 0;
  z-index: -1;
`

const BackgroundFooter = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 120px;
  background-color: var(--grey-5);
  z-index: -1;
`

const Content = styled.article`
  color: white;
  width: 100%;
  height: 100%;
  margin: 0 auto;
  max-width: 996px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  h3 {
    font-size: 28px;
    font-weight: 500;
    margin-bottom: 40px;
  }

  p {
    font-size: 18px;
    max-width: 600px;
    margin: 0 auto;
    line-height: 28px;
  }

  a {
    color: white;
    font-weight: 600;
  }

  .organizing {
    img {
      max-width: 50%;
      margin-bottom: 10px;
    }

    h4 {
      font-weight: 400;
    }
  }
`

const EventBox = styled.div`
  display: grid;
  height: 335px;
  border-radius: 5px;
  margin: 0 auto;
  background-color: var(--grey-4);
  grid-template-columns: 1fr;
  grid-template-rows: 324px 185px;

  @media screen and (min-width: 768px) {
    grid-template-rows: auto;
    grid-template-columns: 324px 185px;
  }
`

EventBox.Left = styled.div`
  border-radius: inherit;
  padding: 30px 30px 0;
  text-align: left;
  background-color: var(--grey-2);
  height: 100%;
  overflow: hidden;
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;

  @media screen and (min-width: 768px) {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
        border-bottom-left-radius: inherit;
  }

  h4 {
    color: var(--grey-4);
  }

  h4,
  .info {
    margin-bottom: 20px;
  }

  .info h5 {
    color: var(--grey-3);
    font-weight: 400;
    text-transform: uppercase;
  }

  .info p {
    color: var(--grey-4);
    font-weight: 400;
    font-size: 16px;

    ::first-letter {
      text-transform: uppercase;
    }
  }

  a {
    color: white;
    background-color: var(--light-blue);

    border: 1px solid #4ea0cc;
    box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.15);
    border-radius: 3px;

    font-size: 14px;
    text-align: center;
    text-transform: uppercase;

    width: 100%;
    padding: 13px 0;
    display: block;
  }
`

EventBox.Right = styled.div`
  border-top-right-radius: 0;
  border-top-left-radius: 0;
  border-bottom-left-radius: inherit;
  border-bottom-right-radius: inherit;
  height: 100%;
  overflow: hidden;
  text-align: initial;

  > div {
    width: 100% !important;
  }

  @media screen and (min-width: 768px) {
    border-top-right-radius: inherit;
    border-bottom-right-radius: inherit;
    border-bottom-left-radius: 0;

  }
`

export { Container, Background, BackgroundFooter, Content, EventBox }
