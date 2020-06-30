import { useStaticQuery, graphql } from 'gatsby'

export const useSiteInformation = () => {
  const { site } = useStaticQuery(graphql`
    {
      site {
        ...siteInformation
      }
    }
  `)

  return site
}
