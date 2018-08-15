import PropTypes from 'prop-types'
import React from 'react'

import { ReactComponent as FBIcon } from './icons/facebook.svg'
import { ReactComponent as InstagramIcon } from './icons/instagram.svg'
import { ReactComponent as TwitterIcon } from './icons/twitter.svg'

import styl from './Social.module.css'

const LIST = {
  twitter: {
    title: 'Twitter',
    icon: TwitterIcon,
  },
  facebook: {
    title: 'Facebook',
    icon: FBIcon,
  },
  instagram: {
    title: 'Instagram',
    icon: InstagramIcon,
  },
}

function Social({ social }) {
  const networks = Object.keys(social)

  if (!networks.length) {
    return null
  }

  return (
    <ul className={styl.social}>
      {networks.map((n) => {
        const Icon = LIST[n].icon

        return (
          <li key={n} className={styl.network}>
            <a
              href={social[n].url}
              alt={`${LIST[n].title}: ${social[n].name}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon className={styl.icon} />
            </a>
          </li>
        )
      })}
    </ul>
  )
}

Social.propTypes = {
  social: PropTypes.shape({
    name: PropTypes.string,
    url: PropTypes.string,
  }),
}

Social.defaultProps = {
  social: {},
}

export default Social
