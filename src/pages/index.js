import 'normalize.css'

import React from 'react'

import { Layout } from 'components'
import { useSiteInformation } from 'hooks'

function Home() {
  const { social, title } = useSiteInformation()

  return <Layout></Layout>
}

Home.propTypes = {}

Home.defaultProps = {}

export default Home
