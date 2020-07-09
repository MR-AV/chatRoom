import React from "react";
import {Card, ListGroup} from "react-bootstrap";
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

const List = ({setRoomName}) => {

  return (
    <>

    <Card style={{ width: '18rem' }}>
    <Card.Header>Available Rooms</Card.Header>
      <ListGroup variant="flush">
        <ListGroup.Item><button onClick = {() => {setRoomName('Boycott China')}}> <ArrowForwardIosIcon color="primary"/></button> Boycott China </ListGroup.Item>
        <ListGroup.Item><button onClick = {() => {setRoomName('Boycott PUBG')}}> <ArrowForwardIosIcon color="primary"/></button> Boycott PUBG</ListGroup.Item>
        <ListGroup.Item><button onClick = {() => {setRoomName('Boycott PAhadis')}}> <ArrowForwardIosIcon color="primary"/></button> Boycott Pahadis</ListGroup.Item>
      </ListGroup>
    </Card>
    
  </>
  )


}

export default List;
