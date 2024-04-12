'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

const Navigation = ({ textBtn }: { textBtn: string }) => {
  const pathname = usePathname()

  const getLanguageWithoutSlash = () => {
    const pathParts = pathname.split('/')
    return pathParts.length > 1 ? pathParts[1] : 'en'
  }

  return (
    <Link
      href={`/${getLanguageWithoutSlash()}/profile`}
      className='flex items-center gap-2 bg-pink rounded justify-center py-2 tablet:py-3 desktop:w-[50%] text-black font-medium'
    >
      {textBtn}
    </Link>
  )
}

export default Navigation
