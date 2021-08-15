import React from 'react'
import {AiFillGithub} from 'react-icons/ai'
import {AiOutlineLinkedin} from 'react-icons/ai'
import {AiOutlineMail} from 'react-icons/ai'

const links={
    github: 'https://github.com/Ishaandham19',
    linkedin: 'https://www.linkedin.com/in/ishaan-dham/',
    email: 'mailto: ishaandham01@gmail.com'
}


function HomeIcons() {
    return (
        <div className="homeIconsRow"> 
            <a className='icons' href={links.github}>
                <AiFillGithub size={30}></AiFillGithub>
            </a>
            <a className='icons' href={links.linkedin}>
                <AiOutlineLinkedin size={30}></AiOutlineLinkedin>
            </a>
            <a className='icons' href={links.email}>
                <AiOutlineMail size={30}></AiOutlineMail>
            </a>
        </div>
    )
}

export default HomeIcons
