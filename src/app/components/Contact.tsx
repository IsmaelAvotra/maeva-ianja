import { cookies } from 'next/headers'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaLinkedin, FaWhatsapp } from 'react-icons/fa6'
import { MdOutlineEmail, MdOutlinePermPhoneMsg } from 'react-icons/md'
import { t } from '../lib/t'

const ContactSection = () => {
  const lang = (cookies().get('lang')?.value || 'fr') as 'fr' | 'en'
  return (
    <section className='mt-8' id='contact'>
      <div className='desktop:flex desktop:items-center'>
        <div className='desktop:flex-1 desktop:w-full'>
          <h2>{t(lang, 'contact.title')}</h2>
          <p className='text-justify font-normal text-[15px] tablet:text-[16px]'>
            {t(lang, 'contact.para')}
          </p>
          <div className='content px-2 py-4 border border-pink mt-6 rounded-lg'>
            <div className='linkedin flex items-center gap-2 mb-4'>
              <FaLinkedin className='text-[22px]' />
              <Link
                href={
                  'https://www.linkedin.com/in/maeva-ianja-estelle-andriantody-amie?utm_source=share_via&utm_content=profile&utm_medium=member_android'
                }
                target='_blank'
                className='hover:text-pink'
              >
                Maeva Ianja Estelle Andriantody
              </Link>
            </div>
            <div className='phone flex items-center gap-2 mb-4'>
              <MdOutlinePermPhoneMsg className='text-[22px]' />
              <Link href='tel:+33758240873' className='hover:text-pink'>
                +33-758-240-873
              </Link>
            </div>
            <div className='whatsapp flex items-center gap-2 mb-4'>
              <FaWhatsapp className='text-[22px]' />
              <Link
                href='whatsapp://send?text=Hello Maeva!&phone=+212688528344'
                className='hover:text-pink'
              >
                +212 688528344
              </Link>
            </div>
            <div className='mail flex items-center gap-2 mb-2'>
              <MdOutlineEmail className='text-[22px]' />
              <Link
                href='mailto:ianjaestelle.andriantodymaeva.25@neoma-bs.com'
                className='hover:text-pink'
              >
                ianjaestelle.andriantodymaeva.25@neoma-bs.com
              </Link>
            </div>
          </div>
        </div>
        <Image
          src={'/carte.png'}
          alt={'visit card'}
          width={1920}
          height={1080}
          className='desktop:flex-1 w-full max-w-[720px]'
        />
      </div>
    </section>
  )
}

export default ContactSection
