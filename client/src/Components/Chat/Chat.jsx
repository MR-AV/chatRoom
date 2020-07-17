import React ,{useState, useEffect} from "react";
import io from "socket.io-client";
import RoomInfo from "./RoomInfo/RoomInfo";
import SendMessage from "./SendMessage/SendMessage";
import DisplayMessages from "./Message/DisplayMessages";
import UserPresent from "./UserPresent/UserPresent";
import "./style.css";
import "./UserPresent/style.css";

let socket;

function Chat({name:roomName, username:userName}){
    
    // console.log(roomName, userName);

    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([]);
    const[users, setUsers] = useState({users:[]});

    const ENDPOINT = "localhost:5000";
    useEffect(() => {

        socket = io(ENDPOINT);
        // console.log("inside nameeffect ", roomName);

        socket.emit('join', {name: roomName, username: userName}, (error) => {
            if(error){
                alert(error);
            }
        });

        return () => {
            // console.log("unmounting!!");
            socket.emit('disconnect');
            socket.close();
        }
    } ,[ENDPOINT, roomName, userName]);

    useEffect(() => {
        socket.on('message', (message) => {
             setMessages(prev => [...prev, message]);
        });
        socket.on('roomData', (message) => {
            // console.log('Users  ', message);
            setUsers(message);
        });
    }, []);
  
     function sendMessage(event){
        event.preventDefault();
        console.log("message ", message);
        if(message){
            socket.emit('sendMessage', message, () => setMessage(''));
        }
    }

    //    console.log( "messages = ", messages);
        
    //to make div dynamic
     function handleMessage(text){
        setMessage(text);
        
    }

    return (
            <>
            {/* <div className="room-info">
                <RoomInfo roomName={roomName} userCount={ users.users.length || 0 }/>
            </div>     */}
            <div className="chat-screen">
            <div style={{flexShrink : "0"}} >
                <div className = "card-header">{roomName}</div>
                <div className = "chat-box">
                <div className="chat-header"><UserPresent userPresent = {users} /></div>
                <div className = "chat">
                <DisplayMessages messages={messages} name={userName} />
                <SendMessage message={message} setMessage={handleMessage} sendMessage={sendMessage} />
                </div>
                </div>
            </div> 
            </div>
            </>
        
    )
}

export default Chat; 