import PropTypes from 'prop-types'
import React from 'react'
import { Helmet } from 'react-helmet'

function SEO({ description, keywords, image, isPost, title, url }) {
  return (
    <React.Fragment>
      <Helmet>
        <html lang="en" />
        <title>{title}</title>

        <meta name="author" content="" />
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords.join()} />
        <meta name="image" content={image} />

        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={image} />
        <meta property="og:url" content={url} />
        <meta property="og:site_name" content={url} />
        {isPost ? <meta property="og:type" content="article" /> : null}

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={image} />
        <meta name="twitter:image_alt" content={description} />
      </Helmet>
    </React.Fragment>
  )
}

SEO.propTypes = {
  description: PropTypes.string,
  keywords: PropTypes.arrayOf(PropTypes.string),
  image: PropTypes.string,
  isPost: PropTypes.bool,
  title: PropTypes.string,
  url: PropTypes.string,
}

SEO.defaultProps = {
  description: '',
  keywords: [],
  image: '',
  isPost: false,
  title: '',
  url: '',
}

export default SEO
