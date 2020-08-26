import React from 'react';
import UsersList from '../components/UserList';

const Users = ()=>{

    const USERS = [{
        name:"yvette",
        places: 2,
        image: "https://www.planetware.com/wpimages/2020/01/india-in-pictures-beautiful-places-to-photograph-taj-mahal.jpg"
    }
]
    return(
       <UsersList items= {USERS}/>
    )
    
}



export default Users;