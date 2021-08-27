import React from 'react'
import { Card } from 'react-bootstrap'
import {AiOutlineGithub, AiOutlineLink} from 'react-icons/ai'
import SubTitle from './SubTitle'


function ProjectCard({project}) {
    return (
    <Card className="dark text-white" id="projectCard">
        <Card.Header id="projectTitle">{project.name}</Card.Header>
        <Card.Img id="projectImg" src={project.img} alt="project image"/>
        <Card.ImgOverlay>
            {/* <Card.Text id="projectTitle">{project.name}</Card.Text> */}
            <Card.Text>
                {project.text}
            </Card.Text>
            <Card.Text id="addBtnBgCard">
            { project.linkGh && 
                <a className='icons' href={project.linkGh}>
                  <AiOutlineGithub style={{color:'black'}}size={35}></AiOutlineGithub>
                </a>
            }
            {project.link && 
                <a className='icons' href={project.link}>
                  <AiOutlineLink style={{color:'black'}}size={35}></AiOutlineLink>
                </a>
            }

            </Card.Text>
        </Card.ImgOverlay>
    </Card>
    )
}

export default ProjectCard