import React from 'react'
import ProgressBarElem from '../ProgressBarElem'
import ProjectsCarousel from './ProjectsCarousel'
import SubTitle from './SubTitle'

function ProjectPage() {
    return (
        <div className='projectPage' id="projects">
            <SubTitle title='Projects'></SubTitle>
            <ProjectsCarousel></ProjectsCarousel>
        </div>
    )
}

export default ProjectPage
