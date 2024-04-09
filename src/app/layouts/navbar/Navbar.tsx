import SwitchLanguage from '@/app/components/SwitchLanguage'
import Image from 'next/image'
import React from 'react'
import { IoMenu } from 'react-icons/io5'

const Navbar = () => {
  return (
    <div className='bg-blue sticky top-0 flex items-center justify-between px-2'>
      <div className='logo w-[80px] h-[80px]'>
        <Image
          src={'/logo.png'}
          alt={"logo for maeva ianja's portfolio"}
          width={1563}
          height={1563}
          priority
        />
      </div>
      <div className='flex items-center gap-4'>
        <SwitchLanguage />
        <IoMenu className='text-[36px] text-white' />
      </div>
    </div>
  )
}

export default Navbar
