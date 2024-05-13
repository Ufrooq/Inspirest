import React from 'react'
import SignUp from './SignUp';


const SignupPage = () => {
    return (
        <section className='signup_section'>
            <div className="mask"></div>
            <div className="signup_gallery">
                <div className="signup_heading">
                    <h1>Sign up to get your ideas</h1>
                </div>
            </div>
            <SignUp />
        </section>
    )
}

export default SignupPage;