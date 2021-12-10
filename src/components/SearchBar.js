import React from 'react'

function SearchBar(props) {

    const { btnSearch} = props

    return (
        <div>
            <div class="input-group rounded">
              <input onChange={btnSearch} type="search" class="form-control rounded" placeholder="Search" aria-label="Search" aria-describedby="search-addon" />
                <span class="input-group-text border-0" id="search-addon">
                    <i class="fas fa-search"></i>
                </span>
            </div>
        </div>
    )
}

export default SearchBar
