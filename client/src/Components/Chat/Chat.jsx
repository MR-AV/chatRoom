import React ,{useState, useEffect} from "react";
import io from "socket.io-client";
import RoomInfo from "../RoomInfo/RoomInfo";
import SendMessage from "../SendMessage/SendMessage";
import DisplayMessages from "../Message/DisplayMessages";
import {Card} from "react-bootstrap";
import UserPresent from "../UserPresent/UserPresent";
import "../UserPresent/UserPresent.css";
 import ip from  "./MyIp.js"
let socket;

const Chat = ({name, username}) => {
    
    console.log(name, username);

    // const [roomName, setRoomName] = useState('');
    // const [userName, setUserName] = useState('');
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([]);
    const[users, setUsers] = useState({});
    // const ENDPOINT = "localhost:5000";
     //for android connection
      const ENDPOINT = ip;
    useEffect(() => {

        socket = io(ENDPOINT);
        console.log("inside nameeffect ", name);

        // setRoomName(name);
        // setUserName(userName);
        
        socket.emit('join', {name, username}, (error) => {
            if(error){
            alert(error);
           
            }
        });

        return () => {
            console.log("unmounting!!");
            socket.emit('disconnect');
             socket.close();
        }
    } ,[ENDPOINT, name, username]);

    useEffect(() => {
        // console.log("inside effect ", name);
        socket.on('message', (message) => {
           // console.log("message = ", message);
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

       console.log( "messages = ", messages);
        
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