import PropTypes from 'prop-types'
import React from 'react'
import { Helmet } from 'react-helmet'

function SEO({ description, keywords, image, isPost, title, url }) {
  return (
    <React.Fragment>
      <Helmet>
        <html lang="en" />
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords.join()} />
        <meta name="image" content={image} />

        {/* OpenGraph tags */}
        <meta property="og:url" content={url} />
        {isPost ? <meta property="og:type" content="article" /> : null}
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={image} />
        {/* <meta property="fb:app_id" content={seo.social.fbAppID} /> */}

        {/* Twitter Card tags */}
        <meta name="twitter:card" content="summary_large_image" />
        {/* <meta name="twitter:creator" content={seo.social.twitter} /> */}
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={image} />

        <script defer type="text/javascript">
          {`(function(p, a, n, d, o, b) {
            o = n.createElement('script'); o.type = 'text/javascript'; o.async = true; o.src = 'https://tag.rightmessage.com/'+p+'.js';
            b = n.getElementsByTagName('script')[0]; b.parentNode.insertBefore(o, b);
            d = function(h, u, i) { var o = n.createElement('style'); o.id = 'rmcloak'+i; o.type = 'text/css';
                o.appendChild(n.createTextNode('.rmcloak'+h+'{visibility:hidden}.rmcloak'+u+'{display:none}'));
                b.parentNode.insertBefore(o, b); return o; }; o = d('', '-hidden', ''); d('-stay-invisible', '-stay-hidden', '-stay');
            setTimeout(function() { o.parentNode && o.parentNode.removeChild(o); }, a);
        })('UA-ANALITYCS', 2500, document);
      `}
        </script>
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
