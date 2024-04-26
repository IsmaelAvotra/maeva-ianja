import SwitchLanguage from '@/app/[locale]/components/SwitchLanguage'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { IoMenu } from 'react-icons/io5'
import NavLinks from '../../components/Links'

const Navbar = () => {
  return (
    <div className='bg-blue sticky top-0 flex items-center justify-between px-2 tablet:px-4 z-[999]'>
      <Link className='logo w-[80px] h-[80px] cursor-pointer' href={'/'}>
        <Image
          src={'/logo.png'}
          alt={"logo for maeva ianja's portfolio"}
          width={1563}
          height={1563}
          priority
        />
      </Link>
      {/* <NavLinks /> */}
      <div className='flex items-center gap-4'>
        <SwitchLanguage />
        <IoMenu className='text-[36px] text-white' />
      </div>
    </div>
  )
}

export async function getServerSideProps(context: any) {
  const initialMenuOpen = false
  return {
    props: {
      initialMenuOpen,
    },
  }
}

export default Navbar
