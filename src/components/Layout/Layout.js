import PropTypes from 'prop-types'
import React from 'react'

import Banner from '../Banner'
import Footer from '../Footer'
import Heading from '../Heading'
import TopNav from '../TopNav'

import styl from './Layout.module.css'

function Layout({ children, prefix, post, site, pathname }) {
  return (
    <React.Fragment>
      <header className={styl.heading}>
        <TopNav title={site.title} social={site.social} prefix={prefix} pathname={pathname} />
        <Banner image={post.image} title={post.title || site.title} className={styl.banner} />
        <Heading
          title={post.title || site.title}
          subtitle={site.headline}
          description={site.heading}
          date={post.date}
          post={!!Object.keys(post).length}
          words={post.words}
        />
      </header>
      <main className={styl.main}>
        <div className={styl.container}>{children}</div>
      </main>
      <Footer author={site.author} />
    </React.Fragment>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  prefix: PropTypes.string,
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
    heading: PropTypes.string,
  }),
  pathname: PropTypes.string,
}

Layout.defaultProps = {
  post: {},
  prefix: '',
  site: {},
  pathname: '',
}

export default Layout
