'use client'
import Image from 'next/image'
import Link from 'next/link'
import { t } from '@/app/lib/t'
import LanguageDropdown from '../../components/languageDropdown'
import { useState } from 'react'
import { IoClose, IoMenu } from 'react-icons/io5'

export default function Navbar({ lang }: { lang: 'fr' | 'en' }) {
  const [menuOpen, setMenuOpen] = useState(false)

  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
  }
  return (
    <div className="bg-blue max-w-[1600px] mx-auto border-b border-white/10 shadow-sm sticky top-0 flex items-center justify-between px-4 desktop:pb-0 py-2 tablet:py-3 z-[999]">

      <Link href="/" className="logo w-[80px] tablet:w-[90px] desktop:w-[100px] h-[80px] tablet:h-[90px] desktop:h-[100px] cursor-pointer">
        <Image
          src="/logo.png"
          width={200}
          height={200}
          alt={"logo for maeva ianja's portfolio"}
          priority
        />
      </Link>
      <div>
        <nav
          className={`bg-blue w-full absolute desktop:relative left-0 px-2 flex flex-col desktop:flex-row gap-6 tablet:gap-8 desktop:gap-10 items-center desktop:justify-end top-[80px] desktop:top-0 transition-all duration-500 pt-2 desktop:pt-0 pb-6 desktop:pb-0 z-[-99] desktop:z-auto ${menuOpen
            ? 'translate-y-0 desktop:translate-y-0'
            : '-translate-y-[400px] tablet:-translate-y-[450px] desktop:translate-y-0'
            }`}
        >
          <Link
            href='/'
            className='text-[18px] hover:text-pink active:text-pink focus:text-pink'
            onClick={() => setMenuOpen(false)}
          >
            {t(lang, 'navbar.home')}
          </Link>
          <Link
            href={`/profile/#about`}
            className='text-[18px] hover:text-pink active:text-pink focus:text-pink'
            onClick={() => setMenuOpen(false)}
          >
            {t(lang, 'navbar.about')}
          </Link>
          <Link
            href={`/profile/#achievements`}
            className='text-[18px] hover:text-pink active:text-pink focus:text-pink'
            onClick={() => setMenuOpen(false)}
          >
            {t(lang, 'navbar.achievements')}
          </Link>
          <Link
            href={`/profile/#goals`}
            className='text-[18px] hover:text-pink active:text-pink focus:text-pink'
            onClick={() => setMenuOpen(false)}
          >
            {t(lang, 'navbar.goals')}
          </Link>
          <Link
            href={`/profile/#means`}
            className='text-[18px] hover:text-pink active:text-pink focus:text-pink'
            onClick={() => setMenuOpen(false)}
          >
            {t(lang, 'navbar.means')}
          </Link>
          <Link
            href={`/profile/#contact`}
            className='text-[18px] hover:text-pink active:text-pink focus:text-pink'
            onClick={() => setMenuOpen(false)}
          >
            {t(lang, 'navbar.contact')}
          </Link>
          <div className='hidden desktop:block'>
            <LanguageDropdown lang={lang} />
          </div>
        </nav>
      </div>
      <div className='flex gap-4 tablet:gap-8 desktop:hidden'>
        <div className='desktop:hidden'>
          <LanguageDropdown lang={lang} />
        </div>
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
    </div>
  )
}
