import React from 'react'
import OuterLink from '../../../../shared/OuterLink'
import { func, string } from 'prop-types';

const IconLink = ({ Icon, children, className, href }) => (
  <li className={className}>
    <Icon className="icon" />
    <OuterLink href={href}>
      {children}
    </OuterLink>
  </li>
)

IconLink.propTypes = {
  Icon: func.isRequired,
  className: string.isRequired,
  href: string.isRequired
}

export default IconLink
