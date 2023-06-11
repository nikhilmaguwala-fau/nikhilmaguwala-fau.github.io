import React, { useState } from 'react'
import './styles.css'
import ProjectItem from './ProjectItem'


export default function Projects({projects}){

    return (
        <div className='blogList-wrap'>
            {projects.map((project) => (
                <ProjectItem project={project} />
            ))}
        </div>
    )
}