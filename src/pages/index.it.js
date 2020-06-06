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

function Home({ data, pageContext }) {
  const { siteMetadata: site } = useSiteInformation()
  // const { edges: posts } = useLatestPosts()

  return (
    <Layout prefix={pageContext.slug} site={{ ...site, ...message, heading: message.heading(site.startDate) }}>
      <SEO description={site.description} keywords={site.keywords} title={site.title} url={site.siteUrl} />
      <PostList prefix={pageContext.slug} posts={data.allMarkdownRemark.edges} />
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
}

Home.defaultProps = {
  data: {},
  pageContext: {},
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
