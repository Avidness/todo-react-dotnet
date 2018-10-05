import React from 'react';
import { Row, Col } from 'react-flexbox-grid';
import { Paper, Input, Button } from '@material-ui/core';

const ItemForm = (props) => {
  return (
    <Paper elevation={2} className="item-row">
      <Row>
        <Col xs={3}>
          <Input type="text" 
              name="label" 
              defaultValue={props.item.label}
              onChange={props.onChange} />
        </Col>
        <Col xs={6}>
          <Input type="text" 
              name="description" 
              defaultValue={props.item.description}
              onChange={props.onChange} />
        </Col>
        <Col xs={3}>
          <Button 
            variant="contained" 
            onClick={props.onSubmit}>
            save
          </Button>
          <Button 
            variant="contained" 
            onClick={props.toggleEdit}>
            cancel
          </Button>
        </Col>
      </Row>
    </Paper>
  );
}

export default ItemForm;