import React from "react";
import UsersDisplay from "./UsersDisplay";



const UserPresent = ({userPresent}) => {

    const {users} = userPresent;
    console.log(users);
    

    
    return(
            <>
                {users ? 
                 users.map((user, id) => <UsersDisplay key = {id} userName = {user.userName}/>
                 )
                 :
                 null
                 } 
        </>
    )

}

export default UserPresent;