import PropTypes from 'prop-types'
import React from 'react'

function Social({ instagram, facebook }) {
  return (
    <ul
      css={{
        liststyle: 'none',
      }}
    >
      <li></li>
      <li></li>
      <li></li>
    </ul>
  )
}

Social.propTypes = {
  facebook: PropTypes.string,
  instagram: PropTypes.string,
}

Social.defaultProps = {
  facebook: '',
  instagram: '',
}
