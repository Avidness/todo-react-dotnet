import React from 'react';
import { connect } from 'react-redux';

import ItemNewContainer from './ItemNewContainer';
import ItemList from '../components/ItemList';
import * as ItemActions from '../redux/actions/ItemActions';

class ItemListContainer extends React.Component {
  componentDidMount() {
    this.props.onFetchItems();
  }

  render() {
    return (
      <div>
        <h1>TODO:</h1>
        <ItemNewContainer />
        <span style={{color: 'red'}}>{this.props.errorMessage}</span> 
        {this.props.loading
        ? <p>Loading...</p>
        : <ItemList items={this.props.items} />}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  items: state.items.list,
  loading: state.items.loading,
  errorMessage: state.items.errorMessage
});

const mapDispatchToProps = {
  onFetchItems: ItemActions.fetchItems
}

export default connect(mapStateToProps, mapDispatchToProps)(ItemListContainer);