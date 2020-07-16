import { withA11y } from '@storybook/addon-a11y'
import { action } from '@storybook/addon-actions'
import { select, text, withKnobs } from '@storybook/addon-knobs'
import React from 'react'

import { Button, Story } from 'components'

export default {
  component: Button,
  title: 'Button',
  decorators: [withKnobs, withA11y],
  excludeStories: /.*Data$/,
}

export const actionsData = {
  onClick: action('Button Clicked'),
}

export const knobData = {
  appearance: {
    label: 'Type',
    options: ['primary', 'secondary', 'minimal'],
    default: 'primary',
  },
  text: {
    label: 'Text',
    content: 'Custom text',
  },
}

export const Component = () => (
  <React.Fragment>
    <Story title="Primary">
      <Button appearance="primary" {...actionsData}>
        Button primary
      </Button>
    </Story>
    <Story title="Secondary">
      <Button appearance="secondary" {...actionsData}>
        Button secondary
      </Button>
    </Story>
    <Story title="Minimal">
      <Button appearance="minimal" {...actionsData}>
        Button minimal
      </Button>
    </Story>
  </React.Fragment>
)

export const Playground = () => (
  <Story title="Playground">
    <Button
      appearance={select(
        knobData.variant.label,
        knobData.variant.options,
        knobData.variant.default,
      )}
      {...actionsData}
    >
      {text(knobData.text.label, knobData.text.content)}
    </Button>
  </Story>
)
