import React from "react";
import {Card, ListGroup} from "react-bootstrap";
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import {A} from "hookrouter";


const List = () => {

return (
  <>

  <Card style={{ width: '18rem' }}>
  <Card.Header>Available Rooms</Card.Header>
    <ListGroup variant="flush">
      <ListGroup.Item><A href = "/room/china"><ArrowForwardIosIcon color="primary"/></A> Boycott China</ListGroup.Item>
      <ListGroup.Item><A href = "/room/pubg"><ArrowForwardIosIcon color="primary"/></A>Boycott PUBG</ListGroup.Item>
      <ListGroup.Item><A href = "/room/oahadis"><ArrowForwardIosIcon color="primary"/></A> Boycott Pahadis</ListGroup.Item>
      {/* {result} */}
    </ListGroup>
  </Card>
  
</>
)


}

export default List;
