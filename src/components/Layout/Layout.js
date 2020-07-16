import PropTypes from 'prop-types'
import React from 'react'

function Layout({ children }) {
  return <React.Fragment>{children}</React.Fragment>
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

Layout.defaultProps = {}

export { Layout }
