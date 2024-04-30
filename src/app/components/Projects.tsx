import React from 'react'
import ProjectCard from './ProjectCard'
import { projectsData } from './data/projects'

const ProjectsContent = () => {
  return (
    <div className='mt-4'>
      <p className='text-justify mb-4 font-normal text-[15px] tablet:text-[16px]'>
        Beyond my studies, I have carried out several projects through the
        associations, clubs and school projects to which I belong.
      </p>
      <div className='flex flex-col gap-4 tablet:grid tablet:grid-cols-2 desktop:grid-cols-3'>
        {projectsData.map((project, index) => {
          return (
            <ProjectCard
              key={index}
              projectTitle={project.projectTitle}
              date={project.date}
              description={project.description}
              imagePath={project.imagePath}
            />
          )
        })}
      </div>
    </div>
  )
}

export default ProjectsContent
