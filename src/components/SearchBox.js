import { render } from '@testing-library/react'
import React from 'react'

const SearchBox = ({ dynamicSearch }) => {
  return (
    <div className="pa2">
      <input
        type="search"
        placeholder="search for blog post"
        onChange={dynamicSearch}
      />
    </div>
  )
}

export default SearchBox

