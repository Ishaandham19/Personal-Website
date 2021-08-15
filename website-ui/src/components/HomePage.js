import React from 'react'
import AnimationBackground from './AnimationBackground.js';
import NavbarComp from './Navbar.js'
import MainTitle from './MainTitle';
import Arrow from './Arrow';

export default function HomePage() {
    return (
        <div className="homePage" id="home">
            <NavbarComp></NavbarComp>
            <MainTitle></MainTitle>
            <Arrow></Arrow>   
      </div>
    )
}
