import './App.css';
import React, {useEffect, useState} from 'react'
import Particles from 'react-particles-js'
import params from './particles-js-config.js'
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarComp from './components/Navbar.js'
import MainTitle from './components/MainTitle';
import Arrow from './components/ArrowDown';

function App() {

  return (
    <>
    <div className="App">
      <div className="frontPage">
        <NavbarComp></NavbarComp>
        <MainTitle></MainTitle>
        <Particles id="particles-js"
          params={params} 
        />
        <Arrow></Arrow>
      </div>
    </div>

    </>
  );
}

export default App;
