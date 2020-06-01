import classnames from 'classnames/bind'
import PropTypes from 'prop-types'
import React from 'react'

import styl from './Heading.module.css'

const cx = classnames.bind(styl)

function treatAsUTC(date) {
  let result = new Date()
  if (date) {
    result = new Date(date)
  }

  result.setMinutes(result.getMinutes() - result.getTimezoneOffset())
  return result
}

function daysBetween(startDate) {
  const millisecondsPerDay = 24 * 60 * 60 * 1000
  return Math.floor((treatAsUTC() - treatAsUTC(startDate)) / millisecondsPerDay)
}

function Heading({ post, title, subtitle, startDate }) {
  return (
    <div className={styl.heading}>
      {!post && <p className={styl.subtitle}>{subtitle}</p>}
      <h1 className={cx(styl.title, { post })}>{title}</h1>
      {!post && (
        <p className={styl.description}>
          Somos Federica, José y Paco, y llevamos{' '}
          <b>{daysBetween(startDate)} días viviendo y viajando en nuestra furgoneta</b>, a la que llamamos, la
          Flowerneta y aquí te iremos contando todas nuestras aventuras, pensamientos y demás locuras que se nos vayan
          ocurriend. Te unes a nuestra locura!
        </p>
      )}
    </div>
  )
}

Heading.propTypes = {
  post: PropTypes.bool,
  date: PropTypes.string,
  title: PropTypes.string,
  subtitle: PropTypes.string,
  startDate: PropTypes.string,
  words: PropTypes.number,
}

Heading.defaultProps = {
  post: false,
  date: '',
  title: '',
  subtitle: '',
  startDate: '',
  words: 0,
}

export default Heading
