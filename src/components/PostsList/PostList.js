import PropTypes from 'prop-types'
import React from 'react'

import PostCard from '../PostCard'

import styl from './PostList.module.css'

function PostList({ posts }) {
  if (!posts.length) {
    return null
  }

  return (
    <ul className={styl.postList}>
      {posts.map(({ node: { id, excerpt, fields, frontmatter } }) => {
        const { hero, tags, title } = frontmatter

        return (
          <li key={id} className={styl.post}>
            <PostCard
              content={excerpt}
              image={hero?.childImageSharp.fluid}
              slug={fields.slug}
              tags={tags}
              title={title}
            />
          </li>
        )
      })}
    </ul>
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
}

PostList.defaultProps = {
  position: 'first',
  posts: [],
}

export default PostList
