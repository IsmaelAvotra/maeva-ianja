import Image from 'next/image'
import React from 'react'

const GoalProgressSection = () => {
  return (
    <section className='mt-8 relative' id='goals'>
      <h2>Goals Progress</h2>
      <p className='text-justify font-normal text-[15px] tablet:text-[16px]'>
        Here is how I want to progress in my career.
      </p>
      <picture>
        <source
          srcSet={'/goaltab.svg'}
          media='(min-width:768px)'
          width={657}
          height={1394}
          className='mt-8 w-full  mx-auto'
        />
        <Image
          src={'/goal.svg'}
          alt={'goal progress image illustration'}
          width={320}
          height={1396}
          className='mt-8 mx-auto'
        />
      </picture>
    </section>
  )
}

export default GoalProgressSection
