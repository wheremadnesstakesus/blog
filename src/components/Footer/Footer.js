import classnames from 'classnames/bind'
import PropTypes from 'prop-types'
import React from 'react'

import Icon from '../Icon'

import styl from './Footer.module.css'

const cx = classnames.bind(styl)

function Footer({ builtWith, copyright }) {
  return (
    <footer className={styl.footer}>
      <div className={cx(styl.section, styl.credits)}>
        <p>
          © {new Date().getFullYear()}, {builtWith}
          <Icon icon="heart" className={styl.icon} />! {copyright}
        </p>
      </div>
    </footer>
  )
}

Footer.propTypes = {
  builtWith: PropTypes.string,
  copyright: PropTypes.string,
}

Icon.defaultProps = {
  builtWith: '',
  copyright: '',
}

export default Footer
