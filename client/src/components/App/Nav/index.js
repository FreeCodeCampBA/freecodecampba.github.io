import React, { useState } from 'react'

import { StyledNav } from './styled'

const Nav = () => {
  const [activeLink, setActiveLink] = useState('home')
  const [scrolled, setScrolled] = useState(false)
  const handleLinkClick = ({ target }) => setActiveLink(target.name)
  const handleScroll = () => { window.scrollY >= 10 ? setScrolled(true) : setScrolled(false)}

  const scrollListener = window.addEventListener('scroll', 
    handleScroll)
  const links = [
    { href: '#home', name: 'home', text: 'Home' },
    { href: '#about', name: 'about', text: 'Sobre nosotros' },
    { href: '#events', name: 'events', text: 'Próximos encuentros' },
  ]

  return (
    <StyledNav className={`${scrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <StyledNav.Left>
          <img
            src="https://res.cloudinary.com/dxm7p7ceq/image/upload/v1550495218/logo_rpgen2.png"
            alt="freeCodeCampBA"
          />
          <header>
            <h1>freeCodeCamp</h1>
            <h2>Buenos Aires</h2>
          </header>
        </StyledNav.Left>

        <StyledNav.Right>
          {links.map(link => (
            <li key={link.name}>
              <a
                href={link.href}
                name={link.name}
                onClick={handleLinkClick}
                className={link.name === activeLink ? 'active' : ''}
              >
                {link.text}
              </a>
            </li>
          ))}
        </StyledNav.Right>
      </div>
    </StyledNav>
  )
}

export default Nav
