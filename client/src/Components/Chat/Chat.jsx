import React ,{useState, useEffect} from "react";
import io from "socket.io-client";
import RoomInfo from "./RoomInfo/RoomInfo";
import SendMessage from "./SendMessage/SendMessage";
import DisplayMessages from "./Message/DisplayMessages";
import UserPresent from "./UserPresent/UserPresent";
import './style.css';

let socket;

function Chat({name:roomName, username:userName}){
    
    console.log(roomName, userName);

    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([]);
    const[users, setUsers] = useState({users:[]});

    const ENDPOINT = "localhost:5000";
    useEffect(() => {

        socket = io(ENDPOINT);
        console.log("inside nameeffect ", roomName);

        socket.emit('join', {name: roomName, username: userName}, (error) => {
            if(error){
                alert(error);
            }
        });

        return () => {
            console.log("unmounting!!");
            socket.emit('disconnect');
            socket.close();
        }
    } ,[ENDPOINT, roomName, userName]);

    useEffect(() => {
        socket.on('message', (message) => {
             setMessages(prev => [...prev, message]);
        });
        socket.on('roomData', (message) => {
            console.log('Users  ', message);
            setUsers(message);
        });
    }, []);
  
    function sendMessage(event){
        event.preventDefault();

        if(message){
            socket.emit('sendMessage', message, () => setMessage(''));
        }
    }

       console.log( "messages = ", messages);
        
    return (
        <div className = "chat-screen">
            <div className="room-info">
                <RoomInfo roomName={roomName} userCount={ users.users.length || 0 }/>
            </div>    
            <div className="chat-box">
                <DisplayMessages messages={messages} name={userName} />
                <div className="input-msg"><SendMessage message={message} setMessage={setMessage} sendMessage={sendMessage} /></div>    
            </div> 
                <UserPresent userPresent = {users} />
            <div className="footer">copyright &copy; 2020</div>
        </div>
    )
}

export default Chat; 