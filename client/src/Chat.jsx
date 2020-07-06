import React ,{useState, useEffect} from "react";
import io from "socket.io-client";
import RoomInfo from "./RoomInfo";
import SendMessage from "./SendMessage";
import DisplayMessages from "./DisplayMessages";
import {Card} from "react-bootstrap";
import UserPresent from "./UserPresent";
import "./Chat/Chat.css";
let socket;

const Chat = ({name, username}) => {
    

    // const [roomName, setRoomName] = useState('');
    // const [userName, setUserName] = useState('');
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([]);
    const[users, setUsers] = useState({});
    const ENDPOINT = "localhost:5000";
    useEffect(() => {

        socket = io(ENDPOINT);

        // setRoomName(name);
        // setUserName(userName);
        
        socket.emit('join', {name, username}, (error) => {
            if(error)
            alert(error);
        });

        return () => {
            socket.emit('disconnect');
            socket.off();
        }
    } ,[ENDPOINT,name, username]);

    useEffect(() => {
        socket.on('message', (message) => {
            setMessages(prev => [...prev, message]);
        });
        socket.on('roomData', (message) => {
            setUsers(message);
        });
    }, []);
  
    function sendMessage(event){
        event.preventDefault();

        if(message){
            socket.emit('sendMessage', message, () => setMessage(''));
        }
    }

        console.log("message = ", message, "messages = ", messages);
        
    return (
        <>
        <div className = "d-flex">
        <div>
        <Card style={{ width: '18rem' }}>
        <Card.Header style ={{background : "blue", color : "white"}}>
        <RoomInfo roomName = {name}/>
        </Card.Header>    
         <Card.Body>
        <DisplayMessages messages = {messages} name = {username}/>
        </Card.Body> 
        
        <Card.Footer><SendMessage message = {message} setMessage = {setMessage} sendMessage = {sendMessage}/></Card.Footer>    
        </Card>
        </div>
        <div className = "chat-user-present">
            <UserPresent userPresent = {users} />
        </div>

        </div>
        </>
    )
}

export default Chat; 