import React from "react";
import List from "./Components/AvailableRooms/ListGroup";
import {useRoutes} from "hookrouter";
import Room from "./Components/RoomSelect/Room";

const routes = {

    '/' : () => <List />,
    '/room/:name*' : ({name}) => <Room name = {name}/>

}
export default function App(){

    const message = useRoutes(routes);

    return (
    <>  {message}</>
    )

}