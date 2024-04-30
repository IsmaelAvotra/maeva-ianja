import Image from 'next/image'
import React from 'react'

const AboutMe = () => {
  return (
    <section
      className='mb-8 flex flex-col gap-4 desktop:gap-12 desktop:flex-row desktop:items-center'
      id='about'
    >
      <div className='text desktop:flex-1'>
        <h2>About Me</h2>
        <p className='text-justify font-normal text-[15px] tablet:text-[16px]'>
          After two years at the prestigious ENCG Casablanca, I passed the exam
          to join ISCAE Casablanca, the top business school. Currently in
          Pre-Master, I’ve shown determination and proactivity since arriving in
          Morocco in 2021, enriching my profile through part-time jobs, my first
          internship, and various projects. I’ve developed cross-functional
          skills in team and time management, becoming organized, responsible,
          and committed. Interested in investment and entrepreneurship, I plan
          to pursue a career in corporate finance consulting and private equity,
          seeking opportunities in major organizations in this country.
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
