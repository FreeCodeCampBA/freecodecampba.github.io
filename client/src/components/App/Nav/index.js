import React, { useState, useEffect } from 'react'

import { StyledNav } from './styled'

const links = [
  { href: '#home', name: 'home', text: 'Home' },
  { href: '#about', name: 'about', text: 'Sobre nosotros' },
  { href: '#events', name: 'events', text: 'Próximos encuentros' },
]

const Nav = () => {
  const [scrolled, setScrolled] = useState(false)
  const [activeLink, setActiveLink] = useState('home')

  useEffect(() => {
    window.addEventListener('scroll', () => setScrolled(windowGlobal.scrollY >= 10))
  }, [])

  const handleLinkClick = ({ target }) => setActiveLink(target.name)

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
