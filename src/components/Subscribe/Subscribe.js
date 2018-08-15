import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'
import PropTypes from 'prop-types'
import React from 'react'

import Button from '../Button'
import Input from '../Input'

import styl from './Subscibe.module.css'

const TEXT = 'Suscríbete a nuestra newsletter para estar al día de todas nuestras aventuras!'

const getSubscribeBanner = graphql`
  {
    file(relativePath: { eq: "subscribe.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1500, quality: 50) {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
  }
`

function Subscribe({ withBanner }) {
  const {
    file: {
      childImageSharp: { fluid: img },
    },
    // eslint-disable-next-line react-hooks/rules-of-hooks
  } = useStaticQuery(getSubscribeBanner)

  return (
    <div className={styl.section}>
      {withBanner && (
        <div className={styl.banner}>
          <Img fluid={img} alt={TEXT} className={styl.img} loading="lazy" />
        </div>
      )}
      <div className={styl.section__in}>
        <React.Fragment>
          <h3 className={styl.section__title}>{TEXT}</h3>
          <p className={styl.text}>
            ¿Quieres saber cual será nuestras próxima aventura? ¿Quieres algunos consejos sobre como vivir en furgoneta?
            Suscríbete a nuestra lista y se de los primeros en enterarte de todas nuestras aventuras!
          </p>
          <p className={styl.nospam}>No enviamos spam!</p>
        </React.Fragment>
        <form className={styl.cta}>
          <Input name="subscribe" placeholder="tu@email.com" type="text" />
          <Button type="submit" upper ariaLabel="Suscribirme">
            Suscríbete
          </Button>
        </form>
      </div>
    </div>
  )
}

Subscribe.propTypes = {
  withBanner: PropTypes.bool,
}

Subscribe.defaultProps = {
  withBanner: false,
}

export default Subscribe
