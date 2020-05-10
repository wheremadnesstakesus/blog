import { graphql } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'

import Layout from '../components/Layout'
import SEO from '../components/SEO'

import { urlGenerator } from '../helpers'
import useSiteInformation from '../hooks/useSiteInformation'

function Post({ path, data }) {
  const { markdownRemark: post } = data

  const { siteMetadata: site } = useSiteInformation()

  const { author, headline, title: siteTitle, url, social } = site
  const { description, hero: image, keywords, title } = post.frontmatter

  return (
    <Layout
      post={{
        date: post.frontmatter.date,
        description,
        path,
        reading: post.fields.readingTime.text,
        tags: post.frontmatter.tags,
        title,
        words: post.wordCount.words,
        image: image?.childImageSharp.fluid,
      }}
      site={{ author, headline, title: siteTitle, social }}
      withSubscription
    >
      <SEO description={description} isPost keywords={keywords} title={title} url={urlGenerator(url, path)} />
      <h1>{post.frontmatter.title}</h1>
      <p>{post.frontmatter.date}</p>
      <section dangerouslySetInnerHTML={{ __html: post.html }} />
    </Layout>
  )
}

Post.propTypes = {
  path: PropTypes.string.isRequired,
  data: PropTypes.object,
}

export default Post

export const BlogPost = graphql`
  query BlogPostBySlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug }, readingTime: {} }) {
      ...postInformation
    }
  }
`
