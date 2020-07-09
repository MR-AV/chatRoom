import React,{useState} from "react";
import Room from "./RoomSelect/Room";
import List from "./AvailableRooms/ListGroup";

const MainPage = () => {

    const [roomName, setRoomName] = useState('');

    return (

        roomName === '' ? <List setRoomName = {setRoomName} />
        : <Room name = {roomName}/>
    
    )
}

export default MainPage;