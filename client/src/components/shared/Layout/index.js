import React from 'react'
import PropTypes from 'prop-types'

import '../reset.css'

const Layout = ({ children }) => <main>{children}</main>

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
