import React from 'react'
import './style.scss'

const Main = () => {
    return (
        <section className='next_section'>
            <h1>Get your next</h1>
            <h2>weeknight dinner idea</h2>
            <div className="gallery">
                <div className='item'>
                    <img src="images/photo_1706361027816.jpg" alt="" />
                </div>
                <div className='item'>
                    <img src="images/photo_1706870813264.jpg" alt="" />
                </div>
                <div className='item'>
                    <img src="images/photo_1706884588890.jpg" alt="" />
                </div>
                <div className='item'>
                    <img src="images/photo_1706361037486.jpg" alt="" />
                </div>

                <div className='item'>
                    <img src="images/photo_1706870802411.jpg" alt="" />
                </div>
            </div>
        </section>
    )
}

export default Main;