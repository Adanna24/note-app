import React from 'react'

function Search(prop) {
  return (
    <div>
      <input 
        type= 'search'
        placeholder='search for notes ...'
        className='search'
        onChange={(e) => prop.search(e.target.value)}
      />
    </div>
  )
}

export default Search;