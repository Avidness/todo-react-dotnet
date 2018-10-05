import React from 'react';
import { Row, Col } from 'react-flexbox-grid';
import { Paper, Button } from '@material-ui/core';

const ItemDetails = (props) => {
  return (
    <Paper elevation={1} className="item-row">
      <Row>
        <Col xs={3}>
          {props.item.label}
        </Col>
        <Col xs={6}>
          {props.item.description}
        </Col>
        <Col xs={3}>
          <Button 
            variant="contained" 
            onClick={props.toggleEdit}>
            edit
          </Button>
          <Button 
            variant="contained" 
            onClick={props.onDelete}>
            delete
          </Button>
        </Col>
      </Row>
    </Paper>
  );
}

export default ItemDetails;