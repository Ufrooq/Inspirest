import React from 'react'
import Main from './Main'
import './style.scss'
import Search from './Search'
import Ideas from './Ideas'

const AuthenticationPage = () => {
    return (
        <div className='AuthenticationPage'>
            <Main />
            <Search />
            <Ideas />
        </div>
    )
}

export default AuthenticationPage