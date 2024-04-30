'use client'
import React, { useState } from 'react'
import { experienceData } from './data/experiences'
import { ExperienceCard } from './ExperienceCard'

const ExperiencesContent = () => {
  const [openSection, setOpenSection] = useState<number | null>(0)
  const handleToggle = (sectionIndex: number) => {
    setOpenSection(openSection === sectionIndex ? null : sectionIndex)
  }

  return (
    <div className='mt-4 flex flex-col gap-2'>
      {experienceData.map((exp, index) => {
        return (
          <ExperienceCard
            key={exp.date}
            companyName={exp.companyName}
            date={exp.date}
            isOpen={openSection === index}
            experienceTitle={exp.experienceTitle}
            para={exp.para}
            skillsAcquired={exp.skillsAcquired}
            onToggle={() => handleToggle(index)}
          />
        )
      })}
    </div>
  )
}

export default ExperiencesContent
