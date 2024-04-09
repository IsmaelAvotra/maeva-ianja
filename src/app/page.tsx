import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <main className=' h-full desktop:flex flex-row-reverse desktop:items-center desktop:gap-8  mt-4 px-3 tablet:px-5 pb-10'>
      <div className='image mb-4 tablet:mb-6 desktop:flex-1'>
        <Image
          src={'/home-photo.jpg'}
          alt={"maeva ianja's photo"}
          width={1000}
          height={714}
          className='rounded h-[360px] tablet:h-auto desktop:h-[560px] object-cover'
        />
      </div>
      <div className='text desktop:flex-1'>
        <h1 className='text-[28px] tablet:text-[36px] desktop:text-[40px] font-extrabold text-pink mb-1'>
          Maeva Ianja Estelle
        </h1>
        <p className='text-justify font-normal tablet:text-[17px] desktop:text-[18px] text-white/80 mb-4 desktop:mb-8'>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam,
          quos ut. Impedit sapiente dolores laborum voluptatum, quae quibusdam
          illum suscipit? Consectetur, voluptatem a. Doloribus ut expedita alias
          possimus temporibus architecto.
        </p>
        <Link
          href={'/'}
          className='flex items-center gap-2 bg-pink rounded justify-center py-2 tablet:py-3 desktop:w-[50%] text-black font-medium'
        >
          Decouvrir plus
        </Link>
      </div>
    </main>
  )
}
