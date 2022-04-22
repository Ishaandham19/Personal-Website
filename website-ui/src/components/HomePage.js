import React from 'react'
import AnimationBackground from './AnimationBackground.js';
import NavbarComp from './Navbar.js'
import MainTitle from './MainTitle';
import Arrow from './Arrow';
import backgroundImg from './images/moon-fullscreen.jpg'
import backgroundImgSm from './images/moon-smallscreen.jpg'
import { ParallaxBanner } from 'react-scroll-parallax';
import { ParallaxBackground } from './ParallaxBackground.js';


export default function HomePage() {
    return (
        <div className="homePage" id="home">
            <ParallaxBanner>
                <ParallaxBackground></ParallaxBackground>
            </ParallaxBanner>
            <NavbarComp></NavbarComp>
            <Arrow></Arrow>   
      </div>
    )
}
