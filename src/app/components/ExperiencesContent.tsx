'use client'
import React, { useState } from 'react'
import { ExperienceCard } from './ExperienceCard'
import { experienceDataEN } from './data/experienceDataEN'
import { experienceDataFR } from './data/experienceDataFR'

const ExperiencesContent = ({ lang }: { lang: 'fr' | 'en' }) => {
  const [openSection, setOpenSection] = useState<number | null>(0)

  const selectedExperiences = lang === "fr" ? experienceDataFR : experienceDataEN

  const handleToggle = (sectionIndex: number) => {
    setOpenSection(openSection === sectionIndex ? null : sectionIndex)
  }

  return (
    <div className='mt-4 flex flex-col gap-2'>
      {selectedExperiences.map((exp, index) => {
        return (
          <ExperienceCard
            key={exp.date}
            companyName={exp.companyName}
            date={exp.date}
            isOpen={openSection === index}
            experienceTitle={exp.experienceTitle}
            skillsAcquired={exp.skillsAcquired}
            onToggle={() => handleToggle(index)}
          />
        )
      })}
    </div>
  )
}

export default ExperiencesContent
