import React,{useState} from "react";
import Chat from "../Chat/Chat";
import Join from "../JoinRoom/Join";

const Room = ({name}) => {

    const [username, setUsername] = useState('');

    return (

        username === "" ? <Join name = {name} setUsername = {setUsername} />
        : <Chat name ={name} username = {username} />
    
    )
}

export default Room;