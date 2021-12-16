import React from 'react'

function SearchBar(props) {

    const { btnSearch} = props

    return (
        <div className="searchBarComponent">
            <div class="input-group rounded">
              <input onChange={btnSearch} type="search" class="form-control rounded" placeholder="Search" aria-label="Search" aria-describedby="search-addon" />
               
            </div>
        </div>
    )
}

export default SearchBar
