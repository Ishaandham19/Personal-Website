import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import SubTitle from './SubTitle'
import ProjectCard from './ProjectCard'
import DungeonEscape from './images/DungeonEscapeImage.png'
import PersonalWebsiteImg from './images/PersonalWebsiteImg.png'
import InterruptHandlerMIPS from './images/InterruptHandlerMIPS.png'
import urlShortner from './images/urlShortner.png'
import blogApp from './images/blogApp.png'
import { Container } from 'react-bootstrap'

const projects={
    project1: {
        name: 'Dungeon Escape',
        text: 'Dungeon Escape is a console based game that uses a procedural approach to create a maze like structure filled with monsters and stars. ' + 
                'The goal of the game is to collect all the stars and escape the maze without encountering a monster. This was my first programming project ' +
                'and I enjoyed making a quite basic yet fun game to play.',
        img: DungeonEscape,
        linkGh: 'https://github.com/Ishaandham19/DungeonEscape-console-game',
        link: null
    },
    project2 : {
        name: 'Personal Website',
        text: 'Designed and built a professional personal website to showcase projects, blogs, and interests. ' + 
              'Reusable front-end built using REACT/JSX, HTML, and CSS. ',
        img: PersonalWebsiteImg,
        linkGh: 'https://github.com/Ishaandham19/Personal-Website',
        link: 'http://ishaandham.com'
    },
    project3 : {
        name: 'Interrupt Handler',
        text: 'Created a interrupt handler for MIPS processor that handles keyboard and display interrupts. ' +
                'This project enables the user to perform I/O operations without the use of specific I/O commands and with memory mapped I/O instead.',
        img: InterruptHandlerMIPS,
        linkGh: null,
        link: null
    },
    project4 : {
        name: 'Blog/Notes Platform',
        text: 'Created a platform that converts markdown to html files and displays them. ' +
                'Containerized the application to allow easy self-hosting.',
        img: blogApp,
        linkGh: 'https://github.com/Ishaandham19/blog-platform',
        link: null
    },
    project5 : {
        name: 'Short Url',
        text: 'Created functionality to shorten urls using custom aliases by developing a REST Api and frontend, and database to store user information. ' +
                'Deployed the app to Kubernetes cluster to enable greater scalability and availability.',
        img: urlShortner,
        linkGh: 'https://github.com/Ishaandham19/urlShortner',
        link: 'http://shorturl.ishaandham.com/app'
    }
}


function ProjectPage() {
    return (
        <div className='projectPage' id="projects">
            <SubTitle title='Projects'></SubTitle>
            <Container fluid id='projectsContainer'>
            <Row id='projectsRow'>
                <Col xl={4} lg={6}>
                    <ProjectCard project = {projects.project5}></ProjectCard>
                </Col>
                <Col xl={4} lg={6}>
                    <ProjectCard project = {projects.project4}></ProjectCard>
                </Col>
                <Col xl={4} lg={6}>
                    <ProjectCard project = {projects.project3}></ProjectCard>
                </Col>
                <Col xl={4} lg={6}>
                    <ProjectCard project = {projects.project2}></ProjectCard>
                </Col>
                <Col xl={4} lg={6}>
                    <ProjectCard project = {projects.project1}></ProjectCard>
                </Col>
            </Row>
            </Container>
        </div>
    )
}

export default ProjectPage
