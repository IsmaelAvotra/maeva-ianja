import Image from 'next/image'
import React from 'react'
import { FaLinkedin, FaWhatsapp } from 'react-icons/fa6'
import { MdOutlineEmail, MdOutlinePermPhoneMsg } from 'react-icons/md'

const ContactSection = () => {
  return (
    <section className='mt-8' id='contact'>
      <div className='desktop:flex desktop:items-center'>
        <div className='desktop:flex-1 desktop:w-full'>
          <h2>Get in touch</h2>
          <p className='text-justify font-normal text-[15px] tablet:text-[16px]'>
            If you appreciate my work, feel free to consider recommending me to
            others or even recruiting me. Additionally, you can reach out
            directly if you need any services. Thank you.
          </p>
          <div className='content px-2 py-4 border border-pink mt-6 rounded-lg'>
            <div className='linkedin flex items-center gap-2 mb-4'>
              <FaLinkedin className='text-[22px]' />
              <p>Maeva Ianja Estelle</p>
            </div>
            <div className='phone flex items-center gap-2 mb-4'>
              <MdOutlinePermPhoneMsg className='text-[22px]' />
              <p>+212 654559093</p>
            </div>
            <div className='whatsapp flex items-center gap-2 mb-4'>
              <FaWhatsapp className='text-[22px]' />
              <p>+212 654559093</p>
            </div>
            <div className='mail flex items-center gap-2 mb-2'>
              <MdOutlineEmail className='text-[22px]' />
              <p>maevaianja@gmail.com</p>
            </div>
          </div>
        </div>
        <Image
          src={'/carte.png'}
          alt={'visit card'}
          width={1920}
          height={1080}
          className='desktop:flex-1 max-w-[720px]'
        />
      </div>
    </section>
  )
}

export default ContactSection
