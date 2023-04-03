import React from 'react'

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

        
    </header>
  )
}

export default Header