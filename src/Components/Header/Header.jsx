import React from 'react'
import './Header.scss'

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

        <div>
            
        </div>
    </div>
  )
}

export default AppWrap(Header, 'home')