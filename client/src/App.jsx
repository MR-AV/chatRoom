import React from "react";
import List from "./ListGroup";
import {useRoutes, navigate} from "hookrouter";
import Room from "./Room";

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