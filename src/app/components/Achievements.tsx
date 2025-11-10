import React from 'react'
import { IoSchoolSharp } from 'react-icons/io5'
import { MdBusinessCenter } from 'react-icons/md'
import ExperiencesContent from './ExperiencesContent'
import { BiTask } from 'react-icons/bi'
import ProjectsContent from './Projects'
import { t } from '../lib/t'
import { cookies } from 'next/headers'
import { schoolsEN } from './data/schools.en'
import { schoolsFR } from './data/schools.fr'

const Achievements = () => {
  const lang = (cookies().get('lang')?.value || 'fr') as 'fr' | 'en'
  const selectedSchools = lang === "fr" ? schoolsFR : schoolsEN
  return (
    <section id='achievements'>
      <h2>{t(lang, 'achievements.title')}</h2>
      <p className='text-justify font-normal text-[15px] tablet:text-[16px]'>
        {t(lang, 'achievements.para')}
      </p>
      <div className='school-career mt-4 tablet:mt-6'>
        <h3 className='flex items-center gap-2 text-[18px] tablet:text-[20px] font-medium'>
          <IoSchoolSharp className='text-[#9BBEC7] text-[24px] tablet:text-[32px]' />
          {t(lang, 'schools.title')}
        </h3>
        <div className='experience-content flex gap-4 overflow-auto mt-4 tablet:mt-6'>
          {selectedSchools.map((school) => {
            return (
              <div
                key={school.id}
                className='experience-card bg-blue mb-4 min-w-[370px]  tablet:min-w-[400px]'
              >
                <p className='text-[14px] text-[#9BBEC7] text-titlecolor font-medium mb-1'>
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
          <MdBusinessCenter className='text-[#9BBEC7] text-[24px] tablet:text-[32px]' />
          {t(lang, 'professionals.title')} :
        </h3>
        <ExperiencesContent lang={lang} />
      </div>
      <div className='projects mt-8 tablet:mt-10'>
        <h3 className='flex items-center gap-2 text-[18px] tablet:text-[20px] font-medium'>
          <BiTask className='text-[#9BBEC7] text-[24px] tablet:text-[32px]' />
          {t(lang, 'projects.title')} :
        </h3>
        <ProjectsContent />
      </div>
    </section>
  )
}

export default Achievements
