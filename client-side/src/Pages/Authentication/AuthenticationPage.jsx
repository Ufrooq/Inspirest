import React from 'react'
import Main from './Main'
import './style.scss'
import Search from './Search'
import Ideas from './Ideas'
import SignupPage from './SignupPage'

const AuthenticationPage = () => {
    return (
        <div className='AuthenticationPage'>
            <Main />
            <Search />
            <Ideas />
            <SignupPage />
        </div>
    )
}

export default AuthenticationPage