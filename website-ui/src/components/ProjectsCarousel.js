import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import BerkeleyLogo from './images/berkeleyLogo.png'
import DungeonEscapeImage from './images/DungeonEscapeImage.png'
import InterruptHandlerMIPS from './images/InterruptHandlerMIPS.png'
import {AiFillGithub} from 'react-icons/ai'

const projects={
    project1: {
        name: 'Dungeon Escape - Console Based Game',
        text: 'Dungeon Escape is a console based game that uses a procedural approach to create a maze like structure filled with monsters and stars. \
                The goal of the game is to collect all the stars and escape the maze without encountering a monster. This was my first project in C++ \
                and I enjoyed making a quite basic yet fun game to play.',
        link: 'https://github.com/Ishaandham19/DungeonEscape-console-game',
    },
    project2 : {
        name: 'Interrupt Handler - Keyboard and Display',
        text: 'Created a interrupt handler for MIPS processor that handles keyboard and display interrupts.\
                This project enables the user to perform I/O operations without the use of specific I/O commands and with memory mapped I/O instead.'
    }
}

function ProjectsCarousel() {
    return (
    <Carousel fade hover id="projectsCWrapper">
    <Carousel.Item>
        <img
        className="d-block w-100"
        src={ DungeonEscapeImage }
        alt="First slide"
        />
        <Carousel.Caption>
        <h3>{projects.project1.name}</h3>
        <p> 
          {projects.project1.text}
        </p>
        <a className='icons' href={projects.project1.link}>
            <AiFillGithub size={25}></AiFillGithub>
        </a>
        </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
        <img
        className="d-block w-100"
        src={ InterruptHandlerMIPS }
        alt="Second slide"
        />
        <Carousel.Caption>
        <h3> {projects.project2.name} </h3>
        <p> {projects.project2.text} </p>
        </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
        <img
        className="d-block w-100"
        src={ BerkeleyLogo }
        alt="Third slide"
        />

        <Carousel.Caption>
        <h3>More to be posted!</h3>
        <p></p>
        </Carousel.Caption>
    </Carousel.Item>
    </Carousel>
    )
}

export default ProjectsCarousel
