import PropTypes from 'prop-types'
import React from 'react'

import PostCard from '../PostCard'

import styl from './PostList.module.css'

function PostList({ posts, prefix }) {
  if (!posts.length) {
    return null
  }

  return (
    <React.Fragment>
      <h2 className={styl.section__title}>Últimas publicaciones</h2>
      <ul className={styl.postList}>
        {posts.map(({ node: { id, excerpt, fields, frontmatter } }) => {
          const { hero, tags, title } = frontmatter

          return (
            <li key={id} className={styl.post}>
              <PostCard
                content={excerpt}
                image={hero?.childImageSharp.fluid}
                prefix={prefix}
                slug={fields.slug}
                tags={tags}
                title={title}
              />
            </li>
          )
        })}
      </ul>
    </React.Fragment>
  )
}

PostList.propTypes = {
  posts: PropTypes.arrayOf(
    PropTypes.shape({
      node: PropTypes.shape({
        id: PropTypes.string,
      }),
    }),
  ),
  prefix: PropTypes.string,
}

PostList.defaultProps = {
  posts: [],
  prefix: '',
}

export default PostList
