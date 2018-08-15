import Img from 'gatsby-image'
import PropTypes from 'prop-types'
import React from 'react'

import Icon from '../Icon'

import styl from './Featured.module.css'

function Featured({ title, img }) {
  return (
    <article className={styl.featured}>
      <header>
        {img && <Img fluid={img} alt={title} className={styl.img} loading="lazy" />}
        <div className={styl.banner}>
          <h3 className={styl.title}>{title}</h3>
          <Icon icon="left" className={styl.icon} />
        </div>
      </header>
    </article>
  )
}

Featured.propTypes = {
  title: PropTypes.string,
  img: PropTypes.shape({}),
}

export default Featured
