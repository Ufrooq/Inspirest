import React from 'react'

const Signup = () => {
    return (
        <section className='signup_section'>
            <div className="signup_gallery">
                <div className="signup_heading">
                    <h1>Sign up to get your ideas</h1>
                </div>

            </div>
            <div className="signup_form">
                <div>
                    <h1>Welcome to Pinterset</h1>
                    <p>Find new ideas to try</p>
                </div>
                <form action="">
                    <label htmlFor="">Email :
                        <input type="email" placeholder='Email' />
                    </label>
                    <label htmlFor="">Password :
                        <input type="password" placeholder='Create a Password' />
                    </label>
                    <label htmlFor="">Birthdate :
                        <input type="date" />
                    </label>
                    <button> Continue</button>
                </form>
                <div className="other">
                    <p className='or'>OR</p>
                    <div className="terms">
                        <p>By continuing, you agree to Pinterest's</p>
                        <p> <span>Terms of Services</span> and acknowledge</p>
                        <p>you've read our <span> Privacy Policy </span> </p>
                    </div>
                    <p>Already a member? <a href="">Sign in</a></p>
                </div>

            </div>
        </section>
    )
}

export default Signup