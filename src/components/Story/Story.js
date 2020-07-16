import styled from '@emotion/styled'
import PropTypes from 'prop-types'
import React from 'react'

const Wrapper = styled.div`
  margin-bottom: 5rem;
`

const Content = styled.div`
  padding: 0 1rem;
`

const StoryTitle = styled.h2`
  border-bottom: 1px solid #a7afb5;
  color: #8b9196;
  margin-bottom: 3rem;
`
function Story({ children, title }) {
  return (
    <Wrapper>
      {title && <StoryTitle>{title}</StoryTitle>}
      <Content>{children}</Content>
    </Wrapper>
  )
}

Story.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string,
}

export { Story }
