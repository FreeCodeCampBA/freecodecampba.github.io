import styled from 'styled-components'

const Container = styled.footer`
  min-height: 394px;
  background-color: var(--grey-2);
`

const Content = styled.div`
  width: 100%;
  height: 100%;
  margin: 0 auto;
  max-width: 996px;

  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto auto auto;
  grid-gap: 30px;

  padding: 50px 10px 10px 10px;

  @media (min-width: 768px) {
    grid-gap: 60px;
    grid-template-columns: 1fr 1fr 1fr;
  }

  .footer__intro {
    p {
      color: var(--grey-4);
    }
  }
  .footer__logo {
    display: grid;
    grid-gap: 17px;
    grid-auto-flow: column;
    grid-template-columns: 36px auto;
    margin-bottom: 20px;

    img,
    header {
      vertical-align: middle;
    }

    h1,
    h2 {
      font-size: 16px;
      font-weight: 400;
    }

    h2 {
      color: var(--grey-3);
    }
  }

  .footer__social h3 {
    margin-bottom: 24px;
    font-size: 14px;
    letter-spacing: 0.0714286em;
    text-transform: uppercase;
    font-weight: 400;
    color: var(--grey-5);
  }

  .footer__social-networks {
    display: grid;
    grid-gap: 18px;
    font-size: 14px;
  }

  .footer__social-network {
    display: flex;
    align-items: center;

    :hover {
      cursor: pointer;
      .icon {
        fill: var(--light-blue);
      }

      a {
        color: var(--light-blue);
      }
    }

    .icon {
      width: 18px;
      margin-right: 14px;
      fill: var(--grey-3);
    }

    a {
      color: var(--grey-4);
    }
  }

  .footer__links h3 {
    margin-bottom: 24px;
    font-size: 14px;
    letter-spacing: 0.0714286em;
    text-transform: uppercase;
    font-weight: 400;
    color: var(--grey-5);
  }

  .footer__social-links {
    display: grid;
    grid-gap: 18px;
    font-size: 14px;
  }

  .footer__social-link {
    display: flex;
    align-items: center;

    :hover {
      cursor: pointer;
      .icon {
        stroke: var(--light-blue);
      }

      a {
        color: var(--light-blue);
      }
    }

    .icon {
      width: 24px;
      margin-right: 14px;
      stroke: var(--grey-3);
    }

    a {
      color: var(--grey-4);
    }
  }
`

export { Container, Content }
