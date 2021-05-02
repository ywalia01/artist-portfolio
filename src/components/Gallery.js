import React from 'react'
import {GALLERY} from '../data'

function Gallery() {
    return (
        <section id="gallery">
            {GALLERY.map(social => (
                <div className="img-container">
                    <div className="gallery-item">
                        <div className="image">
                            <img className="image-img" src={social.link}alt="gallery-img"></img>
                        </div>
                        <div className="img-overlay">
                            <div className="img-title">{social.title}</div>
                            <p className="img-description">{social.description}</p>
                        </div>
                    </div>
                </div>
            ))}
        </section>
    )
}

export default Gallery
