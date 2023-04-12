import React from 'react'
import { motion } from 'framer-motion'
import './About.scss'

import { images } from '../../Constants'
import { MotionWrap } from '../../wrapper'
import { AppWrap } from '../../wrapper'

const abouts = [
  {
    title: 'Plumbing installations & Repairs',
    description: 'We offer anything to do with Plumbing whether it be installing, repairing and maintaining of water pipes, drains, faucets, bathrooms, radiators and many more',
    imgUrl: images.tap
  },
  {
    title: 'Gas appliance installation and gas safety checks',
    description: 'As we are Gas Safe certified we are happy to share that we can help with the installation, maintence & repair of gas appliances and also are able to carry out the inspection and testing of these Gas Appliances to make sure they are safe to use and fit with the relevent safety regulations',
    imgUrl: images.gasSafe
  },
  {
    title: 'Emergency plumbing and gas services',
    description: 'We also offer assistance to any emergency situations that may arise, whether that be issues such as a sudden leak, burst pipes, gas leaks, boiler breakdowns and any other emergency situations that may appear',
    imgUrl: images.emergency
  }
]

const About = () => {
  return (
    <>
      <h2 className='head-text'>
        Plumbing problems? <span>We've got you covered</span>
      </h2>

      <div className='app__profiles'>
        {abouts.map((about,index) => (
          <motion.div 
          whileInView={{ opacity: 1 }}
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.5, type: 'tween'}}
          className='app__profile-item' 
          key={about.title + index}>
            <img src={about.imgUrl} alt={about.title} />
            <h2 className='bold-text' style={{ marginTop: 20}}>{about.title}</h2>
            <p className='p-text' style={{ marginTop: 10}}>{about.description}</p>
          </motion.div>
        ))}
      </div>
    </>
  )
}

export default AppWrap(About, 'about')