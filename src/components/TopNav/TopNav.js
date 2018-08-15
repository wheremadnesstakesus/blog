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

function Header({ title, social }) {
  const elem = React.useRef(null)
  const scroll = scrollEvent(elem)

  React.useEffect(() => {
    window.addEventListener('scroll', scroll)

    return () => window.removeEventListener('scroll', scroll)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className={styl.top} ref={elem}>
      <div className={styl.container}>
        <Social social={social} />
        <h1 className={styl.title}>
          <Link to="/" className={styl.brand}>
            {title}
          </Link>
        </h1>
        {/* <Button transparent className={styl.menuAction} ariaLabel="Menu">
          <Icon icon="menu" className={styl.menu} />
        </Button> */}
      </div>
    </div>
  )
}

Header.propTypes = {
  title: PropTypes.string,
  social: PropTypes.shape({
    name: PropTypes.string,
    url: PropTypes.string,
  }),
}

Header.defaultProps = {
  title: '',
  social: {},
}

export default Header
