import { graphql } from 'gatsby'

export const siteInformation = graphql`
  fragment siteInformation on Site {
    siteMetadata {
      title
      headline
      description
      author
      url
      keywords
      startDate
      social {
        instagram {
          name
          url
        }
        twitter {
          name
          url
        }
        facebook {
          name
          url
        }
      }
    }
  }
`

export const previewInformation = graphql`
  fragment previewInformation on MarkdownRemark {
    id
    excerpt(pruneLength: 150, format: PLAIN)
    fields {
      slug
    }
    frontmatter {
      summary
      hero {
        childImageSharp {
          fluid(maxWidth: 600, quality: 50) {
            ...GatsbyImageSharpFluid_withWebp_tracedSVG
          }
        }
      }
      keywords
      tags
      title
    }
    wordCount {
      words
    }
  }
`

export const postInformation = graphql`
  fragment postInformation on MarkdownRemark {
    id
    excerpt(pruneLength: 150, format: PLAIN)
    fields {
      slug
      readingTime {
        text
      }
    }
    frontmatter {
      summary
      hero {
        childImageSharp {
          fluid(maxWidth: 600, quality: 50) {
            ...GatsbyImageSharpFluid_withWebp_tracedSVG
          }
        }
      }
      keywords
      tags
      title
    }
    wordCount {
      words
    }
    html
  }
`
