import React from 'react'
import { string } from 'prop-types'

const OuterLink = ({ children, href }) => (
  <a href={href} rel="noopener noreferrer" target="_blank">
    {children}
  </a>
)

OuterLink.propTypes = {
  href: string.isRequired
}

export default OuterLink
