import 'normalize.css'

import { graphql } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'

import Layout from '../components/Layout'
import PostList from '../components/PostsList'
import SEO from '../components/SEO'

// import useLatestPosts from '../hooks/useLatestPosts'
import useSiteInformation from '../hooks/useSiteInformation'

import message from '../i18n/it'

import '../assets/styles/global.css'

function Home({ data, pageContext, location }) {
  const { siteMetadata: site } = useSiteInformation()
  // const { edges: posts } = useLatestPosts()

  return (
    <Layout
      pathname={location.pathname}
      prefix={pageContext.slug}
      site={{ ...site, ...message, heading: message.heading(site.startDate) }}
    >
      <SEO description={site.description} keywords={site.keywords} title={site.title} url={site.siteUrl} />
      <PostList posts={data.allMarkdownRemark.edges} title={message.latestsPosts} />
    </Layout>
  )
}

Home.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.object,
  }),
  pageContext: PropTypes.shape({
    slug: PropTypes.string,
  }),
  location: PropTypes.object,
}

Home.defaultProps = {
  data: {},
  pageContext: {},
  location: {},
}

export default Home

export const query = graphql`
  {
    allMarkdownRemark(
      filter: { frontmatter: { draft: { eq: false } }, fields: { langKey: { eq: "it" } } }
      sort: { fields: [frontmatter___date], order: DESC }
      limit: 10
    ) {
      edges {
        node {
          ...previewInformation
        }
      }
    }
  }
`
