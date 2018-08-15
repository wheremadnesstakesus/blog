import { graphql, Link, useStaticQuery } from 'gatsby'
import React from 'react'

import { BLOG_PATH } from '../../constants'
import { urlGenerator } from '../../helpers'
import Featured from '../Featured'

import styl from './FeaturedList.module.css'

const getLatetestFeaturedPosts = graphql`
  {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      limit: 4
      filter: { frontmatter: { featured: { eq: true } } }
    ) {
      edges {
        node {
          ...previewInformation
        }
      }
    }
  }
`

function FeaturedList() {
  const {
    allMarkdownRemark: { edges: posts },
  } = useStaticQuery(getLatetestFeaturedPosts)

  if (!posts.length) {
    return null
  }

  return (
    <div className={styl.section}>
      <div className={styl.section__in}>
        <h2 className={styl.section__title}>Publicaciones destacadas</h2>
        <ul className={styl.list}>
          {posts.map(({ node: { id, fields, frontmatter } }) => {
            const { hero } = frontmatter

            return (
              <li key={id} className={styl.item}>
                <Link to={urlGenerator(BLOG_PATH, fields.slug)}>
                  <Featured {...frontmatter} img={hero?.childImageSharp.fluid} />
                </Link>
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}

export default React.memo(FeaturedList)
