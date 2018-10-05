import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { Button } from '@material-ui/core';

import ItemForm from '../components/ItemForm';
import * as ItemActions from '../redux/actions/ItemActions';

class ItemListContainer extends React.Component {
  constructor(props) {
    super(props);
    this.toggleForm = this.toggleForm.bind(this);
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.state = {
      showForm: false,
      item: {
        label: '',
        description: ''
      }
    };
  }
  toggleForm(){
    this.setState({ showForm: !this.state.showForm });
  }
  onChange(e) {
    let edited_item = this.state.item;
    edited_item[e.target.name] = e.target.value;
    this.setState({ item: edited_item});
  }
  onSubmit(){
    this.props.onCreateItem(this.state.item);
    this.toggleForm();
    this.setState({item: {
      label: '',
      description: ''
    }});
  }
  render() {
    return (
      <Fragment>
        {this.state.showForm
        ? <ItemForm 
            item={this.state.item}
            toggleEdit={this.toggleForm}
            onChange={this.onChange} 
            onSubmit={this.onSubmit} />
        : <Button 
            variant="contained" 
            onClick={this.toggleForm}>
            new
          </Button>}
      </Fragment>
    );
  }
}

const mapDispatchToProps = {
  onCreateItem: ItemActions.createItem
}

export default connect(null, mapDispatchToProps)(ItemListContainer);