import { graphql } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'

import Layout from '../components/Layout'
import Post from '../components/Post'
import SEO from '../components/SEO'

import { urlGenerator } from '../helpers'
import useSiteInformation from '../hooks/useSiteInformation'

import es from '../i18n/es'
import it from '../i18n/it'

function PagePost(props) {
  console.log('[DEBUG]: PagePost -> props', props)
  const { path, data, location } = props
  const { markdownRemark: post } = data

  const { siteMetadata: site } = useSiteInformation()

  const { author, headline, title: siteTitle, siteUrl, social } = site
  const { summary, hero: image, keywords, title } = post.frontmatter

  let home = `/${post.fields.langKey}`
  let message = {
    builtWith: it.builtWith,
    copyright: it.copyright,
  }
  if (post.fields.langKey === 'es') {
    message = {
      builtWith: es.builtWith,
      copyright: es.copyright,
    }
    home = '/'
  }

  return (
    <Layout
      pathname={location.pathname}
      prefix={home}
      post={{
        date: post.frontmatter.date,
        summary,
        path,
        tags: post.frontmatter.tags,
        title,
        words: post.wordCount.words,
        image: image?.childImageSharp.fluid,
      }}
      site={{ author, headline, title: siteTitle, social, ...message }}
    >
      <SEO description={summary} isPost keywords={keywords} title={title} url={urlGenerator(siteUrl, path)} />
      <p>{post.frontmatter.date}</p>
      <Post post={post.html} />
    </Layout>
  )
}

PagePost.propTypes = {
  path: PropTypes.string.isRequired,
  data: PropTypes.object,
  location: PropTypes.object,
}

export default PagePost

export const BlogPost = graphql`
  query BlogPostBySlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      ...postInformation
    }
  }
`
