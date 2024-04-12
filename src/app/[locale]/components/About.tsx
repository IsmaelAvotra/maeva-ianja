import Image from 'next/image'
import React from 'react'

const AboutMe = () => {
  return (
    <section className='mb-8 flex flex-col gap-4 desktop:gap-12 desktop:flex-row desktop:items-center'>
      <div className='text desktop:flex-1'>
        <h2>About Me</h2>
        <p className='text-justify font-normal text-[15px] tablet:text-[16px]'>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam ex
          esse labore, laborum excepturi eius porro fuga asperiores sint, eum
          deserunt temporibus totam? Iste praesentium molestias ex possimus
          eaque eius quis earum ipsa totam, consequuntur dicta omnis facere
          voluptatem, tenetur ratione sunt odit vitae doloribus ipsam,
          consequatur tempore quaerat nam.
        </p>
      </div>
      <div className='video desktop:flex-1'>
        <Image
          src={'/team.jpg'}
          alt={`Ianja's video presentaion`}
          width={1000}
          height={714}
          className='rounded'
        />
      </div>
    </section>
  )
}

export default AboutMe
