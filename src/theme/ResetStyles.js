import { Global, css } from '@emotion/core'
import normalize from 'normalize.css'
import React from 'react'

function ResetStyles() {
  return (
    <Global
      styles={css`
        ${normalize};
      `}
    />
  )
}

export { ResetStyles }
