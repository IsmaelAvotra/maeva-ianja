import React from 'react'
import { FaLinkedin, FaWhatsapp } from 'react-icons/fa6'
import { MdOutlineEmail, MdOutlinePermPhoneMsg } from 'react-icons/md'

const ContactSection = () => {
  return (
    <section className='mt-8' id='contact'>
      <h2>Get in touch</h2>
      <p className='text-justify font-normal text-[15px] tablet:text-[16px]'>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut totam
        deleniti eum est debitis ea blanditiis voluptatum qui perspiciatis? Est
        quidem culpa sequi eligendi amet.
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
    </section>
  )
}

export default ContactSection
