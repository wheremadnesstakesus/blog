import PropTypes from 'prop-types'
import React from 'react'

import { Link, Social } from 'components'

export function TopNav({ title }) {
  return (
    <div>
      <Social />
      <h1>
        <Link to="/">{title}</Link>
      </h1>

    </div>
  )
}

TopNav.propTypes = {
  title: PropTypes.string,
}

TopNav.defaultProps = {
  title: '',
}
