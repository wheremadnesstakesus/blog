import React from 'react'
import Head from 'next/head'

import '../styles/globals.css'

function MyApp ({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta charSet='utf-8' />
        <meta name='date' content={(new Date()).toISOString()} />

        <meta
          name='viewport'
          content='width=device-width, initial-scale=1'
        />
        <meta httpEquiv='x-ua-compatible' content='ie=edge' />
        <meta name='robots' content='index,follow' />
        <meta name='googlebot' content='index,follow' />
      </Head>

      <div>
        <Component {...pageProps} />
      </div>
    </>
  )
}

export default MyApp
