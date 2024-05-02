import React from 'react'
import AboutMe from '../components/About'
import ContactSection from '../components/Contact'
import GoalProgressSection from '../components/GoalProgress'
import Achievements from '../components/Achievements'
import MyMeansSection from '../components/MyMeans'

const Profile = () => {
  return (
    <div className='min-h-screen max-w-[1600px] mx-auto pt-4 px-2 tablet:px-6 desktop:px-8 pb-16'>
      <AboutMe />
      <Achievements />
      <GoalProgressSection />
      <MyMeansSection />
      <ContactSection />
    </div>
  )
}

export default Profile
