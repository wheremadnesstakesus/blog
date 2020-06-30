import { graphql } from 'gatsby'

export const siteInformation = graphql`
  fragment siteInformation on Site {
    siteMetadata {
      title
      author
      siteUrl
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
