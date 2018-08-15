import PropTypes from 'prop-types'
import React from 'react'

import FeaturedList from '../../components/FeaturedList'
import Layout from '../../components/Layout'
import PostList from '../../components/PostsList'
import SEO from '../../components/SEO'
import Subscribe from '../../components/Subscribe'

import useLatestPosts from '../../hooks/useLatestPosts'
import useSiteInformation from '../../hooks/useSiteInformation'

import styl from './Home.module.css'

const FIRST_POSTS_TO_SHOW = 3

const postsList = (posts, position = 'first') => (
  <div className={styl.section}>
    <div className={styl.section__in}>
      {position === 'first' && <h2 className={styl.section__title}>Últimas publicaciones</h2>}
      <PostList posts={posts} position={position} />
    </div>
  </div>
)

function Home() {
  const { siteMetadata: site } = useSiteInformation()
  const { edges: posts } = useLatestPosts()

  const splitted = [posts.slice(0, FIRST_POSTS_TO_SHOW), posts.slice(FIRST_POSTS_TO_SHOW)]

  return (
    <Layout site={site}>
      <SEO description={site.description} keywords={site.keywords} title={site.title} url={site.url} />
      <FeaturedList />
      {postsList(splitted[0])}
      <Subscribe withBanner />
      {postsList(splitted[1], 'second')}
    </Layout>
  )
}

Home.propTypes = {
  path: PropTypes.string.isRequired,
}

export default Home
