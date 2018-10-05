import fetchWrapper from '../../util/fetchWrapper';

export const FETCH_ITEMS = 'FETCH_ITEMS';
export const ITEM_FAIL = 'ITEM_FAIL';
export const FETCH_ITEM = 'FETCH_ITEM';
export const NEW_ITEM = 'NEW_ITEM';
export const UPDATE_ITEM = 'UPDATE_ITEM';
export const DELETE_ITEM = 'DELETE_ITEM';
export const SET_LOADING_ITEM = 'SET_LOADING_ITEM';

export const fetchItems = () => dispatch => {
  dispatch({ type: SET_LOADING_ITEM });
  
  fetchWrapper('/api/item', { 
    method: 'GET',
  })
  .then(item_list => 
    dispatch({
      type: FETCH_ITEMS,
      payload: item_list
    })
  ).catch((err) => dispatch({ type: ITEM_FAIL, payload: err }));
};

export const createItem = item_to_create => dispatch => {
  dispatch({ type: SET_LOADING_ITEM });

  fetchWrapper('/api/item', { 
    method: 'POST',
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify(item_to_create)
  })
  .then(new_item => 
    dispatch({
      type: NEW_ITEM,
      payload: new_item
    })
  ).catch((err) => dispatch({ type: ITEM_FAIL, payload: err }));
};

export const updateItem = item_to_update => dispatch => {
  dispatch({ type: SET_LOADING_ITEM });

  fetchWrapper('/api/item/' + item_to_update.id, {
    method: 'PUT',
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify(item_to_update)
  })
  .then(updated_item =>
    dispatch({
      type: UPDATE_ITEM,
      payload: updated_item
    })
  ).catch((err) => dispatch({ type: ITEM_FAIL, payload: err }));
};

export const deleteItem = item_to_delete => dispatch => {
  dispatch({ type: SET_LOADING_ITEM });
  
  fetchWrapper('/api/item/' + item_to_delete.id, {
    method: 'DELETE'
  })
  .then(res =>
    dispatch({
      type: DELETE_ITEM,
      payload: item_to_delete.id
    })
  ).catch((err) => dispatch({ type: ITEM_FAIL, payload: err }));
};