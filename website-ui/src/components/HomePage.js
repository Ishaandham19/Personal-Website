import React from 'react'
import Particles from 'react-particles-js'
import params from '../particles-js-config'
import NavbarComp from './Navbar.js'
import MainTitle from './MainTitle';
import Arrow from './Arrow';
import HomeIcons from './HomeIcons';
import Footer from './Footer';

export default function HomePage() {
    return (
        <div className="homePage" id="home">
            <NavbarComp></NavbarComp>
            <MainTitle></MainTitle>
            <Particles id="particles-js"
            params={params} 
            />
            <HomeIcons></HomeIcons>
            <Arrow></Arrow>   
      </div>
    )
}
