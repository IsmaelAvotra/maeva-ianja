import React from 'react'
import { IoSchoolSharp } from 'react-icons/io5'
import { schools } from './data/schools'
import { MdBusinessCenter } from 'react-icons/md'
import ExperiencesContent from './ExperiencesContent'
import { BiTask } from 'react-icons/bi'
import ProjectsContent from './Projects'

const Achievements = () => {
  return (
    <section id='achievements'>
      <h2>Achievements</h2>
      <p className='text-justify font-normal text-[15px] tablet:text-[16px]'>
        To further illuminate my profile, please find below the following
        headings: my educational background, professional experiences, and some
        projects I’ve had the honor to participate in.
      </p>
      <div className='school-career mt-4 tablet:mt-6'>
        <h3 className='flex items-center gap-2 text-[18px] tablet:text-[20px] font-medium'>
          <IoSchoolSharp className='text-pink text-[24px] tablet:text-[32px]' />
          Educational background :
        </h3>
        <div className='experience-content flex gap-4 overflow-auto mt-4 tablet:mt-6'>
          {schools.map((school) => {
            return (
              <div
                key={school.id}
                className='experience-card bg-blue mb-4 min-w-[370px]  tablet:min-w-[400px]'
              >
                <p className='text-[14px] text-black/75 text-titlecolor font-medium mb-1'>
                  {school.date}
                </p>
                <div className='role-company flex items-center justify-between mb-2'>
                  <p className='font-semibold text-[16px]'>{school.grade}</p>
                  <p className='text-pink font-semibold'>{school.schoolName}</p>
                </div>
                <p className='text-[14px] text-justify text-white/90'>
                  {school.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
      <div className='experiences  mt-4 tablet:mt-6'>
        <h3 className='flex items-center gap-2 text-[18px] tablet:text-[20px] font-medium'>
          <MdBusinessCenter className='text-pink text-[24px] tablet:text-[32px]' />
          Professional experiences :
        </h3>
        <ExperiencesContent />
      </div>
      <div className='projects mt-8 tablet:mt-10'>
        <h3 className='flex items-center gap-2 text-[18px] tablet:text-[20px] font-medium'>
          <BiTask className='text-pink text-[24px] tablet:text-[32px]' />
          Projects :
        </h3>
        <ProjectsContent />
      </div>
    </section>
  )
}

export default Achievements
