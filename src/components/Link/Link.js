import styled from '@emotion/styled'
import { Link as GatsbyLink } from 'gatsby'
import PropTypes from 'prop-types'

const Link = styled(GatsbyLink)`
  color: ${({ theme, type }) => theme.colors[type]};
`

Link.propTypes = {
  children: PropTypes.node.isRequired,
  to: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['primary', 'seconday']),
  disabled: PropTypes.bool,
}

Link.defaultProps = {
  type: 'primary',
  disabled: false,
}

export { Link }
