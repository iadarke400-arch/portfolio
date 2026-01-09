import React from 'react';
import { motion } from 'framer-motion';
import './Home.css';

const Home = () => {
    return (
        <section id="home" className="section home">
            <div className="home-visual">
                <div className="orbit-center-visual">
                    {/* <div className="splash-ring"></div> */}
                    <div className="splash-core"></div>
                    <div className="splash-particles">
                        <span></span><span></span>
                        <span></span><span></span>
                        <span></span><span></span>
                        <span></span><span></span>
                        <span></span><span></span>
                        <span></span><span></span>
                        <span></span><span></span>
                        <span></span><span></span>
                        <span></span><span></span>
                        <span></span><span></span>
                        <span></span><span></span>
                        <span></span><span></span>
                        <span></span><span></span>
                        <span></span><span></span>
                        <span></span><span></span>
                        <span></span><span></span>
                    </div>
                </div>
                <div className="orbit-container">
                    <div className="orbit-item item-1"><img src="/images/figma.png" alt="Figma" /></div>
                    <div className="orbit-item item-2"><img src="/images/capcut.png" alt="CapCut" /></div>
                    <div className="orbit-item item-3"><img src="/images/css.png" alt="CSS" /></div>
                    <div className="orbit-item item-4"><img src="/images/and.png" alt="Android" /></div>
                    <div className="orbit-item item-5"><img src="/images/html.png" alt="HTML" /></div>
                    <div className="orbit-item item-6"><img src="/images/lightroom.png" alt="Lightroom" /></div>
                </div>
            </div>
            <div className="home-text">
                <h1 className="title-large">UI&UX</h1>
                <h2 className="subtitle-large">DESIGNER</h2>
                <div className="name-plate">MOHAMMED SALIM</div>
            </div>
        </section>
    );
};

export default Home;
