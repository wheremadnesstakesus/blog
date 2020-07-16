import styled from '@emotion/styled'
import PropTypes from 'prop-types'

const Heading = styled.div``

Heading.propTypes = {
  children: PropTypes.node.isRequired,
  as: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6']),
}

Heading.defaultProps = {
  as: 'h3',
}

export { Heading }
