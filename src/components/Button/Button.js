import { css } from '@emotion/core'
import styled from '@emotion/styled'
import PropTypes from 'prop-types'

const primary = ({ appearance, theme }) =>
  appearance === 'primary' &&
  css`
    background-color: ${theme.colors.primary};
    color: white;
  `

const secondary = ({ appearance, theme }) =>
  appearance === 'secondary' &&
  css`
    background-color: ${theme.colors.secondary};
    color: red;
  `

const Button = styled.button`
  appearance: none;
  background-color: transparent;
  border-radius: ${({ theme }) => theme.borders.radius};
  border: none;
  cursor: pointer;
  outline: none;
  padding-top: ${({ theme: { spacing } }) => spacing.m};
  padding-bottom: ${({ theme: { spacing } }) => spacing.m};
  padding-left: ${({ theme: { spacing } }) => spacing.crazy};
  padding-right: ${({ theme: { spacing } }) => spacing.crazy};
  text-transform: uppercase;

  ${primary}
  ${secondary}
`

Button.propTypes = {
  children: PropTypes.node.isRequired,
  href: PropTypes.string,
  appearance: PropTypes.oneOf(['primary', 'secondary', 'minimal']),
}

Button.defaultProps = {
  appearance: 'primary',
}

export { Button }
