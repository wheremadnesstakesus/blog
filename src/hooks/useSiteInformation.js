import { useStaticQuery, graphql } from 'gatsby'

const useSiteInformation = () => {
  const data = useStaticQuery(graphql`
    {
      site {
        ...siteInformation
      }
    }
  `)

  return data.site
}

export default useSiteInformation
