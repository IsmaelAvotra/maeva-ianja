'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { IoClose, IoMenu } from 'react-icons/io5'

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
  }

  return (
    <div className='bg-blue sticky top-0 flex items-center justify-between px-2 tablet:px-4 z-[999]'>
      <Link
        className='logo w-[80px] bg-red desktop:w-[100px] h-[80px] desktop:h-[100px] cursor-pointer'
        href={'/'}
      >
        <Image
          src={'/logo.png'}
          alt={"logo for maeva ianja's portfolio"}
          width={1563}
          height={1563}
          priority
        />
      </Link>
      <nav
        className={`bg-blue  w-full absolute desktop:relative left-0 px-2 flex flex-col desktop:flex-row gap-6 tablet:gap-8 items-center desktop:justify-end top-[80px] desktop:top-0 transition-all duration-500 pt-2 desktop:pt-0 pb-6 desktop:pb-0 z-[-99] ${
          menuOpen
            ? 'translate-y-0 desktop:translate-y-0'
            : '-translate-y-[400px] desktop:translate-y-0'
        }`}
      >
        <Link
          href='/'
          className='text-[18px]'
          onClick={() => setMenuOpen(false)}
        >
          Home
        </Link>
        <Link
          href={`/profile/#about`}
          className='text-[18px]'
          onClick={() => setMenuOpen(false)}
        >
          About Me
        </Link>
        <Link
          href={`/profile/#achievements`}
          className='text-[18px]'
          onClick={() => setMenuOpen(false)}
        >
          Achievements
        </Link>
        <Link
          href={`/profile/#goals`}
          className='text-[18px]'
          onClick={() => setMenuOpen(false)}
        >
          Goal Progress
        </Link>
        <Link
          href={`/profile/#means`}
          className='text-[18px]'
          onClick={() => setMenuOpen(false)}
        >
          My Means
        </Link>
        <Link
          href={`/profile/#contact`}
          className='text-[18px]'
          onClick={() => setMenuOpen(false)}
        >
          Contact Me
        </Link>
      </nav>
      <div
        className='flex items-center gap-4 desktop:hidden'
        onClick={toggleMenu}
      >
        {menuOpen ? (
          <IoClose className='text-[36px] text-white cursor-pointer' />
        ) : (
          <IoMenu className='text-[36px] text-white cursor-pointer' />
        )}
      </div>
    </div>
  )
}

export default Navbar
