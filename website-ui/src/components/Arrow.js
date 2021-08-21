import React from 'react'
import { CaretDownFill } from 'react-bootstrap-icons';

function scrollTo(id){
    document.querySelector(id).scrollIntoView({ 
    behavior: 'smooth' 
})};

export default function Arrow() {
    return (
        <a className="arrow bounce" onClick={() => scrollTo('#about')}>
            <CaretDownFill color="#08fdd8" size={30}/>
        </a>
       
    )
}
