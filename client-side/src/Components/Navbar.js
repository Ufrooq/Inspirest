import React from 'react'
import './style.scss'

const Navbar = () => {
    return (
        <nav>
            <div className="logo">
                <i class="fa-brands fa-pinterest"></i>Inspirest
            </div>
            <div className="nav-components">
                <ul>
                    <li><a href="">About</a></li>
                    <li><button className='btn'>Signup</button></li>
                    <li><button>Login</button></li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar