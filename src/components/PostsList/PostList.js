import classnames from 'classnames/bind'
import PropTypes from 'prop-types'
import React from 'react'

import PostCard from '../PostCard'

import styl from './PostList.module.css'

const cx = classnames.bind(styl)

const POSTS_WITHOUT_IMAGE = { 6: true, 7: true }
const POSITION = {
  first: 'postList__first',
  second: 'postList__second',
}

const renderPosts = (posts) =>
  posts.map(({ node: { id, excerpt, fields, frontmatter } }, index) => {
    const {
      date,
      hero: {
        childImageSharp: { fluid },
      },
      tags,
      title,
    } = frontmatter

    return (
      <li key={id} className={styl.post}>
        {POSTS_WITHOUT_IMAGE[index] ? (
          <PostCard content={excerpt} createdAt={date} slug={fields.slug} tags={tags} title={title} />
        ) : (
          <PostCard content={excerpt} createdAt={date} image={fluid} slug={fields.slug} tags={tags} title={title} />
        )}
      </li>
    )
  })

function PostList({ posts, position }) {
  if (!posts.length) {
    return null
  }

  return <ul className={cx(styl.postList, { [POSITION[position]]: styl[POSITION[position]] })}>{renderPosts(posts)}</ul>
}

PostList.propTypes = {
  position: PropTypes.oneOf(Object.keys(POSITION)),
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
