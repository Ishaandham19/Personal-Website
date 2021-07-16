import React from 'react'
import SubTitle from './SubTitle'
import CardElem from './CardElem'
import ProgressBarElem from '../ProgressBarElem'

function SkillsPage() {
    const aboutMeText = "Hello! My name is Ishaan Dham, and I am currently a Junior at UC Berkeley. " 
                      +  "I am a passionate and enthusiastic Computer Science student, and love to work with new technologies. "
                      + "Currently, I am really interested in computer architecture, web development, and machine learning. "
                      + "I am also learning more about cryptocurrencies as I find the technology used in blockchains fascinating. "
                      + "Other than that I enjoy sports, gyming, and FPS games. "
                      + "Feel free to contact me through mail or social media!"
                      
    return ( 
        <div className="skillsPage" id="skills">
            <div className="left-skillsPage split">
                <CardElem text={aboutMeText}></CardElem>
            </div>
            <div className="right-skillsPage split">
                <SubTitle title="Skills"></SubTitle>
                <ProgressBarElem></ProgressBarElem>
            </div>
        </div>
    )
}

export default SkillsPage
