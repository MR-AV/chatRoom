import React from "react";
import Chat from "./Chat";
import Join from "./Join";
import {useRoutes} from "hookrouter";


const routes = {

    '/' : () => (name) => <Join name = {name} />,
    '/chat/:username' : ({username}) => (name)  => <Chat name = {name} username = {username} />

}


const Room = (props) => {

    const result = useRoutes(routes);

    return (
        <>
        {result(props.name)}
        </>
    )

}

export default Room;