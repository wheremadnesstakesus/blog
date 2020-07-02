import { useStaticQuery, graphql } from 'gatsby'

export const useSiteInformation = () => {
  const {
    site: { siteMetadata },
  } = useStaticQuery(graphql`
    {
      site {
        ...siteInformation
      }
    }
  `)

  return siteMetadata
}
