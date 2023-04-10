import React, { useState } from 'react'
import './Navbar.scss'

import { HiMenuAlt4, HiX} from 'react-icons/hi'

const Navbar = () => {

    const [toggle, setToggle] = useState(false);

  return (
    <header className='app__navbar'>
        
        <div className='app__navbar-logo'>
            <a href='#'> We<span>build</span></a>
        </div>

        <ul className='app__navbar-links'>
            {['home', 'about', 'services', 'projects', 'contact', 'blogs'].map((item)=>(
                <li key={`link-${item}`} className='app__flex p-text'>
                    <div />
                    <a href={`#${item}`}>{item}</a>
                </li>
            ))}
        </ul>

        <div className='app__navbar-menu'>
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
    </header>
  )
}

export default Navbar