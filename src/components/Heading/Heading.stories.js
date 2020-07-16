import { select, text, withKnobs } from '@storybook/addon-knobs'
import React from 'react'

import { Heading, Story } from 'components'

export default {
  component: Heading,
  title: 'Heading',
  decorators: [withKnobs],
  excludeStories: /.*Data$/,
}

export const knobData = {
  as: {
    label: 'As',
    options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'],
    default: 'h1',
  },
  text: {
    label: 'Text',
    content: 'Custom text',
  },
}

export const Default = () =>
  knobData.as.options.map((item) => (
    <Story key={item} title={`Heading ${item}`}>
      <Heading as={item}>Custom {item} heading</Heading>
    </Story>
  ))

export const Playground = () => (
  <Story title="Playground">
    <Heading
      as={select(knobData.as.label, knobData.as.options, knobData.as.default)}
    >
      {text(knobData.text.label, knobData.text.content)}
    </Heading>
  </Story>
)
