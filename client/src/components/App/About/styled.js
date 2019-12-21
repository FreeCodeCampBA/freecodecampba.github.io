import styled from 'styled-components'

const Container = styled.section`
  min-height: 100vh;
  position: relative;
  display: flex;
  justify-content: center;
	text-align: center;
	padding-top: 110px;
`

const Content = styled.article`
  color: var(--grey-5);
  width: 100%;
  height: 100%;
  margin: 0 auto;
  max-width: 996px;
  padding: 0 10px;

  h3 {
    font-size: 28px;
    font-weight: 500;
    margin-bottom: 40px;
  }

  p {
    font-size: 16px;
    max-width: 600px;
    margin: 0 auto;
    color: var(--grey-4);
    margin-bottom: 40px;
    line-height: 28px;
    text-align: left;
  }

  a {
    color: var(--light-blue);
  }

  figure {
    position: relative;
  }

  figure img {
    max-height: 467px;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1);
  }

  figcaption {
    position: absolute;
    bottom: 24px;
    left: 0;
    right: 0;
    width: 100%;
    margin: 0 auto;
  }

  figcaption h4 {
    margin-bottom: 14px;
  }

  figcaption h5 {
    text-transform: uppercase;
  }
`

export { Container, Content }
