import styled from 'styled-components'

const StyledNav = styled.nav`
  width: 100%;
  position: fixed;
  font-size: 16px;
  font-weight: 500;
  color: var(--grey-5);
  background-color: white;
  z-index: 1;

  &.scrolled {
    box-shadow: 0 3px 2px -2px rgba(0, 0, 0, 0.1);
    -webkit-box-shadow: 0 3px 2px -2px rgba(0, 0, 0, 0.1);
  }

  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    height: 100%;

    @media (min-width: 768px) {
      height: 80px;
      align-items: center;
      justify-content: space-between;
      flex-direction: row;
    }
  }
`

StyledNav.Left = styled.div`
  display: grid;
  grid-gap: 17px;
  grid-auto-flow: column;
  grid-template-columns: 36px auto;
  align-items: center;
  padding: 10px;

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
`

StyledNav.Right = styled.ul`
  display: grid;
  grid-gap: 40px;
  grid-auto-flow: row;
  padding: 10px;

  @media (min-width: 768px) {
    grid-auto-flow: column;
  }

  a {
    transition: all 400ms;
  }

  a.active,
  a:not(.active):hover {
    color: var(--grey-5);
  }

  a:not(.active) {
    color: var(--grey-3);
  }
`

export { StyledNav }
