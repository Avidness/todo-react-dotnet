import React from 'react';
import { Provider } from 'react-redux';

import ItemListContainer from './containers/ItemListContainer';
import store from './redux/store';

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <ItemListContainer />
      </Provider>
    );
  }
}
