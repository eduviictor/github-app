'use strict'

import React from 'react';

const Search = ({ handleSearch, isDisabled }) => {
    return (
        <div className="search">
            <input 
            type="search" 
            placeholder="Digite o nome do usuário"
            onKeyUp={handleSearch}
            disabled={isDisabled} />
        </div>
    )
}

Search.propTypes = {
    handleSearch: React.PropTypes.func.isRequired,
    isDisabled: React.PropTypes.bool.isRequired
}

export default Search;