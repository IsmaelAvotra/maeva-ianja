'use client'
import React, { useState } from 'react'

const SwitchLanguage = () => {
  const [language, setLanguage] = useState('en')

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'fr' : 'en')
  }
  return (
    <div
      className='relative border cursor-pointer border-white w-[70px] h-[36px] rounded-full'
      onClick={toggleLanguage}
    >
      <div
        className={`bg-white absolute top-[1px] ${
          language === 'en' ? 'left-[2px]' : 'translate-x-[34px]'
        } transition-all text-white duration-500 ease-in-out w-[32px] h-[32px] grid place-content-center rounded-full`}
      >
        <p className='text-blue uppercase font-semibold text-[14px]'>
          {language}
        </p>
      </div>
    </div>
  )
}

export default SwitchLanguage
