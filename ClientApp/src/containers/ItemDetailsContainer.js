import React, { Fragment } from 'react';
import { connect } from 'react-redux';

import ItemDetails from '../components/ItemDetails';
import ItemForm from '../components/ItemForm';
import * as ItemActions from '../redux/actions/ItemActions';

class ItemDetailsContainer extends React.Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.toggleEdit = this.toggleEdit.bind(this);
    this.onDelete = this.onDelete.bind(this);
    this.state = {
      editing: false,
      item: {
        label: '',
        description: ''
      }
    };
  }
  onChange(e) {
    let edited_item = this.state.item;
    edited_item[e.target.name] = e.target.value;
    this.setState({ item: edited_item});
  }
  onSubmit(){
    this.props.onUpdateItem(this.state.item);
  }
  onDelete(){
    this.props.onDeleteItem(this.props.item);
  }
  toggleEdit() {
    this.setState({ item: this.props.item });
    this.setState({ editing: !this.state.editing });
  }
  render() {
    return (
      <Fragment>
        {this.state.editing
        ? <ItemForm 
            item={this.props.item}
            onChange={this.onChange}
            onSubmit={this.onSubmit}
            toggleEdit={this.toggleEdit} />
        : <ItemDetails 
            item={this.props.item}
            onDelete={this.onDelete}
            toggleEdit={this.toggleEdit} />}
      </Fragment>
    );
  }
}

const mapDispatchToProps = {
  onUpdateItem: ItemActions.updateItem,
  onDeleteItem: ItemActions.deleteItem
}

export default connect(null, mapDispatchToProps)(ItemDetailsContainer);