import { getLocale } from 'next-intl/server'
import Link from 'next/link'

const NavLinks = async () => {
  const locale = await getLocale()
  return (
    <nav
      className={`bg-blue w-full absolute left-0 px-2 flex flex-col gap-6 items-center top-[80px] transition-all duration-500 pt-2 pb-6 z-[-99] translate-y-0`}
    >
      <Link href='/' className='text-[18px]'>
        Home
      </Link>
      <Link href={`/${locale}/profile/#about`} className='text-[18px]'>
        About Me
      </Link>
      <Link href={`/${locale}/profile/#achievements`} className='text-[18px]'>
        Achievements
      </Link>
      <Link href={`/${locale}/profile/#goals`} className='text-[18px]'>
        Goal Progress
      </Link>
      <Link href={`/${locale}/profile/#means`} className='text-[18px]'>
        My Means
      </Link>
      <Link href={`/${locale}/profile/#contact`} className='text-[18px]'>
        Contact Me
      </Link>
    </nav>
  )
}

export default NavLinks
