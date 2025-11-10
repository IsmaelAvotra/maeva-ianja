'use client'
import React, { useEffect } from 'react'
import Image from 'next/image'
import Navigation from './Navigation'
import Aos from 'aos'
import 'aos/dist/aos.css'
import { t } from '../lib/t'

const Banner = ({ lang }: { lang: 'fr' | 'en' }) => {
  useEffect(() => {
    Aos.init({
      duration: 600,
      delay: 200,
    })
  }, [])

  return (
    <main className=' h-full max-w-[1600px] mx-auto desktop:flex flex-row-reverse desktop:items-center desktop:gap-12  mt-4 px-3 tablet:px-5 pb-10'>
      <div
        className='image mb-4 tablet:mb-6 desktop:flex-[2.5]'
        data-aos='fade-up'
        data-aos-delay='500'
      >
        <Image
          src={'/home-image.jpeg'}
          alt={"maeva ianja's photo"}
          width={1000}
          height={714}
          className='rounded h-[54vh] tablet:h-auto desktop:h-[640px] w-full object-cover'
        />
      </div>

      <div
        className='text desktop:flex-[3]'
        data-aos='fade-up'
        data-aos-delay='500'
      >
        <h1 className='text-[28px] tablet:text-[36px] desktop:text-[40px] font-extrabold text-pink mb-1'>
          Maeva Ianja Estelle
        </h1>

        <p className='text-justify font-normal tablet:text-[17px] desktop:text-[18px] text-white/80 mb-1 desktop:mb-2'>
          {t(lang, 'banner.para1')}
        </p>

        <p className='text-justify font-normal tablet:text-[17px] desktop:text-[18px] text-white/80 mb-6 desktop:mb-8'>
          {t(lang, 'banner.para2')}
        </p>

        <Navigation textBtn={t(lang, 'banner.button')} />
      </div>
    </main>
  )
}

export default Banner
