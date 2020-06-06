import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'

import Social from '../Social'

import styl from './TopNav.module.css'

const scrollEvent = (elem) => () => {
  const cl = elem.current.classList

  const reset = document.body.getBoundingClientRect().top >= -100

  if (reset) {
    return cl.remove(styl.scrolled)
  }

  if (!cl.contains(styl.scrolled)) {
    return cl.add(styl.scrolled)
  }

  return false
}

function Header({ prefix, title, social, pathname }) {
  const elem = React.useRef(null)
  const scroll = scrollEvent(elem)

  const [url, setUrl] = React.useState({ es: '', it: '' })

  React.useEffect(() => {
    window.addEventListener('scroll', scroll)

    return () => window.removeEventListener('scroll', scroll)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  React.useEffect(() => {
    if (pathname.includes('/it/')) {
      setUrl({
        es: pathname.replace('/it', ''),
        it: pathname,
      })

      return
    }

    setUrl({
      es: pathname,
      it: `/it${pathname}`,
    })
  }, [pathname])

  return (
    <div className={styl.top} ref={elem}>
      <div className={styl.container}>
        <Social social={social} />
        <h1 className={styl.title}>
          <Link to={prefix} className={styl.brand}>
            {title}
          </Link>
        </h1>
        <ul className={styl.langs}>
          <li>
            <Link to={url.es} hrefLang="es" className={styl.lang}>
              ES
            </Link>
          </li>
          <li>
            <Link to={url.it} hrefLang="it" className={styl.lang}>
              IT
            </Link>
          </li>
        </ul>
        {/* <Button transparent className={styl.menuAction} ariaLabel="Menu">
          <Icon icon="menu" className={styl.menu} />
        </Button> */}
      </div>
    </div>
  )
}

Header.propTypes = {
  prefix: PropTypes.string,
  title: PropTypes.string,
  social: PropTypes.shape({
    name: PropTypes.string,
    url: PropTypes.string,
  }),
  pathname: PropTypes.string,
}

Header.defaultProps = {
  prefix: '',
  title: '',
  pathname: '',
  social: {},
}

export default Header
