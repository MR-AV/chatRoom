import React from "react";
import UsersDisplay from "./UsersDisplay";
import './style.css';


const UserPresent = ({userPresent}) => {

    const {users} = userPresent;
    console.log(users);
        
    return(
            <div className="user-display">
                {users ? 
                 users.map((user, id) => <UsersDisplay key = {id} userName = {user.userName}/>
                 )
                 :
                 null
                 } 
        </div>
    )

}

export default UserPresent;