import React from "react";
import {Card, ListGroup} from "react-bootstrap";
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import "./style.css";

const List = ({setRoomName}) => {

  return (
    <>
    <div className="d-flex center justify-content-center align-items-center ">
    <Card style={{ width: '18rem' }}>
    <Card.Header>Available Rooms</Card.Header>
      <ListGroup variant="flush">
        <ListGroup.Item><button onClick = {() => {setRoomName('Boycott China')}}> <ArrowForwardIosIcon color="primary"/></button> Boycott China </ListGroup.Item>
        <ListGroup.Item><button onClick = {() => {setRoomName('Boycott PUBG')}}> <ArrowForwardIosIcon color="primary"/></button> Boycott PUBG</ListGroup.Item>
        <ListGroup.Item><button onClick = {() => {setRoomName('Boycott Rava Idli')}}> <ArrowForwardIosIcon color="primary"/></button> Boycott Rava Idli</ListGroup.Item>
      </ListGroup>
    </Card>
    </div>
  </>
  )


}

export default List;
