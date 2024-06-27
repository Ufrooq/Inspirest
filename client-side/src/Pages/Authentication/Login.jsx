import React from 'react'

const Login = ({ handleSign }) => {
    return (
        <div className="signup_form">
            <div>
                <h1>Login</h1>
            </div>
            <form action="">
                <label htmlFor="">Email :
                    <input type="email" placeholder='Email' />
                </label>
                <label htmlFor="">Password :
                    <input type="password" placeholder='Create a Password' />
                </label>
                <button> Login </button>
            </form>
            <div className="other">
                <p className='or'>OR</p>
                <div className="terms">
                    <p>By continuing, you agree to Pinterest's</p>
                    <p> <span>Terms of Services</span> and acknowledge</p>
                    <p>you've read our <span> Privacy Policy </span> </p>
                </div>
                <p>Do not have an account? <span onClick={handleSign}>Sign Up</span></p>
            </div>

        </div>
    )
}

export default Login