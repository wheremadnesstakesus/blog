import { useStaticQuery, graphql } from 'gatsby'

const useLatestPosts = () => {
  const data = useStaticQuery(graphql`
    {
      allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }, limit: 10) {
        edges {
          node {
            ...previewInformation
          }
        }
      }
    }
  `)

  return data.allMarkdownRemark
}

export default useLatestPosts
