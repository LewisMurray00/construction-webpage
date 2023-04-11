import React from 'react'
import './Header.scss'

import { images } from '../../Constants'
import { AppWrap } from '../../wrapper'

const Header = () => {
  return (
    <div className='app__header app__flex'>
        
        <div className='app__header-info'>    
            <div className='app__header-badge'>
                <div className='badge-cmp app__flex'>
                    <span>🛠️</span>
                    <div style={{ marginLeft: 20}}>
                        <h1 className='head-text'>WeBuild</h1>
                    </div>
                </div>

                <div className='tag-cmp app__flex'>
                    <p className='p-text'>Plumbing and Gas</p>
                </div>
            </div>
        </div>

        <div className='app__header-img'>
            <img src={images.profile} alt='profile_bg' />

            <img src={images.circle} alt='profile_circle' className='overlay_circle' />
        </div>

        <div className='app__header-circles'>
            {[images.tap, images.gasSafe, images.wrench].map((circle, index) =>(
                <div className='circle-cmp app__flex' key={`circle-${index}`}>
                    <img src={circle} alt='circle' />
                </div>
            ))}
        </div>
    </div>
  )
}

export default AppWrap(Header, 'home')