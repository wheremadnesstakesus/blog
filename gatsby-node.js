const path = require(`path`)
// const { createFilePath } = require(`gatsby-source-filesystem`)

const { BLOG_PATH } = require('./src/constants')

// More: https://www.gatsbyjs.org/docs/node-apis/#createPages
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const blogPost = path.resolve(`./src/templates/PagePost.js`)
  try {
    const result = await graphql(
      `
        {
          publishedPosts: allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }, limit: 1000) {
            edges {
              node {
                id
                fields {
                  slug
                  langKey
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
      const previous = index === edges.length - 1 ? null : edges[index + 1].node
      const next = index === 0 ? null : edges[index - 1].node

      let url = `/${post.node.fields.langKey}${BLOG_PATH}${post.node.fields.slug}`
      if (post.node.fields.langKey === 'es') {
        url = `${BLOG_PATH}${post.node.fields.slug}`
      }

      createPage({
        path: url,
        component: blogPost,
        context: {
          slug: post.node.fields.slug,
          previous,
          next,
        },
      })
    })

    return null
  } catch (e) {
    console.error(e)
    throw e
  }
}

// More: https://www.gatsbyjs.org/docs/node-apis/#onCreateNode
exports.onCreateNode = ({ node, actions }) => {
  const { createNodeField } = actions

  if (node.internal.type === `MarkdownRemark`) {
    const url = node.fileAbsolutePath
      .replace(__dirname, '')
      .replace('/content/posts', '')
      .replace('/index', '')
      .split('.')

    let route = `/${url[1]}${url[0]}`
    if (url[1] === 'es') {
      route = url[0]
    }

    createNodeField({
      name: 'slug',
      node,
      value: route,
    })
    createNodeField({
      name: 'langKey',
      node,
      value: url[1],
    })
  }
}
