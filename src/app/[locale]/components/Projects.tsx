'use client'
import React, { useState } from 'react'
import { AiFillCaretRight } from 'react-icons/ai'
import ProjectCard from './ProjectCard'
import { projectsData } from './data/projects'

const ProjectsContent = () => {
  const [index, setIndex] = useState(1)
  return (
    <div className='desktop:flex desktop:items-start mt-4'>
      <div className='types flex desktop:flex-col desktop:flex-1  justify-between font-medium mb-4'>
        <button
          className={`${
            index === 1
              ? 'bg-white desktop:bg-[transparent] desktop:text-pink text-blue '
              : ''
          } px-6 py-2 tablet:py-4 text-[14px] tablet:text-[16px] desktop:text-[18px] rounded flex-1 desktop:flex desktop:items-center desktop:justify-center desktop:gap-4 `}
          onClick={() => setIndex(1)}
        >
          <p
            className={`text-[18px] ${
              index !== 1 ? 'hidden' : 'hidden desktop:block'
            }`}
          >
            <AiFillCaretRight />
          </p>
          FRONTEND
        </button>
        <button
          className={`${
            index === 2
              ? 'bg-white desktop:bg-[transparent] desktop:text-pink text-blue'
              : ''
          } px-6 py-2 tablet:py-4 text-[14px] tablet:text-[16px] desktop:text-[18px] rounded flex-1 desktop:flex desktop:items-center desktop:justify-center desktop:gap-4 `}
          onClick={() => setIndex(2)}
        >
          <p
            className={`text-[18px] ${
              index !== 2 ? 'hidden' : 'hidden desktop:block'
            }`}
          >
            <AiFillCaretRight />
          </p>
          BACKEND
        </button>
        <button
          className={`${
            index === 3
              ? 'bg-white desktop:bg-[transparent] desktop:text-pink text-blue'
              : ''
          } px-6 py-2 tablet:py-4 text-[14px] tablet:text-[16px] desktop:text-[18px] rounded flex-1 desktop:flex desktop:items-center desktop:justify-center desktop:gap-4  `}
          onClick={() => setIndex(3)}
        >
          <p
            className={`text-[18px] ${
              index !== 3 ? 'hidden' : 'hidden desktop:block'
            }`}
          >
            <AiFillCaretRight />
          </p>
          MOBILE
        </button>
      </div>
      <div className='desktop:flex-[3] flex flex-col gap-4 tablet:grid tablet:grid-cols-2'>
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
