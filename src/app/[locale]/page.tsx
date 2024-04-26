import { useTranslations } from 'next-intl'
import Image from 'next/image'
import Navigation from './components/Navigation'

export default function Home() {
  const t = useTranslations('HomePage')

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
        {/* <h3 className='text-black text-[15px] font-medium mb-2'>
          Future Honors Graduate of Iscae Casablanca
        </h3> */}
        <p className='text-justify font-normal tablet:text-[17px] desktop:text-[18px] text-white/80 mb-1 desktop:mb-2'>
          {t('para1')}
        </p>
        <p className='text-justify font-normal tablet:text-[17px] desktop:text-[18px] text-white/80 mb-6 desktop:mb-8'>
          {t('para2')}
        </p>
        <Navigation textBtn={t('textBtn')} />
      </div>
    </main>
  )
}
