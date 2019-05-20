'use strict'

import React from 'react';
import Search from './search';
import Actions from './actions';
import Repos from './repos';
import UserInfo from './user-info';

const AppContent = ({ userInfo, repos, starred, handleSearch, getRepos, getStarred, isFetching, viewRepo }) => {
    return (
        <div className="app">
            <Search handleSearch={handleSearch} isDisabled={isFetching} />
            {isFetching && <div>Carregando...</div>}
            {!!userInfo && <UserInfo userInfo={userInfo} />}
            {!!userInfo && <Actions getRepos={getRepos} getStarred={getStarred} /> }
            {viewRepo === 'repos' ? 
                !!repos.length && 
                    <Repos repos={repos} className="repos" title="Repositórios" />
                :
                !!starred.length && 
                    <Repos repos={starred} className="starred" title="Favoritos" />
            }
        </div>
    )
}

AppContent.propTypes = {
    userInfo: React.PropTypes.object,
    repos: React.PropTypes.array.isRequired,
    starred: React.PropTypes.array.isRequired,
    isFetching: React.PropTypes.bool.isRequired,
    handleSearch: React.PropTypes.func.isRequired,
    getRepos: React.PropTypes.func.isRequired,
    getStarred: React.PropTypes.func.isRequired
}

export default AppContent;