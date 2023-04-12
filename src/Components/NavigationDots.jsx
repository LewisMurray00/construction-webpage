import React from 'react'

const NavigationDots = (active) => {
  return (
    <div className='app__navigation-dot'>
        {['home', 'about', 'projects', 'contact', 'blogs'].map((item, index) => (
            <a
             href={`#${item}`}
             key={item + index}
             className="app__navigation-dot"
             style={active === item ? { backgroundColor: '#f5bf23' } : {}}
            >
      </a>
    ))}
    </div>
  )
}

export default NavigationDots