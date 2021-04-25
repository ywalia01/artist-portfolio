import React from 'react'

function Gallery() {
    return (
        <section id="gallery">
            <div className="img-container">
                <div className="gallery-item">
                    <div className="image">
                        <img className="image-img" src="https://source.unsplash.com/1600x900?nature" alt="gallery-img"></img>
                    </div>
                    <div className="img-overlay">
                        <div className="img-title">BRICKS</div>
                        <p className="img-description">Here we have a brick wall</p>
                    </div>
                </div>
            </div>
            <div className="img-container">
                <div className="gallery-item">
                    <div className="image">
                        <img className="image-img" src="https://source.unsplash.com/1600x900?car" alt="gallery-img"></img>
                    </div>
                    <div className="img-overlay">
                        <div className="img-title">CARS</div>
                        <p className="img-description">Here we have a brick wall</p>
                    </div>
                </div>
            </div>
            <div className="img-container">
                <div className="gallery-item">
                    <div className="image">
                        <img className="image-img" src="https://source.unsplash.com/1600x900?coffee" alt="gallery-img"></img>
                    </div>
                    <div className="img-overlay">
                        <div className="img-title">COFFEE</div>
                        <p className="img-description">Here we have a brick wall</p>
                    </div>
                </div>
            </div>
            <div className="img-container">
                <div className="gallery-item">
                    <div className="image">
                        <img className="image-img" src="https://source.unsplash.com/1600x900?science" alt="gallery-img"></img>
                    </div>
                    <div className="img-overlay">
                        <div className="img-title">SCIENCE</div>
                        <p className="img-description">Here we have a brick wall</p>
                    </div>
                </div>
            </div>
            <div className="img-container">
                <div className="gallery-item">
                    <div className="image">
                        <img className="image-img" src="https://source.unsplash.com/1600x900?architecture" alt="gallery-img"></img>
                    </div>
                    <div className="img-overlay">
                        <div className="img-title">ARCHITECT</div>
                        <p className="img-description">Here we have a brick wall</p>
                    </div>
                </div>
            </div>
            <div className="img-container">
                <div className="gallery-item">
                    <div className="image">
                        <img className="image-img" src="https://source.unsplash.com/1600x900?market" alt="gallery-img"></img>
                    </div>
                    <div className="img-overlay">
                        <div className="img-title">MARKETS</div>
                        <p className="img-description">Here we have a brick wall</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Gallery
