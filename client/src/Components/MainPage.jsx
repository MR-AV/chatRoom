import React,{useState} from "react";
import Room from "./RoomSelect/Room";
import List from "./AvailableRooms/ListGroup";

const MainPage = () => {

    const [roomName, setRoomName] = useState(null);

    return (
        roomName ? <Room name={roomName} /> : <List setRoomName={setRoomName} />
    );
}

export default MainPage;