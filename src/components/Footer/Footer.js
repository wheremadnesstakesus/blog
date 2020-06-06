import classnames from 'classnames/bind'
import PropTypes from 'prop-types'
import React from 'react'

import Icon from '../Icon'

import styl from './Footer.module.css'

const cx = classnames.bind(styl)

function Footer({ author }) {
  return (
    <footer className={styl.footer}>
      <div className={cx(styl.section, styl.credits)}>
        <p>
          © {new Date().getFullYear()}, Built with
          <Icon icon="heart" className={styl.icon} />
          by {author}! Todos los derechos reservados
        </p>
      </div>
    </footer>
  )
}

Footer.propTypes = {
  author: PropTypes.string,
}

Icon.defaultProps = {
  author: '',
}

export default Footer
