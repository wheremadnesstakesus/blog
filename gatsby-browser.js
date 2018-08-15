import React from 'react'
import ReactDOM from 'react-dom'

import 'typeface-montserrat'
import 'typeface-roboto'

import { isDevelopment } from './src/helpers'

export const onInitialClientRender = async () => {
  if (isDevelopment) {
    const { default: axe } = await import('react-axe')
    axe(React, ReactDOM, 1000)
  }
}
