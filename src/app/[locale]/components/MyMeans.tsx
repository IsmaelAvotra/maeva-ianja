import Image from 'next/image'
import React from 'react'
import { FaLocationCrosshairs } from 'react-icons/fa6'
import { IoMegaphoneOutline } from 'react-icons/io5'
import { MdQueryStats } from 'react-icons/md'

const MyMeansSection = () => {
  return (
    <section className='mt-8'>
      <h2>My means</h2>
      <p className='text-justify font-normal text-[15px] tablet:text-[16px] '>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut totam
        deleniti eum est debitis ea blanditiis voluptatum qui perspiciatis? Est
        quidem culpa sequi eligendi amet.
      </p>
      <div className='content mt-6'>
        <div className='swot mb-6'>
          <div className='title flex items-center gap-2 mb-1'>
            <MdQueryStats className='text-[24px] text-pink' />
            <p className='font-medium'>S.W.O.T results :</p>
          </div>
          <p className='text-[15px] text-justify text-white/90 font-normal'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
            veritatis optio distinctio pariatur velit possimus voluptas iste
            ipsa id, iure sed provident debitis eligendi eaque dicta corporis
            ipsum natus suscipit unde aperiam laudantium totam voluptate veniam?
            Quae, eligendi itaque. Consequuntur?
          </p>
        </div>
        <div className='positioning mb-6'>
          <div className='title flex items-center gap-2 mb-1'>
            <FaLocationCrosshairs className='text-[20px] text-pink' />
            <p className='font-medium'>Positioning statement :</p>
          </div>
          <p className='text-[15px] text-justify text-white/90 font-normal'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
            veritatis optio distinctio pariatur velit possimus voluptas iste
            ipsa id, iure sed provident debitis eligendi eaque dicta corporis
            ipsum natus suscipit unde aperiam laudantium totam voluptate veniam?
            Quae, eligendi itaque. Consequuntur?
          </p>
        </div>
        <div className='mix-marketing mb-6'>
          <div className='title flex items-center gap-2 mb-1'>
            <IoMegaphoneOutline className='text-[24px] text-pink' />
            <p className='font-medium'>Mix marketing :</p>
          </div>
          <p className='text-[15px] text-justify text-white/90 mb-4 font-normal'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
            veritatis optio distinctio pariatur velit possimus voluptas iste
            ipsa id, iure sed provident debitis eligendi eaque dicta corporis
            ipsum natus suscipit unde aperiam laudantium totam voluptate veniam?
            Quae, eligendi itaque. Consequuntur?
          </p>
          <Image
            src={'/team.jpg'}
            alt={'marketing photo illustration'}
            width={1000}
            height={667}
            className='rounded'
          />
        </div>
      </div>
    </section>
  )
}

export default MyMeansSection
