import React from 'react'
import AboutMe from '../components/About'
import Achievements from '../components/Achievements'

const Profile = () => {
  return (
    <div className='min-h-screen pt-4 px-2 tablet:px-6 desktop:px-8 pb-16'>
      <AboutMe />
      <Achievements />
    </div>
  )
}

export default Profile
