import React from "react"
import NavigationDots from "../Components/Navbar/NavigationDots"

const AppWrap = (Component, idName, classNames) => function HOC(){
    return(
        <div id={idName} className={`app__container ${classNames}`}>
            <div className="app__wrapper app__flex">
                <Component />

                <div className="copyright">
                    <p className="p-text">
                        @2023 Lewis
                    </p>
                    <p className="p-text">
                        All Rights Reserved
                    </p>
                </div>
                <NavigationDots active={idName} />
            </div>
        </div>
      
    )
}

export default AppWrap