import PropTypes from 'prop-types'
import React from 'react'

export function Layout({ children }) {
  return <div>{children}</div>
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}
