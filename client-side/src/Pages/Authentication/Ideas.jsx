import React from 'react'

const Ideas = () => {
    return (
        <section className='Ideas_section'>
            <div className="save">
                <h1>Save ideas you link
                </h1>
                <p>Collect your favourites so you can <br /> get back to them later.
                </p>
                <button>Explore</button>
            </div>
            <div className="Ideas_section_gallery">
                <div className="item item_2">
                    <div className="mask"></div>
                    <img src="images/a47c6eff8a1b1d5e92f8985cb6aed67d.jpg" alt="" srcset="" />
                    <p>Future Furniture</p>
                </div>
                <div className="item item_3">
                    <div className="mask"></div>
                    <img src="images/b11b310559340fbd1b7777f806a418a9.jpg" alt="" srcset="" />
                    <p>Home Decor</p>

                </div>
                <div className="item item_4">
                    <div className="mask"></div>
                    <img src="images/e34312fc1c469f1e4847282160eabe18.jpg" alt="" srcset="" />
                    <p>Our Launge</p>
                </div>
                <div className="item item_1">
                    <div className="mask"></div>
                    <img src="images/626c70231c0ef5f21a54737a928c65b0.jpg" alt="" srcset="" />
                    <p>Lobby area</p>
                </div>
            </div>

        </section>
    )
}

export default Ideas