const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

const { BLOG_PATH } = require('./src/constants')

console.log(process.env.GATSBY_GRAPHQL_IDE)
// More: https://www.gatsbyjs.org/docs/node-apis/#createPages
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const blogPost = path.resolve(`./src/templates/BlogPost.js`)
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

    return null
  } catch (e) {
    console.error(e)
    throw e
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
