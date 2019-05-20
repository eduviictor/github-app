'use strict'

import React from 'react';

const UserInfo = ({ userInfo }) => {
    return (
        <div className="user-info">
            <img src={userInfo.photo} />
            <h1 className="username">
                <a href={`http://github.com/${userInfo.login}`}>{userInfo.username}</a>
            </h1>
            <ul className="repos-info">
                <li>Repositórios: {userInfo.repos}</li>
                <li>Seguidores: {userInfo.followers}</li>
                <li>Seguindo: {userInfo.following}</li>
            </ul>
        </div>
    )
}

UserInfo.propTypes = {
    userInfo: React.PropTypes.shape({
        username: React.PropTypes.string.isRequired,
        repos: React.PropTypes.number.isRequired,
        followers: React.PropTypes.number.isRequired,
        following: React.PropTypes.number.isRequired,
        photo: React.PropTypes.string.isRequired,
        login: React.PropTypes.string.isRequired
    })
}

export default UserInfo;