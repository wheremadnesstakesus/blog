import PropTypes from 'prop-types'
import React from 'react'

import Layout from '../../components/Layout'
import PostList from '../../components/PostsList'
import SEO from '../../components/SEO'

import useLatestPosts from '../../hooks/useLatestPosts'
import useSiteInformation from '../../hooks/useSiteInformation'

import styl from './Home.module.css'

function Home() {
  const { siteMetadata: site } = useSiteInformation()
  const { edges: posts } = useLatestPosts()

  return (
    <Layout site={site}>
      <SEO description={site.description} keywords={site.keywords} title={site.title} url={site.siteUrl} />
      <h2 className={styl.section__title}>Últimas publicaciones</h2>
      <PostList posts={posts} />
    </Layout>
  )
}

Home.propTypes = {
  path: PropTypes.string.isRequired,
}

export default Home
