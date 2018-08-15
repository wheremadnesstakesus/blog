import { graphql, useStaticQuery } from 'gatsby'

const useInstagram = () => {
  const {
    allInstaNode: { nodes: instaPhotos },
  } = useStaticQuery(graphql`
    {
      allInstaNode(limit: 12, sort: { order: DESC, fields: timestamp }) {
        nodes {
          id
          caption
          username
          localFile {
            childImageSharp {
              fluid(maxWidth: 350, maxHeight: 350) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
      }
    }
  `)

  return instaPhotos.map((photo) => ({
    ...photo.localFile.childImageSharp,
    id: photo.id,
    caption: photo.caption,
    username: photo.username,
  }))
}

export default useInstagram
