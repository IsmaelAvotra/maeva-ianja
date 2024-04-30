import Link from 'next/link'
import React from 'react'

const Navigation = ({ textBtn }: { textBtn: string }) => {
  return (
    <Link
      href={`/profile`}
      className='flex items-center gap-2 bg-pink rounded justify-center py-2 tablet:py-3 desktop:w-[50%] text-black font-medium'
    >
      {textBtn}
    </Link>
  )
}

export default Navigation
