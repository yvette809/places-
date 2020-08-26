import React from 'react';
import {Link} from 'react-router-dom'
import MainHeader from './MainHeader'

function MainNavigation(props) {
    return (
       <MainHeader>
           <button className = "main-navigation_menu-btn">
               <span/>
               <span/>
               <span/>
           </button>
           <h1 className= "main-navigation_title">
               Your places
           </h1>
           <nav>
               ...
           </nav>
       </MainHeader>
    )
}

export default MainNavigation
