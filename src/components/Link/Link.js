import styled from '@emotion/styled'
import { Link as GatsbyLink } from 'gatsby'
import PropTypes from 'prop-types'

export const Link = styled(GatsbyLink)`
  color: ${({ theme }) => theme.colors.primary};
`

Link.propTypes = {
  to: PropTypes.string.isRequired,
}
