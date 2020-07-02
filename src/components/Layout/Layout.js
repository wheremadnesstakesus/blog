import PropTypes from 'prop-types'
import React from 'react'

export function Layout({ children }) {
  return <React.Fragment>{children}</React.Fragment>
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

Layout.defaultProps = {}
