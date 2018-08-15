import PropTypes from 'prop-types'
import React from 'react'

import styl from './Heading.module.css'

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

function Heading({ title, subtitle, startDate }) {
  return (
    <div className={styl.heading}>
      <p className={styl.subtitle}>{subtitle}</p>
      <h1 className={styl.title}>{title}</h1>
      <p className={styl.description}>
        Somos Federica, José y Paco, y llevamos{' '}
        <b>{daysBetween(startDate)} días viviendo y viajando en nuestra furgoneta</b>, a la que llamamos, la Flowerneta
        y aquí te iremos contando todas nuestras aventuras, pensamientos y demás locuras que se nos vayan ocurriend. Te
        unes a nuestra locura!
      </p>
    </div>
  )
}

Heading.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  startDate: PropTypes.string,
}

Heading.defaultProps = {
  title: '',
  subtitle: '',
  startDate: '',
}

export default Heading
