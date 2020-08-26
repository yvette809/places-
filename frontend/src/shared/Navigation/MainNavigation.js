import React from 'react';
import {Link} from 'react-router-dom'
import NavLinks from './NavLinks'
import MainHeader from './MainHeader'
import SideDrawer from './SideDrawer'

function MainNavigation(props) {
    return (
        <>
        <SideDrawer>
            <nav className= "main-navigation__drawer-nav">
                <NavLinks/>
            </nav>
        </SideDrawer>
       <MainHeader>
           <button className = "main-navigation__menu-btn">
               <span/>
               <span/>
               <span/>
           </button>
           <h1 className= "main-navigation__title">
               Your places
           </h1>
           <nav className = "main-navigation__header-nav">
              <NavLinks/>
           </nav>
       </MainHeader>
       </>
    )
}

export default MainNavigation
