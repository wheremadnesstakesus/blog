#!/usr/bin/env node

const fs = require('fs')

const slugify = require('slugify')

const BASE_DIR = 'content/posts'

const TYPE_ARRAY = ['keywords', 'tags']

function add(field, value = undefined, text) {
  if (value) {
    if (TYPE_ARRAY.includes(field)) {
      return `${text}
${field}:\n\t${value.map((val) => `- ${val}`).join('\n\t')}`
    }

    return `${text}
${field}: ${value}`
  }

  return undefined
}

function generateMD({ title, date, ...rest }) {
  let text = `
---
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
    remove: /[^a-zA-Z0-9\-_ ]/g,
    replacement: '-',
  })

  const date = new Date()

  const dir = `${BASE_DIR}/${date.getFullYear()}/${slug}`

  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true })
  }

  fs.writeFile(`${dir}/index.md`, generateMD({ title, date: date.toISOString(), ...options }), (err) => {
    if (err) {
      throw err
    }

    console.log('[SUCCESS] El post ha sido creado con éxito!')
  })
}

const flags = {
  description: {
    type: 'string',
    alias: '-s',
  },
  draft: {
    type: 'boolean',
    alias: '-d',
  },
  featured: {
    type: 'boolean',
    alias: '-f',
  },
  hero: {
    type: 'string',
    alias: '-i',
  },
  keywords: {
    type: 'array',
    alias: '-k',
  },
  tags: {
    type: 'array',
    alias: '-t',
  },
}

// eslint-disable-next-line import/order
const cli = require('meow')({
  help: require('./help'),
  pkg: require('../package.json'),
  flags,
})

const { input, flags: options } = cli

const normalize = Object.keys(flags).reduce((acc, k) => {
  if (options && options[k]) {
    acc[k] = options[k]
  }

  return acc
}, {})

runCLI(input, normalize)
