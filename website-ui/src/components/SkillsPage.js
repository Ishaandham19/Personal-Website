import React from 'react'
import SubTitle from './SubTitle'
import Image from 'react-bootstrap/Image'
import Headshot from './images/Headshot2.jpg'
import { Row, Col, Container, ProgressBar} from 'react-bootstrap'
import ProgressBarElem from './ProgressBarElem'
import BlogSection from './BlogSection'


function SkillsPage() {
    const aboutMeText1=  "Hi! I’m Ishaan Dham, and I am a Senior pursuing a bachelor’s degree in Computer Science at UC Berkeley. \
    I am passionate and enthusiastic about all things computer science and constantly strive to learn about new and core technologies. "
    const aboutMeText2 = "Currently, I am fascinated by backend web development, systems and machine learning. \
    In my free time, I enjoy sports, weight-lifting, and FPS games."
                      

    return (
        <div className="skillsPage" id="about">
                <SubTitle title="About Me"></SubTitle>
                <Row id="imageRow">
                    <Image id="headshot" src={Headshot} roundedCircle />
                </Row>
                <Row id="aboutMePara">
                    <p>
                        {aboutMeText1}
                        <br></br>
                        {aboutMeText2}
                    </p>
                </Row>
                <hr className="whiteLine"></hr>
                <Row style={{paddingLeft: '10%', paddingRight: '10%'}}>
                    <Col className="skillCol" m={6}>
                        <SubTitle title="Blogs"></SubTitle>
                        <BlogSection></BlogSection>
                    </Col>
                    <Col className="skillCol" m={6}>
                        <SubTitle title="Skills"></SubTitle>
                        <ProgressBarElem></ProgressBarElem>
                    </Col>
                </Row>
        </div>
    )
    // return ( 
    //     <div className="skillsPage" id="skills">
    //         <div className="left-skillsPage split">
    //             <CardElem text={aboutMeText}></CardElem>
    //         </div>
    //         <div className="right-skillsPage split">
    //             <SubTitle title="Skills"></SubTitle>
    //             <ProgressBarElem></ProgressBarElem>
    //         </div>
    //     </div>
    // )
}

export default SkillsPage
