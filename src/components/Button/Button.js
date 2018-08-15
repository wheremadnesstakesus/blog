import classnames from 'classnames/bind'
import PropTypes from 'prop-types'
import React from 'react'

import styl from './Button.module.css'

const cx = classnames.bind(styl)

function Button({ ariaLabel, className, children, primary, transparent, type, upper }) {
  const cls = cx(className, styl.button, {
    primary,
    transparent,
    upper,
  })

  return (
    <button className={cls} type={type} aria-label={ariaLabel}>
      {children}
    </button>
  )
}

Button.propTypes = {
  ariaLabel: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
  primary: PropTypes.bool,
  transparent: PropTypes.bool,
  type: PropTypes.oneOf(['button', 'submit']),
  upper: PropTypes.bool,
}

Button.defaultProps = {
  ariaLabel: '',
  className: '',
  primary: false,
  transparent: false,
  type: 'button',
  upper: false,
}

export default Button
