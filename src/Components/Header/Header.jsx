import React from 'react'
import {FaInfoCircle, FaBars, FaSearch, FaUser} from 'react-icons/fa'

const Header = () => {
  return (
    <header className='app__header'>
        <a href='#' className='app__header-logo'> We<span>build</span></a>

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
            <FaBars className='app__header-menu-btn' />
            <FaInfoCircle className='app__header-info-btn' />
            <FaSearch className='app__header-search-btn' />
            <FaUser className='app__header-login-btn' />
        </div>

    </header>
  )
}

export default Header