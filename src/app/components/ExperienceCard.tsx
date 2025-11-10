'use client'
import React from 'react'
import { IoCaretDownSharp } from 'react-icons/io5'

interface ExperienceCardProps {
  companyName: string
  date: string
  isOpen: boolean
  experienceTitle: string
  skillsAcquired: string[]
  onToggle: () => void
}

export const ExperienceCard: React.FC<ExperienceCardProps> = ({
  companyName,
  date,
  isOpen,
  onToggle,
  experienceTitle,
  skillsAcquired,
}) => {
  return (
    <div className={` ${isOpen ? 'bg-white' : 'bg-white/90'} rounded w-full`}>
      <div className=' border-b border-black/10'>
        <div
          className='top p-2 flex items-center justify-between text-blue'
          onClick={onToggle}
        >
          <div>
            <p className=' uppercase font-medium text-[14px]'>{companyName}</p>
            <p className='text-[12px] text-black/75'>{date}</p>
          </div>
          <IoCaretDownSharp
            className={`text-[20px] transition-all duration-500 ${isOpen ? ' rotate-180' : 'rotate-0'
              }`}
          />
        </div>
      </div>
      {!isOpen ? null : (
        <div className='content font-medium text-[14px] px-2 pt-2 pb-4'>
          <p className='text-blue'>{experienceTitle}</p>
          <ul className='mt-2 text-black/75'>
            {skillsAcquired.map((skill) => {
              return (
                <li key={skill} className='list-disc ml-4 font-normal'>
                  {skill}
                </li>
              )
            })}
          </ul>
        </div>
      )}
    </div>
  )
}
