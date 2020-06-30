import path from 'path'

import { createFilePath } from 'gatsby-source-filesystem'

import { BLOG_PATH } from './src/constants'

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      modules: [path.resolve(__dirname, 'src'), 'node_modules'],
    },
  })
}

// More: https://www.gatsbyjs.org/docs/node-apis/#createPages
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const blogPost = path.resolve(`./src/templates/PagePost.js`)
  try {
    const result = await graphql(
      `
        {
          publishedPosts: allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
            edges {
              node {
                id
                fields {
                  slug
                }
                frontmatter {
                  title
                }
              }
            }
          }
        }
      `,
    )

    const { edges } = result.data.publishedPosts

    edges.forEach((post, index) => {
      // eslint-disable-next-line unicorn/no-null
      const previous = index === edges.length - 1 ? null : edges[index + 1].node
      // eslint-disable-next-line unicorn/no-null
      const next = index === 0 ? null : edges[index - 1].node

      createPage({
        path: `${BLOG_PATH}${post.node.fields.slug}`,
        component: blogPost,
        context: {
          slug: post.node.fields.slug,
          previous,
          next,
        },
      })
    })

    return
  } catch (error) {
    console.error(error)
    throw error
  }
}

// More: https://www.gatsbyjs.org/docs/node-apis/#onCreateNode
exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({
      node,
      getNode,
      trailingSlash: false,
    })

    createNodeField({
      name: 'slug',
      node,
      value,
    })
  }
}
