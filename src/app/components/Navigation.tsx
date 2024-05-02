import Link from 'next/link'
import React from 'react'

const Navigation = ({ textBtn }: { textBtn: string }) => {
  return (
    <Link
      href={`/profile`}
      className='flex items-center gap-2 bg-pink hover:bg-blue border border-[transparent] hover:border-pink rounded justify-center py-2 tablet:py-3 desktop:w-[50%] text-black hover:text-pink font-medium'
    >
      {textBtn}
    </Link>
  )
}

export default Navigation
