import React from 'react'
import SubTitle from './SubTitle'
import {Row, Col, Container} from 'react-bootstrap'

function EducationPage() {
    return (
        <div className="educationPage" id="education">
            <SubTitle title="Education"></SubTitle>
            <div className="schoolsInfo">
                <Container fluid="md" id="school">
                    <Row className="justify-content-center"><h2>University Of California: Berkeley</h2></Row>
                    <Row className="justify-content-center" id="degreeTitle">
                        <h5>Bachelor of Arts: Computer Science</h5>
                    </Row>
                    <Row className="schoolDesc">
                        <Col md={6} sm={12}>
                            <h6>June 2021 - Expected May 2023</h6>
                        </Col>
                        <Col md={6} sm={12} className="schoolDescTwoCol">
                        Having transferred to UC Berkeley this summer, I have already begun taking interesting Computer Science courses. 
                        I am taking in-depth courses in Data Structures and Algorithms, Linear Algebra and Circuits, and Discrete Math and Probability. 
                        I am excited to take Machine Learning, Computer Architecture, and Databases classes in the upcoming semesters. 
                        </Col>
                    </Row>
                </Container>
            </div>

            <Container fluid="md" id="school">
                <Row className="justify-content-center"><h2>Las Positas College</h2></Row>
                <Row className="justify-content-center" id="degreeTitle">
                    <Row className="justify-content-center" style={{width:'100%'}}><h5>Associate in Science: Computer & Mathematics</h5></Row>
                    <Row className="justify-content-center"><h5>Associate in Arts: Liberal Arts</h5></Row>
                </Row>
                <Row className="schoolDesc">
                    <Col md={6} sm={12}>
                        <h6>Attended: August 2019 - May 2021</h6>
                        <h6>Graduated with Highest Honors</h6>
                        <h6>Math, Computer Science & Engineering Scholarship</h6>
                        <h6>Ethan Castor Memorial Scholarship</h6>
                        <h6>Treasurer of Computer Engineering Club</h6>
                        <h6>Webmaster of Alpha Gamma Sigma Honor Society</h6>
                    </Col>
                    <Col md={6} sm={12} className="schoolDescTwoCol">
                    During my two years at Las Positas College, I primarily focused on learning the basics of programming in C++. 
                    My coursework included courses on the basics of C++, Object-Oriented Programming in C++, and Data Structures and Algorithms. 
                    My favorite project was creating a hash function and statistically testing the hash table for collisions. 
                    I also enjoyed building an Interrupt Handler in MIPS assembly language! 
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default EducationPage
