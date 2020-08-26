import React from 'react'
import './UsersItem.css'
import {Link} from 'react-router-dom'
import Avatar from  '../../shared/UIelements/Avatar/Avatar'
import  '../../shared/UIelements/Avatar/Avatar.css'

const UserItem = (props) => {
    return (
      
       <li className= "user-item">
           <div className="user-item_content">
               <Link to={`/${props.id}/places`}>
               <div className ="user-item_image">
                  {/* <img src = {props.image} alt ={props.name}/> */}

                <Avatar image ={props.image} alt= {props.name}/> 
               </div>
               <div className= "user-item_info">
                   <h2>{props.name}</h2>
                   <h3>{props.placeCount}{props.placeCount === 1? 'place' : 'places'}
                   </h3>
               </div>
               </Link>

               </div>
       </li>
     
    )
}

export default UserItem
