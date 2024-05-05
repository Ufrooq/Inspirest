import React, { useEffect } from 'react'
import './style.scss'
import ScrollReveal from 'scrollreveal';

const Main = () => {




    useEffect(() => {
        ScrollReveal().reveal(".animate_card_1", { delay: 300, distance: "100px", duration: 1000, reset: true });
        ScrollReveal().reveal(".animate_card_2", { delay: 400, distance: "100px", duration: 1000, reset: true });
        ScrollReveal().reveal(".animate_card_3", { delay: 500, distance: "100px", duration: 1000, reset: true });
        ScrollReveal().reveal(".animate_card_4", { delay: 400, distance: "100px", duration: 1000, reset: true });
        ScrollReveal().reveal(".animate_card_5", { delay: 300, distance: "100px", duration: 1000, reset: true });
    })



    return (
        <section className='next_section'>
            <h1>Get your next</h1>
            <h2>weeknight dinner idea</h2>
            <div className="gallery">
                <div className='item animate_card_1'>
                    <img src="images/photo_1706361027816.jpg" alt="" />
                </div>
                <div className='item animate_card_2'>
                    <img src="images/photo_1706870813264.jpg" alt="" />
                </div>
                <div className='item animate_card_3'>
                    <img src="images/photo_1706884588890.jpg" alt="" />
                </div>
                <div className='item animate_card_4'>
                    <img src="images/photo_1706361037486.jpg" alt="" />
                </div>

                <div className='item animate_card_5'>
                    <img src="images/photo_1706870802411.jpg" alt="" />
                </div>
            </div>
        </section>
    )
}

export default Main;