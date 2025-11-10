import Image from 'next/image'
import React from 'react'

interface ProjectCardProps {
  projectTitle: string
  date: string
  description: string
  imagePath: string
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  imagePath,
  projectTitle,
  description,
  date,
}) => {
  return (
    <div className='w-full bg-blue rounded-md p-3 pb-5 border border-pink/60'>
      <div className='top mb-2'>
        <Image
          src={imagePath}
          alt={`${projectTitle} image illustration`}
          width={1000}
          height={667}
          className='rounded-md h-[350px] desktop:h-[200px] object-cover'
        />
      </div>
      <div className='bottom'>
        <h4 className=' font-medium text-pink'>{projectTitle}</h4>
        <p className='text-[12px] text-[#9BBEC7]'>{date}</p>
        <p className='text-justify text-[14px] mt-2 font-normal'>
          {description}
        </p>
      </div>
    </div>
  )
}

export default ProjectCard
