import React from 'react'

const Search = () => {
    return (
        <section className='search_section'>
            <div className="gallery">
                <div className="item item_2">
                    <img src="images/65dfcdd2fc433d45baedb3666cacfd82.jpg" alt="" srcset="" />
                </div>
                <div className="item item_3">
                    <img src="images/14730af41a58e05384b86b0bacf9d57b.jpg" alt="" srcset="" />
                </div>
                <div className="item item_4">
                    <img src="images/af609e357a691876ac58d02e27af316e.jpg" alt="" srcset="" />
                </div>
                <div className="item item_1">
                    <img src="images/489cd9ae5fec17977c73677866202d59.jpg" alt="" srcset="" />
                </div>
            </div>
            <div className="search">
                <h1>Search for an idea
                </h1>
                <p>What do you want to try next? <br />
                    Think of something you’re into <br />
                    —like “easy chicken dinner”—and see <br /> what you find.
                </p>
                <button>Explore</button>
            </div>
        </section>
    )
}

export default Search