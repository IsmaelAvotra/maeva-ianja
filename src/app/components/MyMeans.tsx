import Image from 'next/image'
import React from 'react'
import { FaLocationCrosshairs } from 'react-icons/fa6'
import { IoMegaphoneOutline } from 'react-icons/io5'
import { MdQueryStats } from 'react-icons/md'

const MyMeansSection = () => {
  return (
    <section className='mt-8' id='means'>
      <h2>My means</h2>
      <p className='text-justify font-normal text-[15px] tablet:text-[16px] '>
        In order to achieve this Goal project, I carried out an in-depth study
        on my profile to establish my professional marketing strategy.
      </p>
      <div className='content mt-6'>
        <div className='swot mb-6'>
          <div className='flex items-center gap-2 mb-1 w-full'>
            <MdQueryStats className='text-[24px] desktop:text-[28px] text-pink' />
            <p className='font-medium  desktop:text-[20px]'>
              S.W.O.T results :
            </p>
          </div>
          <p className='text-[15px] text-justify text-white/90 font-normal'>
            With my academic excellence within ISCAE, my status as an
            international student as well as my qualities as an active,
            responsible and committed person, I have the strength to overcome my
            lack of experience in the field of finance and the rapid evolution
            of the economic environment with technology to face the trends of
            Green Finance, Fintech and Green Finance as an opportunity for my
            professional and entrepreneurial career.
          </p>
        </div>
        <div className='positioning mb-6'>
          <div className='flex items-center gap-2 mb-1 w-full'>
            <FaLocationCrosshairs className='text-[20px] desktop:text-[24px] text-pink' />
            <p className='font-medium  desktop:text-[20px]'>
              Positioning statement :
            </p>
          </div>
          <p className='text-[15px] text-justify text-white/90 font-normal'>
            To international investment banking or companies who are seeking to
            improve the company portfolios performance, I am a future Private
            Equity Analyst who puts excellence and commitment at the heart of
            her value so that my proposal is your decision.
          </p>
        </div>
        <div className='mix-marketing mb-6'>
          <div className='flex items-center gap-2 mb-1 w-full'>
            <IoMegaphoneOutline className='text-[24px] desktop:text-[28px] text-pink' />
            <p className='font-medium  desktop:text-[20px]'>Mix marketing :</p>
          </div>
          <p className='text-[15px] text-justify text-white/90 mb-4 font-normal'>
            After a strategic study, here is how it will be implemented at the
            operational level.
          </p>
          <div className='w-full overflow-hidden'>
          <Image
            src={'/mixm.png'}
            alt={'marketing photo illustration'}
            width={1920}
            height={1080}
            className='rounded transform scale-125 desktop:scale-100 mt-10 desktop:mt-5 h-auto desktop:w-[80%] mx-auto'
          />
          </div>
        </div>
      </div>
    </section>
  )
}

export default MyMeansSection
