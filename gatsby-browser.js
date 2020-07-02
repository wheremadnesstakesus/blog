import { ThemeProvider } from 'emotion-theming'
import React from 'react'
import ReactDOM from 'react-dom'

import 'typeface-montserrat'
import 'typeface-roboto'

import { theme } from 'theme'

import { isDevelopment } from './src/helpers'

export const onInitialClientRender = async () => {
  if (isDevelopment) {
    const { default: axe } = await import('react-axe')
    axe(React, ReactDOM, 1000)
  }
}

// eslint-disable-next-line react/prop-types
export const wrapRootElement = ({ element }) => <ThemeProvider theme={theme}>{element}</ThemeProvider>
