import React from 'react';
import OuterLink from '../../../../shared/OuterLink';

const IconLink = ({ Icon, children, className, href }) => (
  <li className={className}>
    <Icon className="icon" />
    <OuterLink href={href}>
      {children}
    </OuterLink>
  </li>
);

export default IconLink;
