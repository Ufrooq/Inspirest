import React from 'react'
import Main from './Main'
import './style.scss'
import Search from './Search'

const AuthenticationPage = () => {
    return (
        <div className='AuthenticationPage'>
            <Main />
            <Search />
        </div>
    )
}

export default AuthenticationPage