import PropTypes from 'prop-types'
import React from 'react'

import styl from './Post.module.css'

function Post({ post }) {
  return <article className={styl.post} dangerouslySetInnerHTML={{ __html: post }} />
}

Post.propTypes = {
  post: PropTypes.string.isRequired,
}

export default Post
