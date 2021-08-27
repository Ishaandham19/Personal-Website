import React from 'react'
import AnimationBackground from './AnimationBackground.js';
import NavbarComp from './Navbar.js'
import MainTitle from './MainTitle';
import Arrow from './Arrow';
import backgroundImg from './images/moon-fullscreen.jpg'
import backgroundImgSm from './images/moon-smallscreen.jpg'

export default function HomePage() {
    return (
        <div className="homePage" id="home">
            <picture>
                <source srcset={backgroundImg} media="(min-width: 1000px)" className='backgroundImg'></source>
                <img src={backgroundImgSm} alt="stars" className='backgroundImg'></img>
            </picture>
            <NavbarComp></NavbarComp>
            <MainTitle></MainTitle>
            <Arrow></Arrow>   
      </div>
    )
}
