import React from 'react'
import ProjectCard from './ProjectCard'
import { cookies } from 'next/headers'
import { t } from '../lib/t'
import { projectsDataFR } from './data/projectsFR'
import { projectsDataEN } from './data/projectsEN'

const ProjectsContent = () => {
  const lang = (cookies().get('lang')?.value || 'fr') as 'fr' | 'en'

  const projectsDataSelected = lang == 'fr' ? projectsDataFR : projectsDataEN

  return (
    <div className='mt-4'>
      <p className='text-justify mb-4 font-normal text-[15px] tablet:text-[16px]'>
        {t(lang, 'projects.para')}
      </p>
      <div className='flex flex-col gap-4 tablet:grid tablet:grid-cols-2 desktop:grid-cols-4 desktop:px-6'>
        {projectsDataSelected.map((project, index) => {
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
