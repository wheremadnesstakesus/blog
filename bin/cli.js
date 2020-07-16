#!/usr/bin/env node

'use strict'

const fs = require('fs')
const path = require('path')

const slugify = require('slugify')

const BASE_DIR = 'content/posts'

const TYPE_ARRAY = new Set(['keywords', 'tags'])

function add(field, value, text) {
  if (value) {
    if (TYPE_ARRAY.has(field)) {
      return `${text}
${field}:\n\t${value.map((value_) => `- ${value_}`).join('\n\t')}`
    }

    return `${text}
${field}: ${value}`
  }

  return
}

function generateMD({ title, date, ...rest }) {
  let text = `---
title: ${title}
date: ${date}`

  for (const k of Object.keys(rest)) {
    text = add(`${k}`, rest[k], text)
  }

  return `${text}
---

[Write your text here]`
}

function runCLI(input, options) {
  if (!input.length) {
    console.error('[ERROR] You must write a title for the article you want to publish')
    process.exit(1)
  }

  const title = input.join(' ')

  const slug = slugify(title, {
    lower: true,
    remove: /[^\w \-]/g,
    replacement: '-',
  })

  const date = new Date()

  const dir = `${BASE_DIR}/${date.getFullYear()}/${slug}`

  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true })
  }

  fs.writeFile(`${dir}/index.md`, generateMD({ title, date: date.toISOString(), ...options }), (error) => {
    if (error) {
      throw error
    }

    console.log('[SUCCESS] The post has been created successfully!')
  })
}

const flags = {
  draft: {
    type: 'boolean',
    alias: '-d',
  },
  featured: {
    type: 'boolean',
    alias: '-f',
    default: false,
  },
  hero: {
    type: 'string',
    alias: '-i',
  },
  keywords: {
    type: 'string',
    alias: '-k',
    isMultiple: true,
  },
  tags: {
    type: 'string',
    alias: '-t',
    isMultiple: true,
  },
  summary: {
    type: 'string',
    alias: '-s',
  },
}

// eslint-disable-next-line import/order
const cli = require('meow')({
  help: require('./help'),
  pkg: require(path.resolve(__dirname, '../package.json')),
  flags,
})

const { input, flags: options } = cli

const normalize = Object.keys(flags).reduce((accumulator, k) => {
  if (options && options[k]) {
    accumulator[k] = options[k]
  }

  return accumulator
}, {})

runCLI(input, normalize)
