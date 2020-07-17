import React from "react";
import UsersDisplay from "./UsersDisplay";
import './style.css';
import ScrollToBottom from "react-scroll-to-bottom";
import { css } from 'glamor';


const ROOT_CSS = css({
    // margin: '10px',
    paddingBottom : "10px",
    height: "50vh"
  });


const UserPresent = ({userPresent}) => {

    const {users} = userPresent;
    // console.log(users);
        
    return(
            <div className = "users-box">
             <ScrollToBottom className = {ROOT_CSS}>
                <h5>Users Active</h5>
                {users ? 
                 users.map((user, id) => <UsersDisplay key = {id} userName = {user.userName}/>
                 )
                 :
                 null
                 } 
                 </ScrollToBottom>
                 </div>
    )

}

export default UserPresent;