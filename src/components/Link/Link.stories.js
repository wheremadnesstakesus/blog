import { action } from '@storybook/addon-actions'
import { text, withKnobs } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/react'
import React from 'react'

import { Link, Story } from 'components'

export default {
  component: Link,
  title: 'Link',
  decorators: [withKnobs],
  excludeStories: /.*Data$/,
}

export const knobData = {
  to: {
    label: 'To',
    content: '/',
  },
  text: {
    label: 'Text',
    content: 'Custom text',
  },
}

export const actionsData = {
  onClick: action('Link Clicked'),
}

export const Default = () => (
  <Story title="Link" {...actionsData}>
    <Link to="/">Custom Link</Link>
  </Story>
)

export const Playground = () => (
  <Story title="Playground">
    <Link to={text(knobData.to.label, knobData.to.content)} {...actionsData}>
      {text(knobData.text.label, knobData.text.content)}
    </Link>

  </Story>
)
