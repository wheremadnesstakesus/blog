import PropTypes from 'prop-types'
import React from 'react'

import styl from './Input.module.css'

function Input({ name, placeholder, type }) {
  return <input className={styl.input} name={name} type={type} placeholder={placeholder} />
}

Input.propTypes = {
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  type: PropTypes.oneOf(['text']),
}

Input.defaultProps = {
  placeholder: '',
  type: 'text',
}

export default Input
