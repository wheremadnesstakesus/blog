import { Link } from 'gatsby'
import Img from 'gatsby-image'
import PropTypes from 'prop-types'
import React from 'react'

import { BLOG_PATH } from '../../constants'
import { urlGenerator } from '../../helpers'

import styl from './PostCard.module.css'

function PostCard({ content, createdAt, image, slug, tags, title }) {
  return (
    <Link to={urlGenerator(BLOG_PATH, slug)} className={styl.postCard}>
      {Object.keys(image).length ? <Img fluid={image} alt={title} className={styl.img} loading="lazy" /> : null}
      <div className={styl.content}>
        <h3 className={styl.title}>{title}</h3>
        <small>{createdAt}</small>
        <p>{content}</p>
        <ul>
          {tags.map((t) => (
            <li key={t}>{t}</li>
          ))}
        </ul>
      </div>
    </Link>
  )
}

PostCard.propTypes = {
  content: PropTypes.string.isRequired,
  createdAt: PropTypes.string,
  image: PropTypes.object,
  slug: PropTypes.string.isRequired,
  tags: PropTypes.arrayOf(PropTypes.string),
  title: PropTypes.string.isRequired,
}

PostCard.defaultProps = {
  createdAt: '',
  image: {},
  tags: [],
}

export default PostCard
