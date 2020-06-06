import { Link } from 'gatsby'
import Img from 'gatsby-image'
import PropTypes from 'prop-types'
import React from 'react'

import styl from './PostCard.module.css'

function PostCard({ content, image, slug, title }) {
  return (
    <Link to={slug} className={styl.postCard}>
      {Object.keys(image).length ? <Img fluid={image} alt={title} className={styl.img} loading="lazy" /> : null}
      <div className={styl.content}>
        <h3 className={styl.title}>{title}</h3>
        <p className={styl.summary}>{content}</p>
      </div>
    </Link>
  )
}

PostCard.propTypes = {
  content: PropTypes.string.isRequired,
  image: PropTypes.object,
  slug: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
}

PostCard.defaultProps = {
  createdAt: '',
  image: {},
}

export default PostCard
