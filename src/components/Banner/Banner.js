import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'
import PropTypes from 'prop-types'
import React from 'react'

import styl from './Banner.module.css'

const getSiteBanner = graphql`
  {
    file(relativePath: { eq: "banner.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1500, quality: 50) {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
  }
`

function Banner({ className, image, title }) {
  let img = image

  if (!Object.keys(image).length) {
    const {
      file: {
        childImageSharp: { fluid },
      },
      // eslint-disable-next-line react-hooks/rules-of-hooks
    } = useStaticQuery(getSiteBanner)

    img = fluid
  }

  return (
    <div className={className}>
      <Img fluid={img} alt={title} className={styl.banner} loading="lazy" />
    </div>
  )
}

Banner.propTypes = {
  className: PropTypes.string,
  image: PropTypes.object,
  title: PropTypes.string,
}

Banner.defaultProps = {
  className: '',
  image: {},
  title: '',
}

export default Banner
