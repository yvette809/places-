import React from 'react';
import UsersList from '../components/UserList';

const Users = ()=>{

    const UsersD = {
        name:"yvette",
        placeCount: 2,
        image: "https://www.planetware.com/wpimages/2020/01/india-in-pictures-beautiful-places-to-photograph-taj-mahal.jpg"
    }
    return(
       <UsersList items= {usersD}/>
    )
    
}



export default Users;