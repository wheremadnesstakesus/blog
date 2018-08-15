import { graphql } from 'gatsby'

export const siteInformation = graphql`
  fragment siteInformation on Site {
    siteMetadata {
      title
      url
      startDate
      headline
      description
      keywords
      author
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
      date(formatString: "YYYY-MM-DD hh:mm")
      description
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
