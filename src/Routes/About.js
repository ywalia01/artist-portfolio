import React from 'react'
import { DISPLAY_IMAGE, ABOUT_PARAS } from '../data';

function About() {
    return (
        <div className="container">
            <section id="about">
                <div className="dp-container">
                    <img src={DISPLAY_IMAGE} id="display-pic" alt="display-pic"></img>
                </div>
                <div className="para-container">
                    {ABOUT_PARAS.map(para => (
                        <p>{para.text}</p>
                    ))}
                </div>
            </section>
        </div>
    )
}

export default About
