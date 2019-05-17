import React from 'react';

const IconLink = ({ Icon, children, className, href }) => (
  <li className={className}>
    <Icon className="icon" />
      <a target="_blank" rel="noopener noreferrer" href={href}>
        {children}
      </a>
  </li>
);

export default IconLink;
