import PropTypes from 'prop-types'
import React from 'react'

import PostCard from '../PostCard'

import styl from './PostList.module.css'

function PostList({ posts, title }) {
  console.log('[DEBUG]: PostList -> posts', posts)
  if (!posts.length) {
    return null
  }

  return (
    <React.Fragment>
      <h2 className={styl.section__title}>{title}</h2>
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
  title: PropTypes.string,
}

PostList.defaultProps = {
  posts: [],
  title: '',
}

export default PostList
