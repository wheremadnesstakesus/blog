import PropTypes from 'prop-types'
import React from 'react'

import Banner from '../Banner'
import Footer from '../Footer'
import Heading from '../Heading'
import TopNav from '../TopNav'

import styl from './Layout.module.css'

function Layout({ children, post, site }) {
  return (
    <React.Fragment>
      <header className={styl.heading}>
        <TopNav title={site.title} social={site.social} />
        <Banner image={post.image} title={post.title || site.title} className={styl.banner} />
        <Heading title={post.title || site.title} subtitle={site.headline} startDate={site.startDate} />
      </header>
      <main>{children}</main>
      {/* <aside className={styl.aside}>
        <div className={styl.wrapper}>
          <Social social={site.social} />
          <Search />
        </div>
      </aside>
      <main>{children}</main>
      {withSubscription && (
        <div className={cx(styl.section__in, styl.subscribe)}>
          <Subscribe />
        </div>
      )}
      <div className={cx(styl.section, styl.instagram)}>
        <Instagram />
      </div> */}
      <Footer author={site.author} />
    </React.Fragment>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  post: PropTypes.shape({
    date: PropTypes.string,
    description: PropTypes.string,
    image: PropTypes.object,
    path: PropTypes.string,
    reading: PropTypes.string,
    tags: PropTypes.arrayOf(PropTypes.string),
    title: PropTypes.string,
    words: PropTypes.number,
  }),
  site: PropTypes.shape({
    author: PropTypes.string,
    headline: PropTypes.string,
    title: PropTypes.string,
    social: PropTypes.shape({
      name: PropTypes.string,
      url: PropTypes.string,
    }),
    startDate: PropTypes.string,
  }),
}

Layout.defaultProps = {
  post: {},
  site: {},
}

export default Layout
