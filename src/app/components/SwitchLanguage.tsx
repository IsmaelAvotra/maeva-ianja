'use client'
import { usePathname, useRouter } from 'next/navigation'
import React from 'react'

const SwitchLanguage = () => {
  const router = useRouter()
  const pathname = usePathname()

  const getLanguageWithoutSlash = () => {
    const pathParts = pathname.split('/')
    return pathParts.length > 1 ? pathParts[1] : 'en'
  }

  const toggleLanguage = () => {
    router.push(getLanguageWithoutSlash() === 'en' ? '/fr' : '/en')
  }
  return (
    <div
      className='relative border cursor-pointer border-white w-[70px] h-[36px] rounded-full'
      onClick={toggleLanguage}
    >
      <div
        className={`bg-white absolute top-[1px] ${
          getLanguageWithoutSlash() === 'en'
            ? 'left-[2px]'
            : 'translate-x-[34px]'
        } transition-all text-white duration-500 ease-in-out w-[32px] h-[32px] grid place-content-center rounded-full`}
      >
        <p className='text-blue uppercase font-semibold text-[14px] select-none'>
          {getLanguageWithoutSlash()}
        </p>
      </div>
    </div>
  )
}

export default SwitchLanguage
