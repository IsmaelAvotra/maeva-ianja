import Image from 'next/image'
import React from 'react'
import { t } from '../lib/t'
import { cookies } from 'next/headers'

const AboutMe = () => {
  const lang = (cookies().get('lang')?.value || 'fr') as 'fr' | 'en'
  return (
    <section
      className='mb-8 flex flex-col gap-4 desktop:gap-12 desktop:flex-row desktop:items-center'
      id='about'
    >
      <div className='text desktop:flex-1'>
        <h2>{t(lang, 'about.title')}</h2>
        <p className='text-justify font-normal text-[15px] tablet:text-[16px]'>
          {t(lang, 'about.para1')}
        </p>
        <p className='text-justify font-normal text-[15px] tablet:text-[16px] my-2 tablet:my-4'>
          {t(lang, 'about.para2')}
        </p>
        <p className='text-justify font-normal text-[15px] tablet:text-[16px]'>
          {t(lang, 'about.para3')}
        </p>
      </div>
      <div
        className='desktop:flex-1 rounded'
        style={{
          background: `url('/about-image.jpeg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'bottom',
        }}
      >
        <div className='hidden desktop:block desktop:h-[640px] rounded'></div>
        <Image
          src={'/about-image.jpeg'}
          alt={`Ianja's image presentaion`}
          width={1000}
          height={714}
          className='rounded desktop:hidden'
        />
      </div>
    </section>
  )
}

export default AboutMe
