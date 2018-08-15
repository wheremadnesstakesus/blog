import PropTypes from 'prop-types'
import React from 'react'

import { ReactComponent as SearchIcon } from './icons/search.svg'
import styl from './Search.module.css'

function Search() {
  return (
    <form role="search" className={styl.search}>
      <input type="text" name="search" className={styl.criteria} />
      <button type="submit" className={styl.action}>
        <SearchIcon className={styl.icon} />
      </button>
    </form>
  )
}

Search.propTypes = {
  social: PropTypes.string,
}

Search.defaultProps = {
  social: '',
}

export default Search
