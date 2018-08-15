import classnames from 'classnames/bind'
import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'

import { BLOG_PATH } from '../../constants'
import { urlGenerator } from '../../helpers'
import useLatestPosts from '../../hooks/useLatestPosts'
import Icon from '../Icon'
import Subscribe from '../Subscribe'

import styl from './Footer.module.css'

const cx = classnames.bind(styl)

function Footer({ author }) {
  const { edges: posts } = useLatestPosts()
  console.log('[DEBUG]: Footer -> posts', posts)

  return (
    <footer className={styl.footer}>
      <div className={styl.menus}>
        <ul className={styl.section}>
          <li>
            <h3>Últimos Posts</h3>
            <ul>
              {posts.map(({ node: { frontmatter: { title }, fields: { slug } } }) => (
                <li key={slug}>
                  <Link to={urlGenerator(BLOG_PATH, slug)}>{title}</Link>
                </li>
              ))}
            </ul>
          </li>
          <li>test</li>
          <li>test</li>
          <li>
            <h3>Últimos Posts</h3>
            <Subscribe />
          </li>
        </ul>
      </div>
      <div className={cx(styl.section, styl.credits)}>
        <p>
          © {new Date().getFullYear()}, Built with
          <Icon icon="heart" className={styl.icon} />
          by {author}! Todos los derechos reservados
        </p>
        <div className={styl.privacy}>
          <Link to="/">Aviso legal</Link>
          <Link to="/">Politica de privacidad</Link>
          <Link to="/">Politica de cookies</Link>
        </div>
      </div>
    </footer>
  )
}

Footer.propTypes = {
  author: PropTypes.string,
}

Icon.defaultProps = {
  author: '',
}

export default Footer
