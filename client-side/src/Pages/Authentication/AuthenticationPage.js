import React from 'react'
import Main from './Main'
import './style.scss'
import Search from './Search'
import Ideas from './Ideas'
import Signup from './Signup'

const AuthenticationPage = () => {
    return (
        <div className='AuthenticationPage'>
            <Main />
            <Search />
            <Ideas />
            <Signup />
        </div>
    )
}

export default AuthenticationPage