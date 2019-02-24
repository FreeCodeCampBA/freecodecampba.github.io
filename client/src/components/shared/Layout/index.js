import React from 'react'
import PropTypes from 'prop-types'

import '../reset.css'
const Layout = ({ children }) => {

  const handleScroll = (e) => {console.log('pato',e)}

  return (<main onScroll={handleScroll}>
  {children}
  </main>)
  }

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
