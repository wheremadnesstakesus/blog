import 'normalize.css'

import React from 'react'

import { Layout } from 'components'
import { useSiteInformation } from 'hooks'

function Home() {
  const siteMetadata = useSiteInformation()
  console.log('[DEBUG]: Home -> siteMetadata', siteMetadata)
  return <Layout>Home</Layout>
}

Home.propTypes = {}

Home.defaultProps = {}

export default Home
