import classnames from 'classnames/bind'
import PropTypes from 'prop-types'
import React from 'react'

import styl from './Heading.module.css'

const cx = classnames.bind(styl)

function Heading({ post, title, subtitle, description }) {
  return (
    <div className={styl.heading}>
      {!post && <p className={styl.subtitle}>{subtitle}</p>}
      <h1 className={cx(styl.title, { post })}>{title}</h1>
      {!post && <p className={styl.description} dangerouslySetInnerHTML={{ __html: description }} />}
    </div>
  )
}

Heading.propTypes = {
  post: PropTypes.bool,
  date: PropTypes.string,
  title: PropTypes.string,
  subtitle: PropTypes.string,
  description: PropTypes.string,
  words: PropTypes.number,
}

Heading.defaultProps = {
  post: false,
  date: '',
  title: '',
  subtitle: '',
  description: '',
  words: 0,
}

export default Heading
