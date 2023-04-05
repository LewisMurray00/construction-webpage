import React, { useState } from 'react'
import './Header.scss'

import {FaInfoCircle, FaSearch, FaUser,} from 'react-icons/fa'
import { HiMenuAlt4, HiX} from 'react-icons/hi'

const Header = () => {

    const [toggle, setToggle] = useState(false);

  return (
    <header className='app__header'>
        
        <div className='app__header-logo'>
            <a href='#'> We<span>build</span></a>
        </div>

        <ul className='app__header-links'>
            {['home', 'about', 'services', 'projects', 'contact', 'blogs'].map((item)=>(
                <li key={`link-${item}`} className='app__flex p-text'>
                    <div />
                    <a href={`#${item}`}>{item}</a>
                </li>
            ))}
        </ul>

        <div className='app__header-menu'>
            <HiMenuAlt4 onClick={() => setToggle(true)} />
            {
                toggle && (
                    <div>
                        <HiX onClick={() => setToggle(false)} />

                        <ul>
                        {['home', 'about', 'services', 'projects', 'contact', 'blogs'].map((item)=>(
                            <li key={{item}}>
                                <a href={`#${item}`} onClick={()=> setToggle(false)}>{item}</a>
                            </li>
                        ))}
                        </ul>
                    </div>
                )
            }
        </div>
        
        {/* <a href='#' className='app__header-logo'> We<span>build</span></a>

        <nav className='app__header-navbar'>
            <a href='#home'>Home</a>
            <a href='#about'>About</a>
            <a href='#services'>Services</a>
            <a href='#projects'>Projects</a>
            <a href='#pricing'>Pricing</a>
            <a href='#contact'>Contact</a>
            <a href='#blogs'>Blogs</a>
        </nav>

        <div className='app__header-icons'>
            <FaInfoCircle className='app__header-info-btn' />
            <FaSearch className='app__header-search-btn' />
            <FaUser className='app__header-login-btn' />
        </div>

        <div className='app__header-navbar-menu'>
            <HiMenuAlt4 className='' onClick={() => setToggle(true)} />
            {
                toggle && (
                    <div>
                        <HiX onClick={() => setToggle(false)} />

                        <nav className='app__header-navbar'>
                            <a href='#home' onClick={()=> setToggle(false)}>Home</a>
                            <a href='#about' onClick={()=> setToggle(false)}>About</a>
                            <a href='#services' onClick={()=> setToggle(false)}>Services</a>
                            <a href='#projects' onClick={()=> setToggle(false)}>Projects</a>
                            <a href='#pricing' onClick={()=> setToggle(false)}>Pricing</a>
                            <a href='#contact' onClick={()=> setToggle(false)}>Contact</a>
                            <a href='#blogs' onClick={()=> setToggle(false)}>Blogs</a>
                        </nav>

                    </div>
                )
            }
        </div> */}

    </header>
  )
}

export default Header