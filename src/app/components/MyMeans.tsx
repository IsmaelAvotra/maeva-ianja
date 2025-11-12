import { cookies } from 'next/headers'
import Image from 'next/image'
import React from 'react'
import { FaLocationCrosshairs } from 'react-icons/fa6'
import { IoMegaphoneOutline } from 'react-icons/io5'
import { MdQueryStats } from 'react-icons/md'
import { t } from '../lib/t'

const MyMeansSection = () => {
  const lang = (cookies().get('lang')?.value || 'fr') as 'fr' | 'en'
  return (
    <section className='mt-8' id='means'>
      <h2>{t(lang, 'drivers.title')}</h2>
      <div className='content mt-6'>
        <div className='swot mb-6'>
          <div className='flex items-center gap-2 mb-1 w-full'>
            <MdQueryStats className='text-[24px] desktop:text-[28px] text-[#9BBEC7]' />
            <p className='font-medium  desktop:text-[20px]'>
              {t(lang, 'drivers.swotTitle')} :
            </p>
          </div>
          <p className='text-[15px] text-justify text-white/90 font-normal'>
            {t(lang, 'drivers.swotPara')}
          </p>
        </div>
        <div className='positioning mb-6'>
          <div className='flex items-center gap-2 mb-1 w-full'>
            <FaLocationCrosshairs className='text-[20px] desktop:text-[24px] text-[#9BBEC7]' />
            <p className='font-medium  desktop:text-[20px]'>
              {t(lang, 'drivers.positionTitle')} :
            </p>
          </div>
          <p className='text-[15px] text-justify text-white/90 font-normal'>
            {t(lang, 'drivers.positionPara')}
          </p>
        </div>
        <div className='mix-marketing mb-6'>
          <div className='flex items-center gap-2 mb-1 w-full'>
            <IoMegaphoneOutline className='text-[24px] desktop:text-[28px] text-[#9BBEC7]' />
            <p className='font-medium  desktop:text-[20px]'>{t(lang, 'drivers.marketingTitle')} :</p>
          </div>
          <p className='text-[15px] text-justify text-white/90 mb-4 font-normal'>
            {t(lang, 'drivers.marketingPara')}
          </p>
          <div className='w-full overflow-hidden'>
            <Image
              src={lang == 'fr' ? '/mixmFR.png' : '/mixmEN.png'}
              alt={'marketing photo illustration'}
              width={1920}
              height={1080}
              className='rounded transform scale-115 desktop:scale-100 mt-4 desktop:mt-5 h-auto desktop:w-[80%] mx-auto'
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default MyMeansSection
