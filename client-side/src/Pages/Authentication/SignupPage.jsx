import React, { useState } from 'react'
import SignUp from './SignUp';
import Login from './Login';


const SignupPage = () => {


    const [accHolder, setaccHolder] = useState(true);

    const handleSign = () => {
        setaccHolder(!accHolder);
    }
    return (
        <section className='signup_section'>
            <div className="mask"></div>
            <div className="signup_gallery">
                <div className="signup_heading">
                    <h1>Sign up to get your ideas</h1>
                </div>
            </div>
            {
                accHolder ?
                    <Login handleSign={handleSign} />
                    :
                    <SignUp handleSign={handleSign} />
            }

        </section>
    )
}

export default SignupPage;